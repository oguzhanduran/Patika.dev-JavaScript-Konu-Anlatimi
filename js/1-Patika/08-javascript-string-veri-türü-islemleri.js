/*************** String Veri Türü Islemleri ***************/

let email = "hakanyalcinkaya@gmail.com"
let firstName = "hakan"
let lastName = "YALCINKAYA"

//String karekter sayısı -> length

console.log( email.length)  // Bir çok yerde length'i görücez çok önemli.

//Ilk Karekteri Bulmak -> [0]:
console.log(firstName[0]);  //Bir array'ın ilk bilgisini öğrenemek istiyorsak o birden değil 0'dan baslıyor...

console.log(firstName.charAt(0) ) //ilk karekteri göstermek için 2. yöntem.

//Buyuk harf / kucuk harf :

firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLowerCase()
console.log(firstName)

//String içersinde istediğimiz bilgiyi aramak ve yerini bulmak için -> search

console.log(email.search("@"))
console.log( email[15] )

console.log(email.search("olmayan")) //email veya herhangi bir değişkende olmayan bir şey aratırsak o zaman -1 gelir. Yani -1 sonucunu alırsak bunda demekki aradığımız sonuç yokmus diyebiliriz.

//Belli bir yere kadar olan yeri almak -> slice

console.log(email.slice(0,10)) //0'dan 10'a kadar bütün harfleri alır.
console.log(email.slice(15)) //15'den sonraki bölümü dilimliyor yani @'den sonraki bölümü ekrana yazdırıyor.


let DOMAIN = email.slice( email.search("@") + 1) //bu emailde @ işareti dahil sonraki kısmı dilimle, kes, slice et ve DOMAIN kısmına ata anlamına gelir. ve biz + 1 vererek @'dan sonraki kısmı kes demiş oluruz.
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf(".")) // Domain'de 0 yani en baştan "." kısmına kadar olan yeri al demek domaine gmail.com atanmıstı o zaman ekranda sadece gmail gözükür.
)

//Bilgiyi değiştir -> replace :

email = email.replace ("gmail.com", "kodluyoruz.org") //set etmeyi unutma yani başına e-mail yazmayı unutma
console.log(email)

//İstediğim bilgi var mı? includes : ->

// email.includes("sadasdasdas") //false der
// email.search("sadasdasdas") // -1 der yani search ve includes da farkı outputlar olur includes sorulara doğru yanlış şeklinde cevap verir.

//Istediğim bilgiyle basladı ve bitti mi? -> starswidth endswidth ->

console.log( email.endsWith("@") )//buna false der çünkü @ ile bitmiyor.
console.log( email.endsWith("org") ) //org ile bittiği için buna true diyecek.

//Ilk harflerini büyük yapmak

// firstName = "FIRSTNAME"
// lastName = "LASTNAME" //bunları büyük harfle yazmıza rağmen aşagıdaki kodla beraber ilk harfi büyük diğerleri küçük olur.


let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}` //burda büyük harfi verdikten sonra firstName.slice diyerek akan bölümünü yani 2. harften itibaren kesmesini sağladık. Sonrasıdada büyük harfli olm ihtimaline karşı 1. harften sonraki bölümü küçük harfli yaptık.
console.log(fullName)


