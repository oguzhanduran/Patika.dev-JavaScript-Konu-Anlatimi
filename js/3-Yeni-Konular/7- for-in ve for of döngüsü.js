// for/in : Bir nesnenin özelliklerini döngüye alır.
// for/of : Yinelenebilir bir nesnenin değerlerini döngüye alır.

// JavaScript for/in Döngüsü

// JavaScript de for/in döngüsü ile bir nesnenin özellikleri arasında dolaşabiliriz.

var fullName = {
 
    name : "Ali",
    lastName : "Veli",
    age : 45
   
  };
   
  var text = "";
   
  for (x in fullName) {
   
      text = text + fullName[x] + " ";    
   
  }
   
  console.log(text); // Ali Veli 45

  // JavaScript for/of Döngüsü

// JavaScript de for/of döngüsü ile yinelenebilir bir nesnenin özellikleri arasında dolaşabiliriz. Örneğin diziler (Arrays), dizeler (Strings), düğüm listeleri (NodeLists), haritalar (Maps) vb.

for (degisken of yinelenebilir_nesne) {
 
    // Çalıştırılacak kodlar
   
  }

// Örnek

var sayilar = [32, 45, 7, 87]; 
 
for (i of sayilar) { 
  
  console.log(i*3); 
 
} 

// 96

// 135

// 21

// 261

// Örnek 2

var text = "JavaScript"; 
 
for (x of text) { 
  
  console.log(x); 
 
}  


// J

// a

// v

// a

// S

// c

// r

// i

// p

// t

// for (const değişken of dizi) döngüsü ile dizinin içinde bir elemandan kaç tanem olduğunu hesaplama.

let a = [1, 1, 1, 1, 2, 2]
let b = [0, 0, 0, 0, 0, 0]

for (const i of a) {
  b[i]++
  console.log(b[i])
}

// 1
// 2
// 3
// 4-4tane 1 var demek her defasında sayıyor.
// 1
// 2-2 tane 2 var demek