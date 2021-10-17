// Nesnelere Nasıl Metot Ekleriz? 

// Bir önceki derste key-value ilişkisini anladık, peki ya daha fazla bilgi tutmak istersek

let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function() {
        return `${user1.firstName[0].toUpperCase()}. ${user1.lastName}` // Buradaki this user1 nesnesi yerine kullanılıyor.içerde fonksiyon kullanımının avantajlarından bir tanesi this kullanımı. Buradaki key shortName value ise function'dur. Bu fonksiyon hesaplama vs de dönebilir
    }
}

console.log(user1.shortName()) //shortName bilgisini console'da yazdırmak istiyorsan fonksiyon isminden sonra parantezi koymayı unutma () bu çalıştır anlamı taşır. 

console.log(user1.firstName) // burda firstName'den sonra parantez koymadik function olmadığı için.

// TEXT 

// Metot Nedir?


// Javascript'in referans veri tiplerinden biri olan ve Türkçede "nesne" anlamına gelen object key-value (anahtar-değer) yapı mantığına sahip bir veri tipidir. Yani bir nesne oluştururken bu nesnemiz için bir veya birden fazla property (özellik) tanımlanabilir ve key-value mantığındaki gibi nesnemizin sahip olduğu özellikler için değerler verilmelidir. Özelliklerin sahip olduğu değerler farklı veri tiplerinde olabileceği gibi bir fonksiyonu da işaret edebilir. Bir özellik eğer bir fonksiyonu işaret ediyorsa bu özelliğe metot denir.

// Bir nesneye metot 2 şekilde eklenebilir. Bunlardan biri yukarda bahsedildiği üzere nesneye property olarak eklemek, bir diğeri ise prototype (prototip) fonksiyonu üzerinden eklemektir.

// Metotu Özellik Olarak Eklemek


// Metot, bir nesnenin oluşturulduğu sırada özellik olarak eklenip tanımlanabileceği gibi, önceden tanımlanmış bir nesneye sonradan da eklenebilir. Öncelikle ilk durumu ele alıp aşağıdaki örneği ona göre inceleyelim.

// Örneğin; "person" adında bir nesne oluşturalım ve bu nesnemiz "name", "surname","age","city" özelliklerine ve bu kişinin bana tüm bilgilerini gösterecek bir "introduce" metoduna sahip olsun.



// var person = {
// 	name: 'Rumeysa',
// 	surname: 'Turgut',
// 	age: 23,
// 	city: 'Istanbul',
// 	introduce: function () {
// 		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
// 	},


// Yukarıdaki gibi, metot tanımlanırken function() anahtar kelimesi kullanılarak yapılabileceği gibi EcmaScript6'nın arrow function yönteminin söz diziminden yararlanarak yapmak da mümkündür. Fakat burada dikkat edilmesi gereken noktalardan biri arrow functionlar this erişimine sahip değildir. Yani aşağıdaki gibi bir kullanımda introduce fonksiyonu çalıştırıldığında çıktıda özellikler undefined (tanımlanmamış) olarak gözükecektir.

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`;
	},
};
console.log(person.introduce());

// Bir metodun arrow function söz dizimi kullanılarak yapılmak istendiği bir durumda özelliklere nesnenin ismiyle erişilebilir. Buna göre yukarda arrow function kullanarak oluşturduğumuz metot içerisinde özelliklere erişim şu şekilde olacaktır;

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person.name} ${person.surname}, I'm ${person.age} yo.`;
	},
};

// Şimdi de önceden oluşturulmuş bir nesneye nasıl metot ekleyebiliriz ona bakalım. Aslında burada metodun sahip olabileceği yapı değişmiyor yani function() anahtar kelimesi veya arrow function söz dizimi kullanılarak oluşturulabilir. Yukardaki örnek üzerinden devam edecek olursak person nesnemize myCity adında yeni bir metot ekleyelim ve bize kişinin yaşadığı şehri göstersin.

person.myCity = function () {
	console.log(`I live in ${this.city}`);
};
person.myCity();

