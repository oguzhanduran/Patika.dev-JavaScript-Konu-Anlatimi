// Source:  Kodcular / Medium

// Değişken oluşturma(Declaration) ve tanımlama(initialization) 

// var ile bir değişken oluşturduğumuzda ve herhangi bir değer atamadığımızda, oluşturulan değişkenin değerine default olarak undefined atanır. Oluşturduğumuz bu değişkeni console.log ile çağırdığımızda undefined çıktısını alırız.

// Variable Declaration

// Değer atamadan sadece değişken oluşturma işlemine Variable Declaration denilmektedir.

var album; // Variable Decleration
console.log(album); // Undefined

// Variable Initialization

// Bir değişkene ilk değeri atama işlemine Variable Initialization denmektedir.

var album = "sarı çizmeli mehmet ağa" // variable initialization
console.log(album) //"sarı çizmeli mehmet ağa"

// Scope

// Scope uygulamamızda ki değişkenlerin ve fonksiyonların nerelerde erişilebilir, nerelerde erişilemez olduklarını belirler.

// Global Scope

// Global Scope özellikli değişkenler, fonksiyon içerisinden de erişilebilir durumdadırlar.

// Global Scope Örnek

var sayHi = "Hello";

function greet() {
    console.log(sayHi)
}

greet(); // Hello

// Function Scope
// Eğer var ile tanımlanan bir değişken, bir fonksiyon içerisinde oluşturulmuş ise, sadece o ve nested dediğimiz fonksiyon içerisinde bulunan diğer fonksiyonlar içerisinde çağırılıp kullanılabilir.

// yani bir fonksiyonun içine var ile bir değişken tanımlarsak onu fonksiyonun dışından çağıramayız. referrence error ... is not defined der.

// var-let-const ve Farkları

// var vs let

// İlk olarak, var ve let’i karşılaştıralım. var ve let arasında ki fark, var function scope özelliği taşırken, let block scope özelliği taşımaktadır. Yani let ile oluşturulan bir değişken sadece oluşturulduğu yerdeki süslü parantezler içerisinde erişilebilirdir ve dışarısında kullanılamaz.

// Tekrar hatırlayacak olursak, var keyword’ü ile oluşturulan değişkenler function scope özelliklidir. Yani fonksiyon içerisinde oluşturulan değişkenler o fonksiyon içerisinde herhangi bir yerden erişilebilir. Peki var yerine let yazarsak ne olur?

// ReferenceError: i is not defined hatası alırız. Bunu almamızın sebebi let keyword’ü block scope özellikli olmasıdır. let keyword’ü ile oluşturulan bir değişkeni, oluşturulduğu süslü parantezler dışarısında çağırmaya çalışırsak hata alırız.

// var keyword’ü ile değişkenler tekrar tanımlanabilir ve değerleri güncellenebilir.

// let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz.

// Genel olarak özetleyecek olursak:

// 1-var function scope özelliği taşımaktadır. let ve const block scope özelliklidir.

// 2-Oluşturulan değişken önce kullanılıp daha sonra var keyword’ü ile tanımlanırsa herhangi bir hata oluşmaz(Hoisting). let ve const için bu durum geçerli değildir.

// 3-let ve const ile oluşturduğunuz değişkenlere değer atadığımızda, const ile oluşturduğunuz değişken’e tekrar atama yapamayız, ancak let değişkenine yeni bir değer ataması yapabilirsiniz.