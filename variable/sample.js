// var再宣言
// エラーなし
// var nickname = "taro";
// console.log(nickname);
// var nickname = "ichiro";
// console.log(nickname);

// let再宣言
// エラーあり
// let nickname = "taro";
// console.log(nickname);
// let nickname = "ichiro";
// console.log(nickname);

// const 再宣言
// エラーあり
// const nickname = "taro";
// console.log(nickname);
// const nickname = "ichiro";
// console.log(nickname);

// var再代入
// 再代入可能
// var nickname = "taro";
// console.log(nickname);
// nickname = "jiro";
// console.log(nickname);

// let再代入
// 再代入可能
// let nickname = "taro";
// console.log(nickname);
// nickname = "jiro";
// console.log(nickname);

// const再代入
// 再代入不可
// const nickname = "taro";
// console.log(nickname);
// nickname = "jiro";
// console.log(nickname);

// varスコープ
// var str = "webcamp"; // グローバルスコープ

// function foo() {
//   console.log(str); // 問題なし
//   var y = "hello" // 関数スコープ
// }

// foo();
// console.log(y); // エラー

// letスコープ
// function foo() {
//   let x = "webcamp";
//   {
//     let y = "hello webcamp";
//   }
//   console.log(x);
//   console.log(y); // エラー
// }

// foo();

// for(let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i); // エラー

// 巻き上げ
// var str = "webcamp";

// function foo() {
//   console.log(str);
//   var str = "dmm webcamp";
//   console.log(str);
// }

// foo();

var str = "webcamp";

function foo() {
  var str;
  console.log(str);
  var str = "dmm webcamp";
  console.log(str);
}

foo();