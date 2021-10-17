// Object ve Array Destructuring Kullanım Destructuring Nedir?

// Daha önce object yapımızı oluşturduk sonrasında key-value ilişkisini kullandık, daha sonrada içersine bazı bilgileri ekledik, peki ya objenin şeklini değiştirip içersindeki bazı bilgileri almak istersek.

// Mesela bir userName bilgisi var bu userName ilgisine artık objenin içinden değil de direk erişmek istiyorum bunu nasıl yapabilirim.

// Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.

//OBJECT DESTRUCTURING

let settings = {
    userName: "lorem Ipsum",
    password: "bad password",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "Kodluyoruz.org"
}

//OBJE ICINDEKI BILGILERIN TEK SEFERDE CIKARILMASI

// let userName = settings.userName
// console.log(userName)

//Istersek bu objenin içindeki bilgileri alıp direk kullanabiliriz destructuring ile.



//RENAME & DESTRUCTURING
let {userName: user, password, isActive, ip, serverName } = settings //süslü parantez kullanmamın nedeni let'ten sonra onun object oldugunu bildiğimden kaynaklanıyor. userName: user diyerek userName bilgisini user olarak değiştirdik.

console.log(user, password, isActive, ip, serverName) // yaptığımız şey şu object destructing yöntemiyle birlikte artık settings nesnesinin içindeki bilgileri settings değişkeninin içine aldım.

console.log(settings) //settings object'inin içindeki bilgiler hala duruyor. 

console.log(password) // biz password bilgisini settings değişkenine atadığımız için artık tek seferde bu bilgiye ulaşabiliyoruz.

//OBJE ICINDEKI BAZI BILGILERIN CIKARILMASI

let {userName: userName2 , password: password2, isActive: isActive2, ...newSettings } = settings //...newSettings kalan bilgileri newSettings isimli yapının içine ata demek. Yukarıdaki yapılarla aynı oldugu için hepsinin isminin sonuna 2 getirdik.

console.log(newSettings) //kalan bilgiler newSettings adlı yeni olusturulan objeye atandı.

//OBJENIN DESTRUCTİNG İLE KOPYALANMASI


        //HATALI!!!
// let settings2 = settings
// settings2.userName = "Değişen Bilgi"
// console.log("settings :", settings)
// console.log("settings2 :", settings2) // Böyle yapınca hem settings'te hemde settings2'nin userName kısmında değişen bilgi yazıyor sebebi ise kopyalama işleminin tam olarak gerçekleşmemesi. Buna çok dikkat etmeliyiz ve doğru bir şekilde yapmalıyız. Bunu doğru bir şeekilde yapma yöntemlerinden biri de object destructing yöntemini kullanmak.

        //DOGRU YONTEM
let settings2 = {...settings} // bu settings nesnesinin içersindeki bilgileri çıkart ve sonra settings2 değişkenine ekle demek.

 settings2.userName = "Değişen Bilgi"
 console.log("settings :", settings)
 console.log("settings2 :", settings2)

 //yani destructing ile birlikte biz kopyalama işlemi de yapabiliyoruz bu da çok kullanılan bir yöntem.


 //Aynı Yapı Listeler İçinde Kullanılabiliyor

 let score = [100, 200, 300, 400]

//  let [score1, score2, otherScore ] = score //Burda score1 score2 ve otherScore'a 100, 200 ve 300'ü atadık.
 
let [score1, score2, ...otherScore ] = score // score1 100'e score2 200'e otherScore arrayına ise 300 ve 400 atandı. ... koydugumuz için.
console.log(score1, score2, otherScore ) 

//kopyalama işlemi --- object kopyalama ile aynı tek fark "[]" kullanımı

let copyOfScore = [...score] // score array'ını copyOfScore array'ına kopyaladık.
console.log(copyOfScore)

//Destructing özellikle ECMA Script6 ile birlikte çok fazla kullanılıyor.