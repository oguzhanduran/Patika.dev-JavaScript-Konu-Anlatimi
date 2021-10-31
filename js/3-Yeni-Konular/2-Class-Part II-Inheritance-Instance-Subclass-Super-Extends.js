// Source: Arin Yazılım / Youtube

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
    static showName = "Person"
    static staMethod() {
        console.log("static method çalışıyor");
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

// Biz bazen belli metodları yalnızca o class'a bağlamak isteriz. O classtan türetilen nesnelere değil, o classlardan intantiate edilen instance'lara değil yalnızca o class'a bağlı olmasını isteriz belli metodların bunlarada static method veya static özellik denir. (9.28)

// static methodlar o class'a ait özellik ve methodlardır. Nesneye değil, instance'a değil.

console.log(arin.showName); // bize arin üzerinden showName'i göstermesini istedik ama undefined dedi. Çünkü arin için öyle bir showName özelliği tanımlı değil. Neden çünkü showName property'si static.

// console.log(arin.staMethod()); // hata veriyor çünkü böyle bir fonksiyonun-methodun tanımlı olmadığını söylüyor. ama bunu yukarda bir özellik (showName) için yapmaya çalışırken undefined dedi.

console.log(Person.showName)
console.log(Person.staMethod()) // böyle yazınca çalışıyor. yani static özellik ve static method için bunlar class'a bağlı. Ve bu özelliği instance üzerinden, obje üzerinden ulaşamıyoruz.

//en altta undefined yazıyor bu chrome'un javascript engine'inden kaynaklanıyor kafamızı karıştırmasın.


// Neden Class Kullanıyoruz?

class Student {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    } 

        fullName() {
        return this.name + " " + this.surName
    }
}
//************************************************* */
function Student1(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.fullName = function() {
        return this.name + "" + this.surName
    }
}

// JavaScript'te classlar özel fonksiyonlardır unutma!

// Student fonksiyonumlada student class'ımla oluşturduğum şeyi oluşturabiliyorum zaten neden ayrıca bir class olusturuyorum?

// Nesne yönelimli programlamada mümkün olduğu kadar problemleri parçalara ayırmak, ki buna modülleştirmek denir, bizim açımızdan işimizi çok kolaylaştırır. Neden? sonra programı geliştirmek için yaptığımız çalışmalarda bizi çok kolaylaştırır. Yakaladığımız bir hata olduğunda bizi kolaylaştırır. O classlar instance'ların yani kendilerinden türetilcek olan nesnelerin bir şablonu görevi görürler en önemli kullanılma sebebi bu. Yani classlar nesnelerin şablonudur.

// Örneğin bir kütüphane programını düşünelim teorik olarak bir kütüphane programını baştan sona tek bir dosya içersinde yazabiliriz. Ancak bu sonradan oluşacak problemleri bizim açımızdan zorlaştırır. Bunun yerine biz kitapları bir nesne ve o kitapları alacak kütüphane üyelerini bir nesne olarak düşündüğümüz zaman bunları birbirleriyle modüller olarak ilişkilendirmek çok daha kolay olur ve orda nesneleride türetirken class bize bir şablon işlevi görür. O nedenle biz classları kullanırız.

//********************************************************************************************************************

//Inheritance (Kalıtım)

class Employee {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    } 

        fullName() {
        return this.name + " " + this.surName
    }
}

class Engineer extends Employee {}; 

const muzeyyen = new Employee("Muzeyyen", "Sasmaz", 55)
const oguzhan = new Engineer("Oguzhan", "Duran", 26) // Yeni bir Engineer nesnesi Instantiate ettik.

console.log(muzeyyen)
console.log(oguzhan)

// Engineer class'ında da name surName vs gibi şeyler olacak bu yüzden biz bunu direk Engineer class'ına uygulamak istiyoruz ama Nasıl?

// Engineer class'ı extends ile birlikte Employee class'ına ait tüm özellikleri ve methodları içeriyor.

// Dikkat!!! Engineer class'ının prototype'ı Employee iken Employee class'ının prototype'ı yani ilk örnegi object'tir. 

