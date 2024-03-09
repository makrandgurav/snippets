// 1
// 12
// 123
// 1234
// 12345
let n = 5;
// let str = '';
// for(let i =1; i <= n; i++) {
// 	for (let j = 1; j <= i; j++) {
//   	str+=`${j}`;
//   }
//   str+=`\n`
// }
// console.log(str)


// *****
// ****
// ***
// **
// *
let str='';
for(let i =1; i <= n; i++) {
	for (let j = 1; j <= n-i+1; j++) {
  	str+=`*`;
  }
  str+=`\n`
}
console.log(str);

let m = 5;
let strp = "";
for ( let i = m; i >= 1; i--) {
	for (let j = i; j >= 1; j--) {
        // console.log(i, j)
        strp+=`*`;
  }
  strp+=`\n`;
}
console.log(strp);