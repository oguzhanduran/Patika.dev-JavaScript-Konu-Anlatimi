// local storage işlemleri

let user = { userName: "hakanyalcinkaya", isActive : true }  
console.log(user)
localStorage.setItem("userInfo", JSON.stringify(user)) //burda içersindeki bilgi obje olan user, JSON.stringify ile birlikte string olarak yazılmaya baslandı.

let userInfo = localStorage.getItem("userInfo") //bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

// biz local storage ile içerde daha komplex yapılar tutabiliriz. ilerde array veya object gibi yapılar tutmak istediğimiz zaman.


// console'un içinde => localStorage.setItem("number", 11) mesela bunu yazdığımız zaman number'a 11' i set ettik.
// localStorage.getItem("number") diyerek number key'ini geri çağırabiliriz. bu otomatik olarak string'e çevriliyor

//fakat bu derste anlatılmak istenen daha komplex bir yapı varsa bu string'e otomatik cevrilmiyor ve bizim bunu JSON.stringify(çevireceğimiz değişken) ile string'e cevirmemiz gerekli.

//daha sonra stringe çevirdiğim ifadeyi JSON ile birlikte tekrar parse edip "JSON.parse()" ile geri almam gerekiyor. yani tekrar string yapıdan JSON yapıya çeviriyoruz. 

//Son ornek

// let items = [1, 2, 3, user] //ıtems'ın içine 1, 2, 3, ve user değişkenini atadık.

// localStorage.setItem("newItem", items) // burda newItem'ın içine [1,2,3, user] atamaya çalışıyoruz fakat application'a baktıgımızda 1,2,3 stringe dönüştürülürken user complex olduğu için dönüştürülemiyor ve ekranda object yazıyor ve bizim bu objeyi tekrar stringe çevirmemiz gerekiyor.

//localStorage.setItem("newItem", JSON.stringify(items)) // bu şekilde stringe çevirip içeri aktardık. Bunu aktardıktan sonra application'a baktıgımızda 1,2,3 ve user name artık gözüküyor.

// localStorage.getItem("newItem") //bunu yazıp çağırdıktan sonra çağırdığımızda tırnak işareti içinde geliyor o yuzde parse ile çağırmamız gerekiyor.

//JSON.parse(localStorage.getItem("newItem")) //JSON ile parse ettikten sonra artık bu biligleri düzgün bir şekilde alabiliyorum.

// Tüm bunların sebebi localStorage içindeki bilgilerin key: value şeklinde, yalnızca string türünde değerler ile saklanmasıdır.