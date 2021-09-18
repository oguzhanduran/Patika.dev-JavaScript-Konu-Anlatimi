//****************** Boolean Veri Türü ile Çalışmak **************************

// 0 ve 1' anlamak
let isActive = false //0
isActive = true //1
console.log(isActive)

let userName; //bunu dedikten sonra asagıda userName 'in tanımını yapıyoruz.
let isUserName = Boolean(userName)  
console.log(isUserName)

Boolean("11") // true
Boolean("0") // true
Boolean("") // false içersinde boş bir veri olduğu için

userName = "user"
console.log("User Name :", Boolean(userName)) //burda true gelir çünkü içersinde bir bilgi var yani biz userName içine user'ı yazdık önceki satırda 

//0, -0, null, false, NaN, undefined, ("") ->

Boolean(0) //false
Boolean(-0) //false 
Boolean(undefined) //false
Boolean(-0.1)//true
Boolean (0 === 0) //true /bu bir sorudur yani biz bir soru soruyoruz sıfır eşit mi sıfıra diyoruz ve cevap true. 

//Not : Karar Yapıları Kısmında Tekrar Anlatılacak.
Boolean(userName.length > 0) //true