/*******************Veri Turu Ogrenmek ve Veri Turu Degısımleri ***************/

//Veri türünü öğrenmek typeoff:
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
      "price :",
      typeof(price)
)

console.log(
      "stringPrice :",
      typeof(stringPrice)
)

console.log(
      "hasPassword :",
      typeof(hasPassword)
)

//string (metinsel bilgileri) int veya float'a dönüştürmek

let number1 = "11"
number1 = parseInt(number1) 
console.log("number1 :", number1, typeof(number1) ) //Bunu pars ile birlikte içersindeki yapıyı almak istiyoruz. yani biz parsInt ile birlikte string yapıyı intager'a çevirdik.

let number2 = "11px"
number2 = parseInt(number2) 
console.log("number2 :", number2, typeof(number2) ) //Bunu pars ile birlikte içersindeki yapıyı almak istiyoruz. yani biz parsInt ile birlikte string yapıyı intager'a çevirdik.

let number3 = "px11"  //px diye başında yazsaydı bu sefer NaN number karşımıza çıkar yani dönüştürmeye çalışır ama olmaz demekki yapıya dikkat etmek lazım yani px'in önde olması işi değistirdi. NaN sayı olamaz anlamına gelir.
number3 = parseInt(number3) 
console.log("number3 :", number3, typeof(number3) ) 

let number4 = "11.1"  
number4 = parseInt(number4)   //Virgüllü sayılarıda number olarak gösterir ama tam sayı olarak. 
console.log("number4 :", number4, typeof(number4) ) 

let number5 = "11.1px"  
number5 = parseFloat(number5)  //Virgüllü bir sayı var ve ben içerisindeki rakamsal bilgiyi almaya çalışırsam parseFloat ile virgüllü sayıyı alabilirim. parseFloat yerine number yazsaydık px ve virgüllü sayı olduğu için hata verecekti. 
console.log("number5 :", number5, typeof(number5) ) 

//Number veri tipinden stringe dönüstürmek

let number6 = 55.5
number6 = number6.toString()  // .toString ile birlikte rakamsal ifadeyi stringe çeviriyoruz.
console.log(number6, typeof(number6) )