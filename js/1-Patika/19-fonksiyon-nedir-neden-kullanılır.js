/*************Fonksiyon Nedir Neden Kullanılır?******************/

function helloWorld () {
    console.log("Hello World")
} //ben ne zaman hello foksiyonumu çağırsam ilk "Merhaba" yazsın sonrada "Hello World" yazsın istiyorum.


function hello () {   //()parantezin içersine parametremizi yazıyoruz aynı if else deki gibi ama şu an parametre koymadık.
   
     console.log("Merhaba")
     helloWorld() // önce hello() sonrasında da helloWorld() fonksiyonumun çalışmasını istediğim için buraya helloWorld yazdım. yani bu bir iç içe fonsiyondur.
}

//Bundan sonra console.log("Merhaba") yazmakla uğraşmak zorunda değiliz direk hello() hello fonksiyonuyla yazdırabileceğiz

// 2. Fonksiyounum helloWorld()



hello() //hello fonksiyonunun yanına "()" koymayı unutma parantez çalıştır anlamına gelir.
hello()
hello()
hello() 
hello()
 //istediğimiz kadar hello() yazarak hic uğraşmadan çogaltabiliriz. 



 //Hata alabiliriz çünkü tanımlamamız gereken şeyler var onları tanımlamadan kopyala yapıştır yapamayız. Şu an userCheck bilgileri tanımlanmamıs ama ilerki videolarda biz bunu tanımlı hale getircez.
//  function userCheck () {
//     if (userName && age >= 18) {
//         info.innerHTML = "Ehliyet Alabilirsiniz"
//     } else if (!userName) {
//         info.innerHTML = "kullanıcı adınız yok"
//     }else if ( !(age >= 18)) {
//         info.innerHTML = "yas bilginiz yok veya 18 yaşından kücüksünüz"
//     }
//  } 