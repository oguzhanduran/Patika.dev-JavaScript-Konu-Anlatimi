// var sayilar = [32, 5, 1, 100, -1, 90];
// console.log("Array Elemanları..." );

// for (var i = 0; i < sayilar.length; i++)
// console.log("Eleman " + sayilar[i]);

// KISA YÖNTEM - forEach


var sayilar = [32, 5, 1, 100, -1, 90];
console.log("Array Elemanları..." );

sayilar.forEach(function(sayi) { //burdaki sayi değeri işlemleri gerçeklştirmek için kullandığımız bir parametre yerine başka bir şeyde kullanabilirdik.
    console.log("eleman :" + sayi) // forEach döngüsüyle her birinin üstünde tek tek gezdiği için tek tek bu arraylarımın değerlerine eşit olacak.
})


 
//sayılar.forEach -> Sayıların üzerinde tek tek gezin demek. Her biri için anlamında... forEach döngüsünde bir fonksiyon göndermem gerekiyor.  burda sayı şeklinde bir tane değerimizi, sayılarımızı tek tek eşitlicek bizde bu şekilde forEach methodunu kullanabileceğiz.                 


// IF - ELSE YAPISI
var a = 10;
var b = 20;

if ( a == b) {
    console.log("eşit")
} else {
    console.log("eşit değil")
}

var islem = 4;

if (islem == 1) {
    console.log("işlem1")
}else if ( islem == 2) {
    console.log("işlem2")
}else if(islem == 3) {
    console.log("işlem3")
}else {
    console.log("Geçersiz")
}


//SWİTCH CASE YAPISI

// break; -> beklenmedik durumlar olusabilir, ve biz bu beklenmedik durumlarda break kullanmazsak, diğer case ler sağlanmasa bile biz onlara girebiliyoruz. O yüzden case tamamlandıktan sonra biz break yaparsak hiçbir case'e girmeyecektir.

// default: yani mevcut durumların dışındaki durumlarda çalışacak anlamında 

var sonuc = 4;

switch(sonuc) {
    case 1:
        console.log("İşlem 1");
        break;
    case 2:
        console.log("İşlem 2");
        break;
    case 3:
        console.log("İşlem 3");
        break;
    default:
        console.log("Geçersiz İşlem...")
        break; //burdan sonra break kullanadabiliriz kullanmaya da biliriz çünkü burda defaulttan sonra işlemlerimiz biteceği için switch case yapılarımız sona erecek. 
}

//JAVASCRİPT'DE FONKSİYON TANIMLAMAK


function sayHi() {
    console.log("Merhaba Nasılsın?")
}

sayHi();
sayHi();

//selamla -> fonksiyonun ismi, selamlamanın içine herhangi bir değer göndericeksem parantezin içine değerleri yani parametrelerini yazmalıyım.

//fonksiyon bloğuma süslü parantezler yardımıyla giriyorum.

// fonksiyonumu çalıştırmak için ise aşağıya süslü parantezin içine fonksiyonun ismi artı parantezi eklemeliyim.


//FONKSİYONA PARAMETRE GÖNDERME

function selamla(isim) { 
    console.log("Merhaba " + isim)

}

selamla("Oguzhan")
selamla("Ayşe")

// Burda selamla yazısının içine isim isimli bir parametre yazdık, fakat dikkat edersek bu parametreyi var ile tanımlamadık. Çünkü değişken tiplerimiz bizim dinamik olarak belirleniyorlar o yüzden buraya herhangi bir var yazmak gereksiz olarak görünüyor. o yüzden sadece parametremizin ismini yazıyoruz.

// Çalıştırdıktan sonra isim parametremiz yerine ne yazmak istiyorsak onu parantez içine ekliyoruz. Ama string olarak yazmayı yani tırnak içinde yazmayı unutma!!!

function toplama(a, b, c) {
    console.log("Toplamları :" + (a + b + c))
}

toplama(3, 4, 5)
 

// return -> fonksiyonun çağrıldığı yere içerden bir tane değer dönmemizi sağlıyor.

function topla(a, b, c) {
    return a + b + c
}

var toplam = topla(4, 8, 5)
console.log("Yeni Toplamları " + toplam)

// Burda return a + b + c yaptığımız için dışarı bir output atanır ve ben bu outputu bir değişken ile yakalayabilirim.


