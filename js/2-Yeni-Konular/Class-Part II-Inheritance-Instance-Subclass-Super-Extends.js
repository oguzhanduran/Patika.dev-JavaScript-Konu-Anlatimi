// Class Part II, Inheritance, Instance, Subclass, Super, Extends

// Class Decleration 

class Person {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    } 

        fullName() {
        return this.name + " " + this.surName
    }
}
    
console.log(typeof Person) // JavaScript'te classlar özel fonksiyonlardır. Bu yüzden çıktı function'dır.

const arin = new Person("Arin", "Çekiç", 6); 
const elis = new Person("Elis", "Çekic", 3); 
// arin ve elif person class'ından türetilen objelerdir. Veya arin ve elif person class'ının instace'idir.

// Ne yapıyordu constructor methodu? 1- Hafızada yeni bir obje olusturuyor 2- diz anahtar kelimesini o objeye bağlıyor.

console.log(arin instanceof Person ); // arin ve elis person class'ının instanceıdır dedik.
console.log(elis instanceof Person ); // Her ikisinin sonucuda true.

//constructor ne yapıyordu yeni bir nesne olustur ve diz'i ona bağla.

console.log(arin)
console.log(elis)

// Biz class içersinde bir fonksiyon olusturduğumuz zaman, ki bu objeye bağlandığı zaman genelde bunun ismi method olarak ifade ediliyor. 

// Biz class'da kaç tane fonksiyon olusturursak olusturalım o fonksiyonlar her zaman protonun içersinde yer alacak.
//Proto'nun içersinde bulunan bilgiler hem arin hemde elis için ortaktır.

//********************************************************************************************************************

//JavaScript'te yalnızca methodlara bağlı olarak class'lar olusturabiliriz.

console.log(arin.fullName())
console.log(elis.fullName())
// console.log(Person.fullName()) // Person classına bağlı olarak çağırdığımızda hata veriyor. Neden? diyor ki sen tamam fullName methoduyla beni çağırıyorsun ama Person dediğinde ben hangi person oldugunu anlamıyorum. Burda ki diz hangi hangisine bağlı onu çıkartamıyorum diyor arin'in fullName'ini mi istiyorsun elis'in fullName'ini mi istiyorsun diye bize hata veriyor.

// Biz bazen belli metodları yaknızca o class'a bağlamak isteriz. O classtan türetilen nesnelere değil, oclasslardan intantiate edilen instance'lara değil yalnızca o class'a bağlı olmasını isteriz belli metodların bunlarada static method veya static özellik denir. (9.28)