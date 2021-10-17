// array dizilerle çalışmak

// array oluşturmak
let domain = "kodluyoruz"
let isActive = false
let items = [ 15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bu sekilde bos bir liste olusturabiliriz. Mesela bir form var ve ben bunun içine elemanları ekllemek istiyor olabiliriz bundan dolayı da bos bir liste yapıyor olabiliriz.

// array içersinde eleman öğe sayısını öğrenmek

console.log(
    items.length // array içindeki öğe sayısı
)

// document.querySelector("#info").innerHTML = items.length

//array içindeki ilk elemanın çağrılması

console.log(
    items[0]
)

//array içindeki ortadaki elemanın çağrılması

console.log(
    "Ortadaki :", items[ Math.floor(items.length / 2) ] 
     
)


//array içindeki son elemanın çağrılması
console.log(
    items[ items.length-1 ]
)

//değişken içindeki bilginin array olup olmadığının kontrol edilmesi

console.log(
    typeof(items) //object olarak çıktı veriyor
)

console.log(
    Array.isArray(items) // items array midir
)

//hangileri isArray => true verir?

console.log( "[] : ", Array.isArray ( [] )) // [] array parantezi oldugu için true verdi
console.log( "1 : ", Array.isArray ( 1 )) // 1 bir rakam oldugu için false verdi
console.log( "true : ", Array.isArray ( 1 )) //true bir boolean yapısı oldugu için false verdi

//yukarıdaki yapılarla bir yapının array olup olmadıgını kontrol edebiliriz
