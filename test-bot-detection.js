import { checkIfBotIp, getRandomRedirectUrl, BOT_IP_RANGES, getBotNames } from './dist/utils/botDetection.js';
import botRedirectConfig from './dist/config/botRedirects.json' with { type: 'json' };

console.log('=== Bot Detection Test (Generic) ===\n');

// Test various IPs including Facebook, Test IP, and regular IPs
const testIPs = [
  // Facebook IPs
  '31.13.24.1',      // Facebook range: 31.13.24.0/21
  '66.220.144.5',    // Facebook range: 66.220.144.0/20
  '157.240.1.1',     // Facebook range: 157.240.0.0/16
  '173.252.64.1',    // Facebook range: 173.252.64.0/18

  // Test IP
  '188.245.186.184', // Test IP for debugging

  // Regular IPs (should not match)
  '8.8.8.8',         // Google DNS
  '1.1.1.1',         // Cloudflare DNS
  '192.168.1.1',     // Private IP
];

console.log('Testing IP detection:\n');
testIPs.forEach(ip => {
  const botName = checkIfBotIp(ip);
  if (botName) {
    console.log(`IP: ${ip.padEnd(15)} -> ✓ BOT: ${botName}`);
  } else {
    console.log(`IP: ${ip.padEnd(15)} -> ✗ Not a bot`);
  }
});

console.log('\n=== Bot Types Configured ===\n');
const botNames = getBotNames();
console.log(`Total bot types: ${botNames.length}`);
botNames.forEach(name => {
  console.log(`  - ${name}`);
});

console.log('\n=== Testing Random URL Selection ===\n');
console.log('Available URLs:');
botRedirectConfig.redirectUrls.forEach((url, index) => {
  console.log(`  ${index + 1}. ${url}`);
});

console.log('\nRandom selections (5 tests):');
for (let i = 0; i < 5; i++) {
  const randomUrl = getRandomRedirectUrl(botRedirectConfig.redirectUrls);
  console.log(`  ${i + 1}. ${randomUrl}`);
}

console.log('\n=== Bot IP Ranges Summary ===');
BOT_IP_RANGES.forEach(botRange => {
  console.log(`\n${botRange.name}:`);
  console.log(`  Total ranges: ${botRange.ranges.length}`);
  console.log(`  Sample ranges:`);
  botRange.ranges.slice(0, 3).forEach(range => {
    console.log(`    - ${range}`);
  });
  if (botRange.ranges.length > 3) {
    console.log(`    ... and ${botRange.ranges.length - 3} more`);
  }
});

console.log('\n✓ Test completed successfully!');
