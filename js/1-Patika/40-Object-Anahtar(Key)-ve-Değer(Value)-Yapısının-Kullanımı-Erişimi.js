// Object Anahtar(Key) ve Değer(Value) Yapısının Kullanımı-Erişimi

//key value ilişkisine bakalım


// [key1:1, key2:2, key3:3] //burda diziler arasında virgül koyuyoruz, object oluştururkende koymayı unutma!!!


let laptop1 = {//Unutma! Köşeli parantez olsaydı aslında bunun bir array olduğunu söyleyecekti ama süslü parantez olduğu için bu bir object.
    
    brand: "Apple",
    modal: "Macbook Pro",
    // 1modal: "Macbook Pro" bu olmaz çünkü bir key başlarken kesinlikle sayı harf ile başlamalı. yinede koymak istersem çift tırnak içinde key value değerini tanımlayabilirim -> "1modal"

    "2kg": 2,
    modalName: "Macbook Pro" //modal name, modal-name şeklinde yazılamaz çünkü arada boşluk olamaz veya araya tire koyamayız. modal_name şeklinde olur fakat yaygın değil.
} 

console.log(laptop1) //içindeki bütün bilgileri console'da görebiliriz.

// peki laptop1'in içindeki bilgilere nasıl ulaşıcaz array'daki gibi laptop1[0] dersek undefined diyor. object'in içindeki bilgilere nokta "." veya [""] ile ulaşıyoruz.


//DOGRU ANAHTAR BILGISI OLUSTURMAK

console.log(laptop1.brand, laptop1["brand"]) // Çıktı: apple
console.log(laptop1.modal) // Çıktı: Macbook Pro
console.log(laptop1["2kg"]) // Çıktı: 2, bu bölümde önemli nokta, key value tırnak içinde ise noktayı kullanmayıp key value değerini tırnak içinde köşeli parantezler içersine alıyoruz.

//ANAHTAR BİLGİSİNE YENİ DEĞER EKLEMEK

laptop1.brand = "Mac"
console.log(laptop1) //ilk yöntem

laptop1["brand"] = "Mac1" //ikinci yöntem
console.log(laptop1) 

//YENI BIR BILGI EKLEMEK

laptop1.version = "10.15.7"
console.log(laptop1)

//ANAHTAR BILGİLERİNE ULASMAK (keys) --> object.keys(item) yani içersinde neler var bunun onu bulmak.

keys = Object.keys(laptop1) 
console.log(keys) //1. kullanım 
console.log(Object.keys(laptop1) ) // 2. kullanım 2 kullanımda da key bilgilerine ulaştık.



keys.forEach(keyInfo => {
    console.log("key : ", keyInfo) //key bilgisine ulaştık

    console.log("keyInfo", laptop1[keyInfo]) // key info bilgisine ulaştık
}) // herbirinin içindeki bilgiyi görebilirim. Yani hem key hemde onun value değerine ulaştık

// DEĞER BİLGİLERİNE ULAŞMAK (values) --> object.values(item)

console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value:", value)
})

let setting = {
password: 1234,
userName: "user"
}

//burda setting anahtarının içine bilgileri atadık ve bu bilgileri istediğimiz gibi kullanabiliriz.

// TEXT 

// Bir obje(object), {…} süslü parantezleri ile, isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir. Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.

// Literal ve property tanımlamaları

let car = {		
    brand: "BMW", 	// key(anahtar) "brand" "BMW" value(değerini) tutar 
    year: 2020,  		// key(anahtar) "year" 2020 value(değerini) tutar 
  };

//   Property değerlerine noktalı yazım(dot notation) kullanarak erişilebilir:

console.log(car.brand); // "BMW"

// İstediğimiz zaman property ekleyebilir, kaldırabilir ve objeden property okuyabiliriz. Mevcut bir property'i eklemek veya değiştirmek için şu şekilde yazabiliriz:

car.model = "320i"; // objeye model isminde bir key ekler ve value olarak string atar