// Employee ile Engineer class'ının tüm özellikleri aynı o zaman ne gereği var, neden direk employee'ti kullanmadık denilebilir. Yukarıdaki örneği sadece extends ile başka bir class'dan yeni bir class olusturulabileceğini göstermek için yaptık. 

// Burdaki Engineer --> Subclass (Child), Employee -->  SuperClass (Parent) olarak tanımlanır.

console.log(muzeyyen instanceof Employee ); //muzeyyen Emyloyee objesinin bir instance' yani mirascısı.
console.log(oguzhan instanceof Engineer);// oguzhan'da Engineer class'ının bir intance'ı.
console.log(oguzhan instanceof Employee); // oguzhan aynı zamanda employee'nin instance'ı. Yani Engineer extends ile bereber Employee'nin tüm özelliklerini alabiliyor ve üzerine de bunu genişletebiliyor.

console.log(muzeyyen instanceof Engineer ) // Buda tabiki false gelir, çünkü muzeyyen engineer objesinin intance'ı değil employee'nin instance'ı.

//*********************************************************

class Employees {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    } 

        fullName() {
        return this.name + " " + this.surName
    }
}



class Engineers extends Employees {
    constructor(name, surName, age, job) {
        super(name, surName, age); // sen git bunları super class'ından al dedik. Yani Employees class'ından.
        this.job = job;
    }
    getMoney() {
        console.log("Para Kazan")
    }
} 

// Burda Engineers class'ını yeni job özelliği ile beraber ve yeni bir methodla beraber, aynı zamanda Employee class'ından extends etmiş olduk.

const mustafa = new Employees ("Mustafa", "Sasmaz", 40);
const ramazan = new Engineers ("Ramazan", "Sasmaz", 45, "engineer");

console.log(ramazan)
console.log(mustafa)

// OBJE + (name, surName, age ) => Employees 
// Employees + job, getMoney() => Engineers 

console.log(ramazan.getMoney())
// console.log(mustafa.getMoney()) // Hata aldık çünkü getmoney methodu engineers'e ait.

//*******************************************************************************************************************/

class Employee2 {
    constructor(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    } 

        fullName() {
        return this.name + " " + this.surName
    }
}

class Engineer2 extends Employees {
    constructor(name, surName, age, job) {
        // super(name, surName, age); // sen git bunları super class'ından al dedik. Yani Employees class'ından.
        this.job = job;
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    getMoney() {
        console.log("Para Kazan")
    }
} 

// const mehmet = new Engineer2("Mehmet", "Sasmaz", 40, "engineer") // Hata verdi, çünkü subclass'ın constructor methodu olustururken, constructor görevini yapmıyor. Yani yeni bir nesne olusturup this'i ona baglamıyor. Yeni bir nesne olusturup this'i ona baglamasını extend ettiği süper classdan yani parent class'tan bekliyor. Bu nedenle bizim this'i belirtmeden önce superclass'ı calıstırmamız lazım. Yani biz employee2 class'ından bazı özellikleri alacaksak o özellikleri almanın yanında ordaki ousturulan nesne ve this'in ona baglanması employee2 class'ı tarafından yapılıyor.

// Biz herhangi bir class'ın this'ni yazmadan önce o class'a ait olan parent class'ın super methodunu çalıştırmamız gerekir. Cunku subclass'ın this'i superclass tarafından olusturuluyor.

// Bir class içersinde constructor methodunun yaptığı ilk iş önce nesneyi olusturmak sonra "this" ile bu nesneyi birbirine bağlamak.

//*******************************************************************************************************************/

// Var olan veri tiplerini extends edebilir miyiz?

class ExtendedArray extends Array{
    shuffle() {
        this.sort(()=> Math.random() - 0.5) // Methodu internetten aldık.
    }
}

let myArr = new ExtendedArray(1, 2, 3, 4, 5)

 console.log(myArr instanceof ExtendedArray)
 console.log(myArr instanceof Array)



console.log(myArr)

myArr.shuffle();
console.log(myArr)