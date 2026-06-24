import fs from 'fs';
import path from 'path';

const termuxHome = '/data/data/com.termux/files/home';

// 1. Files for lightningcss
const lightningSource = path.join('node_modules', 'lightningcss-android-arm64', 'lightningcss.android-arm64.node');
const lightningTarget = path.join(termuxHome, 'lightningcss.android-arm64.node');

// 2. Files for @tailwindcss/oxide
const oxideSource = path.join('node_modules', '@tailwindcss', 'oxide-android-arm64', 'tailwindcss-oxide.android-arm64.node');
const oxideTarget = path.join(termuxHome, 'tailwindcss-oxide.android-arm64.node');

if (fs.existsSync('/data/data/com.termux/files/usr/bin/node')) {
  console.log('Termux environment detected. Applying compatibility patches...');
  
  try {
    // --- PART 1: Copy Native Binaries ---
    if (fs.existsSync(lightningSource)) {
      fs.copyFileSync(lightningSource, lightningTarget);
      console.log(`Copied lightningcss native binary to ${lightningTarget}`);
    }
    if (fs.existsSync(oxideSource)) {
      fs.copyFileSync(oxideSource, oxideTarget);
      console.log(`Copied @tailwindcss/oxide native binary to ${oxideTarget}`);
    }

    // --- PART 2: Patch lightningcss Loader ---
    const lightningIndex = path.join('node_modules', 'lightningcss', 'node', 'index.js');
    if (fs.existsSync(lightningIndex)) {
      let content = fs.readFileSync(lightningIndex, 'utf8');
      const targetCode = "native = require(`lightningcss-${parts.join('-')}`);";
      const replacementCode = `if (parts.join('-') === 'android-arm64') {
    native = require('${lightningTarget}');
  } else {
    native = require(\`lightningcss-\${parts.join('-')}\`);
  }`;
      
      if (content.includes(targetCode)) {
        content = content.replace(targetCode, replacementCode);
        fs.writeFileSync(lightningIndex, content, 'utf8');
        console.log('Successfully patched lightningcss loader.');
      } else if (content.includes(lightningTarget)) {
        console.log('lightningcss loader is already patched.');
      }
    }

    // --- PART 3: Patch @tailwindcss/oxide Loader ---
    const oxideIndex = path.join('node_modules', '@tailwindcss', 'oxide', 'index.js');
    if (fs.existsSync(oxideIndex)) {
      let content = fs.readFileSync(oxideIndex, 'utf8');
      const targetCode = "function requireNative() {";
      const replacementCode = `function requireNative() {
  if (process.platform === 'android' && process.arch === 'arm64') {
    try {
      return require('${oxideTarget}');
    } catch (e) {
      loadErrors.push(e);
    }
  }`;
      
      if (content.includes(targetCode) && !content.includes(oxideTarget)) {
        content = content.replace(targetCode, replacementCode);
        fs.writeFileSync(oxideIndex, content, 'utf8');
        console.log('Successfully patched @tailwindcss/oxide loader.');
      } else if (content.includes(oxideTarget)) {
        console.log('@tailwindcss/oxide loader is already patched.');
      }
    }
  } catch (err) {
    console.error('Failed to apply Termux patches:', err);
  }
} else {
  console.log('Non-Termux environment. Skipping Termux compatibility patches.');
}
