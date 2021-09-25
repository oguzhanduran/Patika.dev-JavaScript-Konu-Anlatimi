/***Fonksiyona-Parametre-Atamak-ve-Fonsiyondan-Geri-Dönüş-Almak****/

//Temel Kurallar

//1: Fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir

//2: Bir fonksiyon dısarı bilgi gönderebilir(return) veya göndermeyebilir

//3: Mumkunse fonksiyon bagımlılıklarını azaltmak gerekir. Yani dışarda bir değişken varsa onu kullanmaktan ziyade içerde bulunan parametre bilgisini kullanalım.


let firstName = "lorem" // fonksiyon buradaki firstName biligisini almaz çünkü bizim greetings fonksiyonun içinde aynı isimde yani firstName isminde bir parametremiz var yani fonksiyonun içindeki parametre değişkeni eziyor.

function greetings (firstName="") {  ////bu fonksiyonumuzun özelliği default parametre alıyor ="" default parametre demek
    // dışarı bağımlı olmaktansa içeri firstName adında bir parametre almak daha mantıklı ama bu seferde firstName'i içerde tanımlamamız gerekir.

    // console.log(`Merhaba ${firstName ? firstName : ""}`); //short if yapısıyla firstName varsa onu göster yoksa boşluk göster dedik.

    console.log(`Merhaba ${firstName}`)
} 



console.log(firstName) //Burda en yukardaki değişken bilgisini aldı.
greetings("apple") //firstName i boş bıraktıgımız için otomatik olarak greetings'in içine ne koyarasak içine onu atıyor. 

greetings() //fonksiyona parametre göndermedik

greetings("parametre") // burda fonksiyona parametre gönderdik.


//1: Fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir

function greetings (firstName="", lastName) {    //burda firstName' e default parametre verdik ama lastName'e vermedik bu yüzden lastName undefined gözüktü.

    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)
   
} 


function greetings2 (firstName="", lastName="") { //firstName ve lastName bilgileri parametre oldugu için üstteki aynı isimlerle çakışmıyor yani istedğimiz kadar o isimleri kullanabiliriz parametre olarak

    let info = `Merhaba ${firstName} ${lastName}`
    return info; // return ile info bilgisini dışarı verdik
}

//greetings2("Ahmet", "Mehmet") //bu haliyle ekranda gözükmedi

let greetingsInfo = greetings2("Ad", "Soyad");
//let info = deneme // daha önceden tanımlandığı için hata verir
console.log(greetingsInfo )

//burda hem fonksiyonun içinde hemde globalde let info bilgisini tanımladık ve hata almadık bunun nedeni let fonksiyon içinde blok halinde calısıyor yani blok dısında biz bunu gene tanımlayabiliyoruz.

let değişken = document.querySelector("#greeting")
değişken.innerHTML = ``

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`) // id bilgisini aldık
    domObject.innerHTML = info // id bilgisini aldıktan sonra içerde işleniyor sonrasında ve içerde gelen info dokumana yazdırılıyor

} //ilk parametreye gireceğimiz documanın id'sini ikinci parametreye ise dökümana gireceğimiz bilgiyi tanımlayabileceğimiz domIdWriteInfo fonksiyonunu olusturduk.


let htmlInfo = `<span style="color: red">Color Reddd</span>`

domIdWriteInfo("greeting", htmlInfo) //baştaki "greeting" ile greeting id'si olan başlığa girdik. 2. yere ise bilgiyi giriyoruz 

domIdWriteInfo("info", greetings2("lorem", "Ipsum")) // Burda diğer bir id olan infoyu çağırdık ve greetings2 fonksiyonunun parametreleriyle birlikte girdik.


//Yani genel olarak yukarda olusturdugumuz domIdWriteInfo fonksiyonunu documana ulasmak için çağırdık. 

