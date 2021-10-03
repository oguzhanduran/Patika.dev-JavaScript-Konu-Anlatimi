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