// Bir property’i kaldırmak için silme (delete) operatörünü kullanabiliriz:

delete car.year;

// Birden fazla kelime içeren property name kullanabiliriz, ancak bunlar tırnak (“”) içinde kullanılmalıdır:

let car = {
    brand: "BMW",  
    year: 2020,  		
   "is manual" : true,
  };

//   Square brackets kullanımı

// Birden fazla kelime içeren property'ler için dot notation kullanamayız. Bunun yerine “square bracket notation” yani köşeli parantezli yazım kullanılır:

let person= {};                     // set (oluştur)
person["likes sea"] = true;         // get (getir)
console.log(person["likes sea"]);   // true (doğru)
delete person["likes sea"];         // delete (sil)

// Köşeli parantezli yazım aynı zamanda property name getirmede kullanılabilir:

let animal= {};           // set
let key = "flies";        // key atama
animal[key] = true;       // value atama

// Kompleks Objeler Kullanımı

// Objelerin asıl amaçlarından biride yazılan uygulamaların state'lerini yönetmektir. Bu nedenle kompleks uygulamalarda da kompleks objeler kullanılmaktadır. Kompleks bir obje örneği de

let state = {
	users:[
		{name: "Brock", age: 25, favoriteColor: "red"},
		{name: "Jessie", age: 17, favoriteColor: "yellow"},
		{name: "James", age: 41, favoriteColor: "blue"},
		{name: "Winnie", age: 18, favoriteColor: "purple"}
	],
	settings:{
		version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
	},
	banList: ["Ash", "Angelica", "Tom", "Jerry"]
}

// Yukarıda gördüğünüz gibi obje içinde her türlü veri türünü saklayabiliyoruz. Örnekteki "users" property'si içinde obje tutan bir array'e denk gelmekte. "settings" propertysinde ise obje içinde obje tutulmakta. "banList" propertysinde ise basit bir array tutulmakta.

// "banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz.

alert(state.banList[2])

// "settings" lerdeki "website" değerine ulaşmak isersek şu şekilde ulaşabiliriz.


alert(state.settings.website)

// "user" larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz.

alert(state.users[2].favoriteColor)

// Özet

// * Objeler, birkaç özel niteliğe sahip ilişkilendirilebilir array(dizi)'lerdir.
// * Key / value şeklinde property'leri saklar.
// * Key ifadesi string veya sembol olmalıdır.
// * Value ifadesi herhangi bir değer alabilir.
// * Belli bir property'e erişmek için kullanabileceklerimiz: 
//   * Dot notation: obj.property 
//   * Square brackets notation obj[“property”]. Bu özellik key'in obj[varWithKey] gibi bir değişkenden alınmasına izin verir.

// Bu zamana kadar bahsettiğimiz objeler “plain object” olarak isimlendirilir. 

// Obje Metodları

// Plain objects için aşağıdaki metotlar(method) kullanılabilir:



// Object.keys(obj) – Key’lerden oluşan bir array döner(return).
// Object.values(obj) – Value’lardan oluşan bir array döner.
// Object.entries(obj) – [key, value] çiftlerinden oluşan bir array döner. 


// Tüm bu Object.* metotları array veri tipinde değer döner.



// let person = {
//   name: “Jack”,
//   age: 20
// };

// Object.keys(person) = ["name", "age"]
// Object.values(person) = ["Jack", 20]
// Object.entries(person) = [ ["name","Jack"], ["age",20] ]

// JSON Metodları
// Objenizi String veri türüne çevirip, projenizde objelerinizi direk sayfaya basmak isterseniz, onun içinde bir metot bulunmakta.

let person = {
    name: “Jack”,
    age: 20
  };
  
  document.getElementById("demo").innerHTML = JSON.stringify(person); // Bu objenizi bir stringe çevirip demo idsine basacaktır.
  
  let stringObject = JSON.stringify(person);
  
  let newPerson = JSON.parse(stringObject); 
  // parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir 