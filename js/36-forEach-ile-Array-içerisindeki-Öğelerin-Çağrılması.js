// forEach ile Array içerisindeki Öğelerin Çağrılması

// JavaScript'de forEach , döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur.

// daha önce for'u görmüştük ama for ile ilgili sıkıntımız su biz neden array'in içersinde bir işlem yaparken for'u kullanalım ki... for'u kullanırken index bilgimizi bildirmemiz lazım nerde oldugumuzu vs... 

//bunun dısında forEach methodumuz var bunu array'in içindeki methodlar bölümünde değil de burda işlemek daha mantıklı...

// forEach fonksiyonu item, index, array olmak üzere 3 parametre alabilir.

// arr.forEach(function(value, index, array) {
//   // index ve array kullanmak opsiyoneldir
// }

//const fruits = ["apple", "orange", "cherry"];
//fruits.forEach(myFunction);

// function myFunction(item, index,) {
//     document.getElementById("demo").innerHTML += index + ":" + item + "<br>";

//forEach ile ben direk olarak bir fonksiyon belirtip içersine işlem yapabilir mişim. forEach'in içersindeki bu fonksiyonu tanıtırkende item index bilgisini ve diğer array bilgisini de alabiliyormusum

// Syntax --> array.forEach(function(currentValue, index, arr), thisValue)



const PRODUCTS = ["laptop", "phone", "speaker", "desktop", "server", "mause", "keyboard"]   

//yukardaki ürünlerimizin her birini ekranda tek tek göstermek istiyoruz.
// PRODUCTS.forEach((product, index, array) => console.log(product, index, array)) product yazısının isminin onemi yok, parantez içindeki ilk deger her zaman tanımlı değişkenin mevcut deger "currentValue" sini alır.

//productın oldugu yapı bir array yapısı ve her seferinde array yapısını dönerse aslında tüm listemi tekrar görmüs oluyorum. Burda forEach'in özelliğini kullanarak tek seferde bilgileri alabildik --> array.forEach(function(currentValue, index, arr), thisValue)


// PRODUCTS.forEach((product, index, array) => console.log( array[index] = product + " 111")) // yukarda product + "111" diyerek bir esitleme yaptık. ve her birisinin degeri degişti.

PRODUCTS.forEach((product, index, array) =>  array[index] = `${product.toUpperCase()}`) // bütün harfleri buyuk harfli yaptık

console.log(PRODUCTS) 

let userListDOM = document.querySelector("#userList")

PRODUCTS.forEach((item) => { // Burda product yerine item yazdık ki bu ismi bizim belirlediğimizi görelim diye.
    let liDOM = document.createElement("li")
    liDOM.innerHTML = item
    userListDOM.appendChild(liDOM)
})

//for (let index = 0; index < users.length; index++) 

//normal for döngüsünde index ile birlikte önce ilk basta index bilgisini olusturmamız gerekiyordu sonra index bilgisinin user.length'den daha kucuk olmasını bekleyip arttırmamız gerekiyordu.

//artık forEach ile beraber bunların hiç birini yapmamız gerekmiyor sadece item bilgisini alıyoruz ve içerde bir fonksiyon dönüyoruz.

//Böylelikle for döngüsüyle yaptıgımız yapıyı forEach ile birlikte tek seferde kurgulayabiliriz. 

//forEach bir array içinde kullanılıyor ama biz forEach'i illa bir array içinde kullanmak zorunda değiliz