// Yukardaki örnekte de görüldüğü gibi nesneye yeni bir metot eklemek istendiğinde nesneİsmi.eklenecekMetotİsmi = function() şeklinde yapılabilir. Veya istendiği takdirde daha öncede bahsettiğimiz gibi arrow function ile yapmak da mümkündür.

// Buraya kadar obje tanımlamayı ve objelere fonksiyon eklemeyi öğrendik. Ancak öğrendiğimiz yöntemde key-value yani anahtar değer yöntemini kullanmıştık.

// Ancak nesneye yönelik programlama konseptlerinde objelerin ve sınıfların çok daha detaylı kullanım alanları mevcuttur. Bu noktada da objeye fonksiyon ekleme konusunda karşımıza özel bir kullanım geliyor. Bu kullanımdan önce netleştirmemiz gereken bazı konular var.

// Öncelikle javascriptte çoğu tanımın bir obje olduğunu bilmemiz gerekiyor. Evet biraz garip gelebilir ama fonksiyonlar da dahil olmak üzere çok tanımlama bir objedir. Bu obje tabanlı yapısı sayesinde fonksiyonları, başka fonksiyonlara parametere olarak verebilir ayrıca bir fonksiyon da döndürebiliriz.

// Bu noktada fonksiyonların ne olduğunu ve nasıl çalıştığını anlamamız gerekiyor. Dile ait bu detayları öğrenebilirsek sonra farklı kullanımlardan rahatça faydalanabiliriz.

// Fonksiyonlar javascript dilinde, Function sınıfının birer objeleridir. Nasıl yani? Evet fonksiyon diye diye bağrımıza bastığımız yapılar da aslında bir sınıfın objeleridir. Hatta bu sınıfın detaylarına ve özelliklerine buradan ulaşabilirsiniz. Ama durun daha bitmedi. Üstelik bu sınıfın bir kurucusu(constructor) ve diğer bütün objeler gibi inherit ettiği bir prototype bile var. Hatta bu prototype yardımıyla fonksiyonun adına bile ulaşabiliriz.

// Örnek :

const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}
console.log(fonksiyonAdi.name);
// "fonksiyonAdi"

// Yukarıdaki örnekte basit bir fonksiyon tanımladık ve bu fonksiyonun adını "." operatörüyle eriştik. console.log(fonksiyonAdi.name) kodunu çalıştırdıktan sonra "Merhaba Kodluyoruz" çıktısının gelmediğine dikkat edin. Burada fonksiyonu execute etmedik. Yalnızca bu objenin bir özelliğine eriştik.

// Öyleyse javascriptte fonksiyonların da birer obje olduğunu öğrendik. Peki daha önce öğrendiğimiz şekilde bu js fonksiyonlarına birer yeni özellik ekleyebilir miyiz?

// Peki konumuz objeler ve objelere fonksiyon eklenmesi değil miydi? Fonksiyonların özellikleriyle objelerin ne ilgisi var Firdevs hanım? Bu noktada da obje oluşturmanın yeni bir yöntemini öğreneceğiz.

function Insan(isim,yas) {
    this.isim = isim;
    this.yas = yas;
  }

//   Haydaa ! Bu ne şimdi? Evet javascriptin sürprizlerle dolu olduğu doğrudur. Hanımlar beyler yukarıda gördüğünüz yapının adı JavaScript Object Constructor. Daha önce bir değişken yardımıyla obje tanımlamıştık. Class keywordünü kullanarak da bir sınıf tanımlayabiliyorduk. Yukarıdaki yapı ise fonksiyon kullanarak bir sınıf tanımlamamıza imkan sağlayan yapılardır. Bu şekilde bir obje mutable(mutasyona uğrayabilir daha az havalı haliyle özellikleri değiştirilebilir) bir Sınıf tanımlamış oluyoruz. Sınıf ile obje arasındaki farkı nesneye yönelik programlama konusunda daha detaylı öğrenebilirsiniz ancak burada bir obje şablonu oluşturduğumuzu söyleyebiliriz. Artık "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz.



const ali = new Insan("ali",21);
console.log(ali.yas);
// 21