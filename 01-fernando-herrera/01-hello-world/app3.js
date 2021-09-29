console.log('Program start');     // 1º

setTimeout(() => {
  console.log('First Timeout');   // 5º
}, 3000);

setTimeout(() => {
  console.log('Second Timeout');  // 3º
}, 0);

setTimeout(() => {
  console.log('Third Timeout');   // 4º
}, 0);

console.log('Program end');       // 2º