// OBJE OLUŞTURMA YÖNTEMİ 

// JavaScript object-based (nesne tabanlı) bir programlama yöntemidir. Ama object-oriented (nesne yönelimli) bir programlama dili değildir.

// Object-based -> Bu objelerden herhangi bir alt obje yani herhangi bir inheritance işlemi yapamayacağımız anlamına gelir. JavaScript bundan dolayıda object-based bir programlama dilidir.

// Biz normalde bir tane değişken oluşturduğumuz zaman bu değişkenimiz sadece tam sayı, float, string gibi değerlere sahip olabiliyor. Ancak biz eğer obje oluşturursak bu objelerimize biz değişik özellikler ve methodlar ekleyebiliriz ve daha sonra biz bu objelerimizi programlarımızda  kullanabiliriz.


var calısan = {
    isim: "Oguzhan",
    soyisim: "Duran",
    numara: 1722,
    diller: ["php", "java", "go"]
}; 

console.log(calısan.isim);
console.log(calısan.numara);
console.log(calısan.diller);

// Obje süslü parantez ile olurulur.

// BİZİM OBJELERİMİZİN İÇİNDE BİRDEN ÇOK OBJEDE BULUNABİLİR.

var kişi = {
    isim: "Oguzhan",
    soyisim: "Duran",
    numara: 1722,
    diller: ["php", "java", "go"],
    adres: {
        cadde: "Kabil",
        sokak: "1254. sokak"
    }
}; 

console.log(kişi.adres.cadde)

//OBJENİN İÇİNDE FONKSİYON OLUŞTURMAK

var öğrenci = {
    isim: "Oguzhan",
    soyisim: "Duran",
    numara: 1722,
    diller: ["php", "java", "go"],
   isimBilgileri: function() {
       return "Çalışan ismi: " + this.isim + " Çalışan Soyismi: " + this.soyisim
   }
    
}; 

console.log(öğrenci.isimBilgileri())

//fonsiyondan sonra parantez kullanmayı unutma!!!
//this burda bizim öğrenci objemizi simgeliyor.
// return kullandığımız için çıktıyı yazdırmak istiyorsak önce bir değişkene tanımlamamız gerek


//FARKLI BİR ŞEKİLDE OBJE OLUŞTURMA

var çalışan = new Object(); 
çalışan.isim = "Mustafa Murat";
çalışan.soyisim = " Coşkun"
çalışan.isimBilgileri = function() {
return "isim bilgileri: " + this.isim + "" + this.soyisim 
}; 

console.log(çalışan.isim)
console.log(çalışan.soyisim)
console.log(çalışan.isimBilgileri())

//JavaScript new Object şeklinde bir şey dediğimiz zaman bir tane object oluştırmak istediğimizi anlayıp çalıştırıyor. Ancak bu objenin içersinde herhangi bir özellik method bulunmuyor. Biz bunu kendimiz tek tek ekleyebiliyoruz.

// CONSTRUCTER PATTERN ( YAPICI FONKSİYON DESENİ)

function developer(isim, soyIsim, numara) {
this.isim = isim; // Benim bu fonksiyondan türetilen objelerim şu özelliğe sahip olsun dicem, bu yüzden this.isim vs dedik.
this.soyIsim = soyIsim;
this.numara = numara;
this.bilgileriGöster = function() { //istersem bir tane fonksiyonda kendim ekleyebilirim
    return "isim: " + this.isim + "\nsoyisim: " + this.soyIsim + "\nNumara: " + this.numara
}
}

var calısan1 = new developer("Mustafa Murat", "Coskun", 123451); // Yukarıdaki function'dan obje olusturcaz. Yani çalışan1 yukarıdaki fonksiyonu kullanarak yeni bir obje üretsin diyoruz.

var calısan2 = new developer("Oğuzhan", "Duran", 45568) // Biz burda istersek bu fonksiyona bağlı kalarak 100 tane fonksiyon oluşturabiliriz.

// Burada dikkat edersek tek bir fonksiyon oluşturup istediğimiz kadar türetebiliyoruz.

console.log(calısan2.bilgileriGöster())
console.log(calısan1.bilgileriGöster())




// Gönderdiğimiz 3 tane değer ile istediğimiz kadar objeyi sadece tek bir fonksiyon kullanarak olusturabiliriz.

// Bir alt satıra geçmek için \n'i kullanıyoruz. 



 