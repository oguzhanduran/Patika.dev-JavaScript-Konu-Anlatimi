//Map ile Array İçerisideki Yapının Değiştirilerek Yeni Liste Oluşturulması (Array Map kullanımı)

// map kullanımı forEach'e çok benziyor ama biz forEach'de biz listenin içersindeki elemanları tek tek döndürdükten sonra yeni bir liste elde edemiyoruz, map ile birlikte yeni bir liste, yapı oluşturabiliyoruz.

//Array Map metodu, parametre ile kendisine gönderilen dizinin her bir elemanı için ayrı ayrı çalışır ve belirlenen işleme tabi tutup, yeni bir dizi meydana getirir. Örneğin; elimizdeki dizinin tüm elemanlarının iki katını almak istediğimiz zaman kullanabiliriz. Array Map metodu, kendisine parametre olarak gönderilen diziye herhangi bir müdahalede bulunmaz. Mevcuttaki dizinin her elemanını belli bir işleme tabi tutarak yeni bir dizi oluşturur. Bu kısım önemlidir.

// array.map( function(value, index, array), this)

//array : Üzerinde işlem yapılacak olan diziyi belirtir. Bu dizinin her bir elemanı map metotunun içinde belirleyeceğimiz işleme tabi tutulacaktır.
// value : Üzerinde işlem yapılan dizi değerini belirtir.
// array : Üzerinde işlem yapılan diziye erişimi sağlar
// this : Kullanımı zorunlu değildir(opsiyoneldir). this değişkenine iletilecek olan değeri belirtir.



const USERS = ["AYSE", "mehMET", "TugCE", "AySEL"]



const NEW_USERS = USERS.map( user => user.toLowerCase() ) // fat arrow ile "=>" biz user'ın bir fonksiyon oldugunu belirttik aslında.

console.log(NEW_USERS) //append gibi işlemlerden kurtulup direk yeni bir liste haline getirdik.

//userName içinde orjinal isim kalsın,
//shortName içinde ilk harf büyük .(A.)
//newName içinde ilk harf büyük olsun 

//yani şöyle --> {userName: "AYSE", shortName: "A.", newName: "Ayse" }

// const USERS_OBJ = USERS.map (item =>
//     {

//         return {
//            userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
//         }
    
//     )  //süslü parantezin olmasının nedeni return dönmemiz yani geri dönüş yapmak istememiz. return'ün içinde süslü parantezin olmasının nedeni içine obje yazmamızdan kaynaklı.



const USERS_OBJ = USERS.map (item =>
    (

         {
           userName: item, shortName: `${item[0].toUpperCase()}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}` }
           )
    
    ) 


    console.log(USERS_OBJ) //2 yol var ya normal parantezle geri dönüş yapabiliyoruz ya da süslü parantezler içinde return ile.