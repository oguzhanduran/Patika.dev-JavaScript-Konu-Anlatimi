//Diziye Yeni Eleman Eklemek, Çıkartmak ve Güncellemek

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

//array sona öğe/eleman eklemek -> push
items.push(50)
console.log("50 : ", items)

//array başa öğe/eleman eklemek -> unshift
items.unshift(5)
console.log("5 : ", items)

//array en sondaki  öğeyi/elemanı çıkarmak-> pop
 let lastItem = items.pop() // son elemanı lastItem değişkeninin içine ekledik.
 console.log("Last Item :", lastItem, "Items", items)

 //array en bastaki öğeyi/elemanı çıkarmak-> shift
let firstItem = items.shift() // ilk elemanı firstItem değişkeninin içine ekledik.
 console.log("First Item :", firstItem , "Items", items)

 //array içindeki bir öğenin değiştirilmesi

 //ilk elemanın değiştirilmesi
 items[0] = 5;
 console.log(items)

  //ilk elemanın değiştirilmesi

  items[items.length - 1] = 1000;
  console.log(items)

  items[1000] = 150;
  console.log(items)