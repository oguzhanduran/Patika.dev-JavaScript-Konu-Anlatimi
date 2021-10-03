// Object(Nesne) Nedir? Nasıl Oluşturulur?

let arrayobj = [1,2,3]
let object1 = {obj: 1}

console.log("arrayobj :", typeof(arrayobj)) //burda array yapısıda object olarak gözükür yani biz array oluşturduğumuzda object'ten türetildiğini unutmamalıyız.
console.log("object1 :", typeof(object1))

let item1 = new Object()
let item2 = {}
console.log("item1 :", typeof(item1))
console.log("item2 :", typeof({item2}))

let item3 = {} // new Object yazısı yerine {}'leri kullandık. yani süslü parantez bunun bir object olduğunu söylüyor.
let item4 = new Object() //gene item4'ün bir object olduğunu söyledik.

//bu objeleri oluşturduktan sonra neden bu objeleri oluşturuyoruz ne işimize yarıcak? mesela arrayobj objesine baktığımızda içinde 1, 2, 3 diye bilgi var bu bilgilerin hangileri olduğunu bilmiyoruz. O, 1, 2 diyerek indexlerini biliyoruz ama biz indexle değilde isim vererek buna ulaşmak istiyorsak o zaman objelerin özelliğinden faydalanacaz. 

//key - value ilişkisi kullanabiliyoruz, ve bu key value ilişkisi sayesinde (anahtarlama) bu yapılara daha akıcı, rahat bir şekilde ulaşabiliyoruz.

//Neden biz her yerde key-value ilişkisi kullanmıyoruz? Çünkü bazen oluşturması çok eziyetli olabiliyor. Mesela bir arabaya baktığımızda arabanın modeli, cinsi aynı zamanda hangi yılda üretildiği gibi bilgilerin object olarak tanımlanması mantıklıyken, mesela sıralı bir id elementlerini veya farklı bilgileri liste içersinde tutmak daha mantıklı olabilir. 

console.log("object1 :", object1) // bu şekilde yazınca direk console'dakş bilgiyi görebiliyorum tıpkı arraylarda ki gibi.

// TEXT

// Javascript’in en temel veri tipi kabul edilen objeler, son derece önemlidir ve nasıl çalıştıklarını bilmek bir front-end developer için hayati önem taşır. Bu yazıda javascript objelerinin teorik çalışma mantığını örneklerle göreceksiniz.

// Objeler, içerisinde birden fazla değeri depolayan yapılardır. Property olarak bilinen bu değerler primitive(String,number, boolean vb.) veya başka objeler olabilirler ve her bir değer string veya sembol ile isimlendirilebilir.

// Objeler değiştirilebilen veri tiplerindendir. İçerdiği propertyler, objenin kendisi const keyword ile atanmış olsa bile değiştirilebilirler. Fakat primitive değerlerden farklı olarak objeler, referans yoluyla değiştirilirler ve değişen obje, yeni bir hafıza adresine sahip olur. Çünkü primitive değerlerin aksine objeler, javascript istemcisinin belleğinde, sahip oldukları değerlerle değil, sistemin atadığı hafıza adresleriyle kayıtlıdırlar. Bunun ayrımını aşağıdaki örnekte şöyle görebiliriz.

//aynı değerlere sahip 2 primitive veri tipi
let mesaj = "merhaba";
let başkaBirMesaj = "merhaba";
console.log(mesaj == başkaBirMesaj);       //true

//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
 mesaj:"merhaba"
}
let başkaBirObje = {
 mesaj:"merhaba"
}
console.log(obje == başkaBirObje);         //false

// Bu örnekte görüldüğü gibi, aynı primitive değerlere sahip olan “mesaj” ve “başkaBirMesaj” isimli değişkenler eşit kabul ediliyor. Fakat “obje” ve “başkaBirObje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar. Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.

