// Object Part II, Prototype nedir?, Inheritance, Basic Object, __proto__ 

// JavaScript de hemen hemen tüm nesneler başka bir nesneden türetilerek çoğalır.
// Bir önceki nesneye türetilen nesnenin prototype'ı denir.

const person = {
    name: "Oğuzhan",
    surName: "Duran",
    job: "Engineer",
    age: "26",
    fullName: function() {
        return `${this.name} ${this.surName}`
    }
}


console.log(person.name) // Burda person yerine this kullanamayız this'i sadece person objesinin içinde kullanırız.

console.log(person.fullName()) // Burda fullName methodundan sonra "()" kullandığımıza dikkat et çünkü fullName bir method oldugu için methodu çalıştırmak için parantez gerek.


console.log(person) // Bunu yazdığımızda consoleda person objesinin en altında object nesnesinden inherit olabilecek methodları görüyoruz ve bu methodları yukarıdaki fullName methodu gibi tanımlamadığımız halde object prototype'ından miras kaldığı için kullanabiliyoruz. 

console.log(person.hasOwnProperty("name")) // Biz burda person nesnesinin içinde name özelliği yani property'si vardır dedik. Durum doğru olduğu için console'da true göründü. Yani burda bizim yazdığımız person nesnesi prtotype'ı olan object nesnesinden hasOwnProperty methodunu inherit ediyor. Yani miras olarak alıyor.

console.log(person.color) // burda ise biz color özelliğini tanımlamadığımız için undefined dedi.

// Anlaşılması açısından -> OBJECT + name, surname, job, age, fullName() -----> person nesnemimizi türettik.


const myObj = {};
console.log(myObj)
console.log(myObj.toString()) // myObj objemiz boş olduğu halde biz burda çıktı aldık çünkü bizim prototype'ımız bir object bu yüzden temel object'imizin toString methodunu kullanarak çıktı aldık.

// OBJECT ---> myObj yani Direk object nesnemizden myObj nesnemizi türettik.


function Person(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.fullName = function() {
        return this.name + "" + this.surName
    }
}

const arin = new Person("Arin", "Çekiç", 6); // Bu şekilde yeni bir Arin nesnesi oluşturduk.
console.log(arin) // console'a baktığımızda arin objesinin başında person yazdığını görüyoruz bu neden yazıyor???
// Cevap: Burda person yazarak artık burdaki prototype temel nesne değil, temel nesnenin yanında biz person adında bir constructor fonksiyonu oluşturduk, ve o constructor fonksiyonundan başka özelliklerde alıyor.

// OBJECT + name, surname, job, age, fullName() -----> person -----> arin | Burda söyle düşünebiliriz Arin'in prototype'ı person, person'un prototype'ı object.

console.log(arin.toString()) // Çıktı gene alabildik çünkü en baştaki miras veren object ve object'te toString methodu kayıtlı.

console.log(arin.hasOwnProperty("age")) //true yukardaki nedenden dolayı.

console.log(arin.__proto__) //arin nesnesinin prototype'ını öğrenmek için girdik.

const elis = new Person("Elis", "Çekiç", 4);
console.log(elis)
elis.job = "Child"
console.log(elis)

// OBJECT + name, surname, job, age, fullName() -----> person + job -----> elis

// Constructor fonksiyonu ile person nesnesi aynı şey çünkü her fonksiyon bir nesnedir.

 elis.toString = function() { // Burda prototype'da var olan toString methodunun üzerine yazdık ve farklı bir method haline getirdik onu.
    return "ELİSSSS";
}
console.log(elis.toString()) //toString'den sonra parantez koymayı unutma.


// ****************************************************************************************

function Student(name, age) {
    this.name = name;
    // this.surName = surName; aşağı yazdığımız için gerek yok.
    this.age = age;
    // this.fullName = function() {
    //     return this.name + "" + this.surName
    // } Aşağı yazdığımız için buna gerek yok.
}


Student.prototype.fullName = function() { 
    return this.name + "" + this.surName
}
// Ben burda student nesnesinin içinde yer alan fullName methodunu tekrar tekrar çalıştırmaktansa bunu nesnenin constructor fonksiyonuna değil de prototype'ını aldık.

Student.prototype.surName = "Çekiç" //normalde bunlar methodlarda saklı, burda ikisinin surName'ide çekiç olduğu için bu şekilde yaptık, normalde bunlar methodlarda saklı.

const fatma = new Student("Fatma", 4)
const sami = new Student("Sami",  6); 

console.log(fatma)
console.log(sami) // Bunları yazdırdığımızda fullName ve surName prototype'ın içersinde gitti. 
// fullName methodunu ve surName'i prototype'ın içersine yazmamızın nedeni bunların fatma ve sami nesneleri için ortak olmasından kaynaklı, her iki nesne için ayrı ayrı bunları oluşturmaya surName olusturmaya yada fullName fonksiyonu olusturmaya gerek yok.

//Ben fullName methodunun prototype'ını alırım, ve constructor fonksiyonundan olusan tüm nesneler için değiştirmiş olurum. Yani fullName methodunu bir kez yazıyoruz, ve o method tüm nesneler için çalışyor.

// Yani sonuc olarak anlamamız gereken biz prototype ile fullName methodunu bir kez oluşturuyoruz her nesne için ayrı method çalıştırmamıza gerek yok