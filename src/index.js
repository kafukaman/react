/**
 * const,let等の変数宣言
 */
// var var1 = "var変数";
// console.log(var1);

// //var変数は上書き可能
// var1 = "var変数を上書き";
// console.log(var1);

// //var変数は再宣言可能
// var var1 = "var変数を再宣言";
// console.log(var1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // //const変数は上書き不可
// // val3 = "const変数を上書き";

// //const変数は再宣言不可
// const val3 = "const変数を再宣言";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "atsushi",
//   age: 32
// };

// val4.name = "mari";
// val4.address = "tokyo";
// console.log(val4);

// //constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "atsushi";
// const age = 32;

// //従来の方法
// // const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// // console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "atsushi",
//   age: 32
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// ↑ myProfileからname, ageを取り出している(オブジェクトから指定のプロパティを抜き出している)
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//分割代入は配列にも使えます
// const myProfile = ["atsushi", 32];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "sample") => console.log(`こんにちは${name}さん！`);
// // 初期値が入っているのだと理解する
// sayHello();

/**
 * スプレット構文 ...　配列に...がついていたら順番に処理する
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]); //下と同じこと
// sumFunc(...arr1); //上と同じこと

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); //10,20
// arr6[0] = 100;
// console.log(arr6); //100,20
// console.log(arr4); //10,20 スプレット構文でコピーすると元の構文に引き継がれない

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //10,20,30,40

// const arr8 = arr4;
// console.log(arr8); //10,20
// arr8[0] = 100;
// //元の構文に引き継がれてしまう
// console.log(arr8); //100,20
// console.log(arr4); //100,20

/**
 * mapやfilterを作った配列処理
 */
//map
const nameArr = ["田中", "山田", "佐藤"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です`);
// }

//リターンされた結果に基づいて新しい配列を作成する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//配列をmapで処理して何か行う
// nameArr.map((name) => console.log(name));

//引数を増やすとiの要素を使うことができる
// nameArr.map((name, i) => console.log(`${i+1}番目は${name}です`));

//filter
//配列の中である条件に一致するものを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //奇数だけ
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