// Obje Oluşturmak
// Objeler üç şekilde oluşturulabilir. Object literal, new Object keyword’ü ve Object.create() fonksiyonuyla. Object literal ve new Object yöntemleri, normal bir objeyi oluştururken kullanılan yöntemlerdir. Object.create() yöntemi ise, mevcut bir objeden kalıtım yoluyla bazı bilgiler alarak yeni bir obje oluşturmaya yarar.

// Object Literals
// Javascript’te obje oluşturmanın en kolay yolu olarak bilinir. Süslü parantez {} kullanılarak oluşturulan objenin içerdiği propertylerin değerleri iki nokta : işaretiyle belirtilir. Propertyler birbirlerinden virgül , ile ayrılır. Örnek vermek gerekirse:

let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
    };

    // countriesTalkSpanish isimli obje, continet ve language adında iki propertye sahip. Bu propertyler de iki primitive değeri barındırıyor.

// New Keyword ile Obje Oluşturmak
// New keyword'ü yeni bir obje oluşturup başlatır. Oluşturulurken belli başlı bazı constructor invocation’lardan(kurucu çağrılarından) birini(Object, Array, Date vb.) yazmak ve sonuna mutlaka fonksiyon çağrısı olduğunu belirten parantezleri () eklemek gerekir. Fonksiyon çağrısı, objenin başlatılması için olmazsa olmazdır. Aşağıdaki örnekte standart object invocation kullanarak, Fransızca konuşulan Afrika ülkeleri objesini oluşturalım ve tıpkı bir önceki örnekte olduğu gibi, language ve continent propertyleri verelim.

let countriesTalkFrench = new Object();     
countriesTalkFrench.continent = "africa";     
countriesTalkFrench.language = "french"; 

// objemizi new keyword ile initialize ettikten sonra property'lerini atadık. Dikkat, Object literal’dakinden farklı olarak iki nokta : ve süslü parantez {} kullanmadık.

// Object Prototype
// Son yöntem olan Object.create() yöntemine geçmeden önce, prototype hakkında bilgi sahibi olmak, son yöntemi anlamak için önemli. Javascript’te hemen her objenin bağlantılı olduğu ikinci bir obje vardır ve bu ikinci objelere prototype denir. Mevcut obje, ikinci objeden yani prototype’ından kalıtım(inheritence) alır. Object literal yöntemiyle oluşturulan her objenin prototipi aynıdır: object.prototype. New keyword'ü kullanılarak oluşturulan objelerin ise nereden kalıtım alacakları, function invocation’larına göre değişiklik gösterebilir. Örneğin new Date() objesi, hem object.prototype’ın kalıtımını alırken hem de date.prototype’dan kalıtım alır.

// Object.create
// Obje oluşturmadaki son yöntem olan object.create() yöntemi, yeni bir obje oluştururken nereden kalıtım alacağına karar vermemizi sağlayan bir yöntemdir. Aşağıda yer alan örneklere bir bakalım;

let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz


// Herhangi bir yerden kalıtım almasını istemediğimiz bir obje oluşturmak istediğimizde null parametresini atamak yeterli olacaktır.



let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.


// standartObject isimli obje örneği, object literal ve new object keyword ile oluşturulan objelerin prototiplerini parametre olarak aldığı için, onlar gibi çalışır.



let argentina = Object.create(countriesTalkSpanish)

// Argentina isimli obje örneği ise daha önce oluşturduğumuz countriesTalkSpanish isimli object literal’dan kalıtım alacağı için onunla aynı property'lere sahip olur. Yani argentina objesi, Güney Amerika kıtasında bulunduğunu ve İspanyolca konuşulduğunu, kalıtım yoluyla sahip olduğu property'lerden belli eder.

argentina.capital = “buenos aires”;

// objeye, ülkenin başkentini belirten yeni bir property atadık. Artık elimizde başkentini, konuşulan dili ve hangi kıtada yer aldığını bildiğimiz bir ülke var.
