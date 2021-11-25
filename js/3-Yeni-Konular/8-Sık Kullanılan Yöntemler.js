// İki array arasındaki ortak elemanları seçme

let a = ["a", "b", "c"];
let b = ["a", "c"];
let d = []
let c = {};

a.forEach((num) => {
  c[num] = true;
})

b.forEach((num) => {
  if(c[num]) {
    d += num
  }
  
  
})

d = d.split("")

console.log(d) // ["a", "c"]

// -------------------------------------------------------------------------------------------------------------------

// Bir array'in içindeki elemanları toplama

// Number ise 

let a = [5, 7, 15]


let total = a.reduce((acc, number) => acc + number)

console.log(total) // 27

//------------------------------------------------------

// String ise

let a = ["5", "7", "10", "15"];

let d = a.map((num) => Number(num))

let total = d.reduce((acc, number) => acc + number)

console.log(total) // 27

// -------------------------------------------------------------------------------------------------------------------
