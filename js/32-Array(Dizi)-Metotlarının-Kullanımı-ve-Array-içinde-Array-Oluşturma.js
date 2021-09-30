//Array(Dizi)-Metotlarının-Kullanımı-ve-Array-içinde-Array-Oluşturma

let items = [ 1, 2, 3, 4, 5 ]

//array içinde array:

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)



items.push(maleUsers)

console.log(items)

console.log(items.length) //7 gelir çünkü array içine bir array daha gelirse yeni gelen tüm arraylar birer öğe olarak görünür.

console.log(items[0].length) //burda 3 gelir çünkü 0'da bulunan eleman bir dizidir ve içinde 3 eleman vardır.
console.log(items[0][0]) //bununla Ayse bilgisine yani 0. index te bulunan dizinin 0. indexine ulastık.

// 1- array içinden öğe ayırmak -> splice(pos, item?)

newItems = items.splice(1,5) //1. indexten itibaren 5 tane öğe al demek  
console.log("newItems :", newItems)
console.log("Items :", items) //üstte index 1'den baslayıp 5'e kadar aldı ve items'ın içinde sadece 0 ve 6. index kaldı.

// 2- array içindeki öğenin index bilgisini bulmak indexOf('value')

items.unshift("lorem")
items.push("ipsum")

console.log(items.indexOf("ipsum")) // ipsum'un index numarasını verir.

console.log(items[items.indexOf("ipsum")]) // bu ipsumu verir yani 3. indexde ne oldugunu verir


// 3- array kopyalamak -> slice [... ES6]

let copyItems = items   
console.log(items)

copyItems.pop() // son öğeyi çıkarttık
console.log("items :", items )
console.log("copyItems :", copyItems ) // array yönetiminde performans için ve memori yönetimi için aslında bizim bir tane yapımız var ve bu yapının içersinde biz eşitlesekte yeni bir tane yapı olusmuyor. 

//Bunu esitlemek için iki tane yöntem var.


console.log("kopyalandıktan sonra")
copyItems = items.slice() //kopyalamayı .slice ile yaptık.
copyItems.pop() // son öğeyi çıkarttık
console.log("items :", items )
console.log("copyItems :", copyItems )

//yeni nesil kopyalamada direk kopyalayabiliyoruz

// 4- iki array bilgisini birleştirmek
let es6items = [...items] // ECMA script 6 ve sonrasında gelen kopyalama işlemi

let allUsers = [...femaleUsers, ...maleUsers] // ES6 birden fazla array yapısını birleştirmek
console.log(allUsers)

// 5- Array içindeki bilgiyi string'e çevirmek -> toString(), join

console.log(allUsers.toString()) //stringe çevirir yani tek tek tek her birine ulaşamayız tek bir string halinde ulaşırız.

console.log(allUsers.join( " --- " )) // join birleştir anlamında yani burda stringleri aralarına " --- " şeklinde boşluk bırakarak birleştirdik.

// istediğimiz index bilgisine öğe eklemek -> splice(index, 0, value) 0 parçalamıcaksın demek oldugu gibi ekle

allUsers.splice(allUsers.length - 1, 0, "Melissa" )  // en sondakinden bir öncekine Melissa'yı ekledik.
console.log(allUsers)

allUsers.splice(Math.floor(allUsers.length / 2), 0, "ipsum") // bu şekilde ipsum bilgisini tam ortaya ekledik.
console.log(allUsers)