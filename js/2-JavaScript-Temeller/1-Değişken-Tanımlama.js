// Örnek 1 

var sayı1 = 20;
var sayı2 = 30;
var sayı3 = 40;

alert("Sayıların Toplamları :" + (sayı1 + sayı2 + sayı3)); //JavaScript'te stringlerimiz ve sayılarımız direk olarak toplanabiliyor. Fakat sayı toplamı için bunu parantez içersinde yazmamız lazım.

// Çıktı -> Sayıların Toplamları :90

//Parantez Kullanmasaydık: 
alert("Sayıların Toplamları :" + sayı1 + sayı2 + sayı3);
// Çıktı -> Sayıların Toplamları :203040 olurdu. Yani biz burda + yazdığımız zaman hepsi stringe dönüşüyor gibi düşünebiliriz.

// Örnek 2

var a = "JavaScript ";
var b = "Programlama ";
var c = "Dilidir.";

alert(a + b + c);

// Çıktı -> JavaScript Programlama Dilidir.

// Örnek 3

var a;
a = 10;

var b = a * 2 + 10;

alert("b'nin değeri :" + b)

// çıktı -> b'nin değeri :30