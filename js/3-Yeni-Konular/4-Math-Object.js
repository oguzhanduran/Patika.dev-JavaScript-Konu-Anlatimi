// Math Object(Methods)

// Math nesnesi sayılar üzerinde matematiksel işlem yapmamıza izin verir.

// Math.PI pi --> sayısını verir

console.log(Math.PI) // 3.141592653589793

// Math.round() --> Sayıyı yakın olan alt değere veya üst değere yuvarlar.

console.log(Math.round(6.6)) //7
console.log(Math.round(6.5)) //7
console.log(Math.round(6.4)) //6
console.log(Math.round(6.499999)) //6

// Math.pow(x,y) -->  x üzeri y değerini döndürür. (pow = power)

console.log(Math.pow(2,4)) //16

// Math.sqrt(x) --> x'in karakökünü döndürür. (sqrt = squareroot)

console.log(Math.sqrt(81)) //9
console.log(Math.sqrt(60)) //7.745966692414834

// Math.abs(x) --> x'in mutlak (pozitif) değerini döndürür. (abs = absolute)

console.log(Math.abs(-70)) //70 

// Math.ceil(x) --> x değerini en yakın bir üstündeki tam sayıya yuvarlar.

console.log(Math.ceil(6.1)) //7
console.log(Math.ceil(6.9)) //7

// Math.floor(x) --> x değerini en en yakın alttaki tam sayıya yuvarlar.

console.log(Math.floor(5.9)) //5
console.log(Math.floor(7.5)) //7

// Math.sin(x) x açısının radyan cinsinden sinüsünü (-1 ile 1 arasında bir değer ) döndürür.
// Radyan yerine derece kullanmak isterseniz derece olarak radyana çevirmeniz gerekir. 
// Acı radyan = Acı derece * PI / 180

console.log(Math.sin(90)) // 0.8939966636005579 gelir radyan oldugu için
console.log(Math.sin(90*(Math.PI/180))) // 1 gelir dereceye çevirdiğimiz için

// Math.cos(x) x açısının radyan cinsinden cosinüsünü (-1 ile 1 arasında bir değer ) döndürür.
// Radyan yerine derece kullanmak isterseniz derece olarak radyana çevirmeniz gerekir. 
// Acı radyan = Acı derece * PI / 180

console.log(Math.cos(0)) // 1


// Math.min(), Math.max Parametreler listesindeki en düşük ve en buyuk değerleri bulmak için kullanılırlar.

console.log(Math.min(7, 80, -70, 500, 788)) // -70
console.log(Math.max(7, 80, -70, 500, 788)) //788
console.log(Math.min()) // infinity
console.log(Math.min()) // infinity

// Math.random() O ile 1 arasında rastgele bir değer üretir. 0 dahil 1 hariçtir

console.log(Math.random()) //0.7838592192943599

// Math.constructor --> Diğer global nesnelerin aksine Math nesnelerinin yapıcısı yoktur. Methodlar ve sabitler statiktir.