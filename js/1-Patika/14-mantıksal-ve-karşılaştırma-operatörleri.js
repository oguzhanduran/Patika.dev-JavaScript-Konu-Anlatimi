
let price = "100" // = tanımlama yapmak için kullanılan bir operatör.

let user = "hakan"
// == Eşitse

console.log( "==", price == 1 )
console.log( "==", price == 100 )

// === hem değeri hem de türü eşitse
console.log( "===",price === 1 )
console.log( "===",price === 100 )
console.log( "===",price === "100") //burda true demesinin nedeni türü de eşit olduğu için yani ikiside string yapıya sahip.

// != eşit değilse

console.log( price != 1 )
console.log( user != "guest" ) // yani kullanıcı misafir değilse şunu şunu yap gibi düşünebiliriz.

// < küçükse

console.log("price < 100", price < 100)

// <= küçük veya eşitse

console.log("price <= 100", price <= 100 )

// büyükse

console.log("price > 100", price > 100 )

//büyüktür veya eşitse

console.log("price >= 100", price >= 100 )

// && ve (and operatörü)
let fiyat = 0
console.log(fiyat > 0 && user != "guest") // hem fiyat > 0 olmalı hemde user guest'e eşit olmamalı true olması için


// || veya (or operatörü)

console.log(fiyat > 0 || user != "guest")  // illa iki tane şart olmasına gerek yok 2'den fazla şartda da yapılabilir

// ! değil (tersi) not operatörü

console.log(fiyat > 0 && !user == "guest") // ! işaretiyle çıkan sonucun tersi alınır yani normalde user == "guest" doğru değildir yani 0'dır tersini alınca 1 olur. cevap 0 ve 1'den sıfırdır.

console.log( !( fiyat > 0 && !user == "guest") ) //parantez içinde hepsinin tersini isteyebilirim.

console.log(2) // 2
console.log(!2) // false
console.log (!!2) //true


