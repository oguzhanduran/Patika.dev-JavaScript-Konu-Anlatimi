// pop() Metodu

// pop() metodu dizinin son elemanını siler ve dizinin yapısını değiştirir. Aynı zamanda da diziden silinen elemanı döndürür. başındaki elemanı silmek içinde shift methodunu kullanırız.

let array = ["1", "2", "3"]
let silinenArray = array.pop() 
console.log(silinenArray) // "3"
console.log(array) // ["1","2"]

  //*****************************************************************************************************************/

// unshift() Metodu 
//  Javascript de dizilerin başına eleman ya da elemanlar eklemek için unshift() metodunu kullanıyoruz. Metot diziye eleman ya da elemanlar eklerken dizinin yapısını değiştirir. push() metodu ile de sonuna ekleriz.
let dizi = ["6", "7", "8"]
dizi.unshift("5")
console.log(dizi) // ["5","6","7","8"]

  //*****************************************************************************************************************/

//  parseInt() Metodu

// parseInt() metodu, kendisine ondalıklı olarak verdiğiniz değerin ondalık kısmını siler ve kalan kısımdan yeni bir değişken oluşturarak döndürür. 
console.log(parseInt(78.5643)) //78

//parseInt(), veri türü ne olursa olsun girilen değeri number veri türüne dönüştürecektir. Yani string bir değer de girseniz işlem sonucu number olacaktır.
console.log(parseInt("123assd") ) //123

Input: var a = parseInt("1000");
Output: a = 1000(Number)

 //Buna ek olarak, fonksiyona girdiğiniz ikinci parametre ile dönüştürmek istediğiniz sayı sistemine dönüşüm yaptırabilirsiniz. Eğer ikinci parametre girilmezse default olarak onluk sayı sistemine dönüşüm olur.

 console.log(parseInt("15",8)) // 13 // 8'lik tabandan 10'luk tabana çeviriyor.

   /*****************************************************************************************************************/

// array.indexOf() ve array.lastIndexOf() Methodu

 // indexOf() metodu, var olan bir dizi içerisinde aradığımız bir elemanın indeks numarasını geriye döndürür.
 // Eğer aradığımız eleman dizi içerisinde yoksa geriye -1 değerini döndürür.

 // Syntax -> diziAdi.indexOf(aratilacak_deger,baslangic_indeksi);

 // Örnek 1
 var arabalar = ["Hyundai","Ford","Toyota","BMW","Ford"]; 
 
var indeks = arabalar.indexOf("Ford");
 
console.log(indeks); // 1

// Örnek 2
var arabalar = ["Hyundai","Ford","Toyota","BMW","Ford"]; 
 
var indeks = arabalar.indexOf("Ford",2);
 
console.log(indeks); //4, Başlangıç indeksi olarak 2 değeri verdiğimiz için ilk “Ford” elemanını geçip ikinci “Ford” elemanının indeks numarasını geriye döndürdü.

// Örnek 3 
var arabalar = ["Hyundai","Ford","Toyota","BMW","Ford"]; 
 
var indeks = arabalar.indexOf("Audi");
 
console.log(indeks); // -1 Gördüğünüz gibi “Audi” dizi içerisinde bulunmadığı için geriye -1 değeri döndürüldü.

// Örnek 4 lastIndexOf()

var arabalar = ["Hyundai","Ford","Toyota","Ford","BMW","Ford"]; 
 
var indeks = arabalar.lastIndexOf("Ford");
 
console.log(indeks); //5

   /*****************************************************************************************************************/

   // substr()

   //substr(), slice() ve substring() gibi string parçalama işlemlerinde kullanılır ancak diğer metotlardan farkı ikinci parametre başlangıçtan itibaren alınacak karakter sayısını temsil eder.

 // Örnek 
var str = "Mazda,Opel,Toyota";
var result = str.substr(6,4); // Opel

   /*****************************************************************************************************************/


// String substring()
// slice() metodun olduğu gibi substring() metoduyla başlangıç ve bitiş indeksi vererek aralıktaki karakter dizisini alabiliriz.

// ** slice() metodu ile substring() metodunun farkı; substring()'^da negatif indeks kullanamıyoruz.

var str = "Mazda,Opel,Toyota";
var result = str.slice(6, 10); // Opel
** slice() metodunda olduğu gibi bitiş indeksini vermezsek sona kadar alır.

   /*****************************************************************************************************************/

  //toString()

  // toString() metodu, kendisine tanımlanan değişken değerini string olarak değiştirerek döndürür.

var sayi	=	22;
var cikti	=	sayi.toString();
console.log(cikti) //"22" number olan veri türünü stringe çevirdi.

// 10'luk tabandaki bir sayıyı string halde farklı tabanlara çevirir.

// Örnek 1
var sayi	=	22;
var cikti	=	sayi.toString(3);
console.log(cikti) // "211"

//Örnek 2
var sayi	=	22;
var cikti	=	sayi.toString(2);
console.log(cikti) // "10110"

   /*****************************************************************************************************************/

  //  abs() metodu

  // abs() metodu, kendisine verilen sayı değerinin mutlak sayı değerini bulur.

  let negatifSayı = -10
  console.log(Math.abs(negatifSayı)) // 10


   /*****************************************************************************************************************/

  //  repeat() Metodu
   
//   Javascript programlamda kullanılan repeat() metodu bir karakter dizisinin kopyalanmasını sağlayan bir yerleşik metottur.

// Kopyalama sırasında stringleri direkt olarak bitişik şekilde yazar.

var metin = 'Merhaba'
console.log(metin.repeat(7))

// Output: MerhabaMerhabaMerhabaMerhabaMerhabaMerhabaMerhaba

   /*****************************************************************************************************************/
  //  String.prototype.(padStart/padEnd)

  //  String belli bir karaktere kadar tamamlamanızı sağlar.
  //  boş karakterle mi / belli bir örüntü ile mi tamamlanacak.
  //  padStart/padEnd: doldurma işleminin başa mı/ sona mı ekleneceğini

   console.log('abcd'.padStart(4));  //'abcd'
   console.log('abcd'.padStart(8));  //'    abcd'
   console.log('abcd'.padStart(12)); //'        abcd'
   console.log('abcd'.padStart(12,'xyz')); //'xyzxyzxyabcd'
   console.log('abcd'.padEnd(12)); //'abcd        '
   console.log('abcd'.padEnd(8));  //'abcd    '
   console.log('abcd'.padEnd(4));  //'abcd'
   console.log('abcd'.padStart(12,'xy')); 'xyxyxyxyabcd'

   console.log("Fenerbahçe".padStart(50))  // "                                        Fenerbahçe"
   console.log("Fenerbahçe".padEnd(50)) // "Fenerbahçe                                        "

      /**************************************************************************************************************/
      
// .reduce()
  
// azalmak küçülmek demek ve tam olarakta bu işlemi yapıyor. reduce dizideki tüm öğelerimizi önce bir işlevden geçiriyor ve sonunda diziyi tek bir değere düşürüyor. yani sayılardan oluşan bir dizimiz olsun reduce kullandığımızda son hali bu dizilerin toplamı diziyi küçülte küçülte en sonda değerlerin toplamını döndürüyor.

// normalde toplamayı nasıl yapıyoruz;

const numbers = [1, 2, 3, 5]

let total = 0;
numbers.forEach((number) => total += number);
console.log(total); // 11

// reduce temelde 2 tane zorunlu 2 tane opsiyonel parametre alıyor.
//1. parametre = accumulator = her döngüden çıkan sonucun toplandığı değer dizi ise dizi string ise string sayı ise sayıdır. yukarıdaki total'e karşılık gelir ama genelde acc şeklinde görürsünüz.
//2. parametre = current value = o an işlem yaptığımız öğemiz,yani dizideki her bir değeri temsil eder current value, item, number diyebiliriz tamamen bize kalmış biz number dedik. 
//3. parametre = index = sırası gelen değerin dizideki konumu 
//4. parametre = source array = üzerinde reduce uyguladığımız dizi

let total2 = numbers.reduce(function(acc, number) {
  return acc + number

}); 

console.log(total2); // 11

//function ekleyerek callback fonksiyonu haline getirdik.

let total2 = numbers.reduce(function(acc, number) {
  return acc + number

},5); 

console.log(total2); // 16

// en sonda süslü parantezden sonra 5 yazarak bir başlangıç değeri atadık.

//istersek bunu arrow function şeklindede yazabiliriz;

let total3 = numbers.reduce((acc, number) => acc + number, 5)

console.log(total3) //16

// Nesne değerlerinin toplamını bulmak ile ilgili farklı bir örnek deneyelim. 

const basket = [
  {
  name: "iphone 8",
  price: 7000,
}, 
{
  name:"Apple Macbook Pro",
  price: 14000,
}, 
{
  name: "Harman/ Kardon", 
  price: 2500,
}
]

// let sum = basket.reduce((acc, item) =>  acc + item.price )// Böyle yazarsam işe yaramaz çünkü bir başlangıç değeri vermem gerekiyor.

let sum = basket.reduce((acc, item) =>  acc + item.price, 0)
console.log(sum); //23500


const names = ["Tayfun", "Mehmet", "Ahmet", "Gökhan", "Tayfun" ]

// Dizide aynı isimden kaç tane var onu hesaplatalım.

let countedNames = names.reduce((allNames, name) => {
if (name in allNames) {
  allNames[name]++
}else {
  allNames[name] = 1;
}
return allNames
}, {})

console.log(countedNames); //{"Tayfun": 2, "Mehmet": 1, "Ahmet": 1, "Gökhan": 1}





// Başlangıç değeri olarak boş bir obje "{}" verdik. Çünkü objeme atıcam örneğin objemin name'i Tayfun olacak values'ide 2 olacak gibi. 

// Benim toplayıcı objemde yani allNames'de daha önce Tayfun Mehmet vs gibi isimler atanmış mı onu kontrol etmem lazım bunu in operatörü ile kontrol ettik.

// 2. Tayfun'a gelene kadar hep else blogu calışcak.


const products = [
  {
    name: "Iphone 8",
    brand: "Apple",
  }, 
  { 
    name: "Iphone 5",
    brand: "Apple",

  }, 
  {
    name: "S7",
    brand: "Samsung",
  },
  {
    name: "J50",
    brand: "Lenovo"
  }
]

let group = "brand"

let groupedProducts = products.reduce((acc, product) => {
  let key = product[group] // ilk nesne için Apple atandı.
  if(!acc[key]) { // yani burda dedik ki daha önce o markadan acc'nin içine atanmamışşsa yeni bir marka dizisi olustur.
    acc[key] = []
  }
  acc[key].push(product) // olusturulan diziye ürünü ekledik push ettik.
  return acc
}, {}) // Başlangıç değeri olarak boş bir obje

console.log(groupedProducts); // Sonuç doğru

/**************************************************************************************************************/

// parseFloat() methodu

// parseFloat() metodu, kendisine parametre olarak verilen değerlere göre verilen değerleri ondalıklı sayı haline dönüştürür ve yeni bir değişken oluşturarak geri döndürür. Artı, eksi, nokta haricinde bir değer gördüğünde işlemi durdurur. Girilen değerin veri türü ne olursa olsun number veri türüne dönüşür. Ancak girilen değer kabul ettiği değerler haricinde olursa NaN sonucunu verir.

    var sayi1	=	22;
		var sayi2	=	"22";
		var sayi3	=	-30;
		var sayi4	=	"+239";
		var sayi5	=	"Sayı 5";
		var sayi6	=	"5 6 7 8 9";
		var sayi7	=	13.27;
		
		var cikti1	=	parseFloat(sayi1);
		var cikti2	=	parseFloat(sayi2);
		var cikti3	=	parseFloat(sayi3);
		var cikti4	=	parseFloat(sayi4);
		var cikti5	=	parseFloat(sayi5);
		var cikti6	=	parseFloat(sayi6);
		var cikti7	=	parseFloat(sayi7);

// sayi1 : 22
// sayi1 veri türü : number
// cikti1 : 22
// cikti1 veri türü : number

// sayi2 : 22
// sayi2 veri türü : string
// cikti2 : 22
// cikti2 veri türü : number

// sayi3 : -30
// sayi3 veri türü : number
// cikti3 : -30
// cikti3 veri türü : number

// sayi4 : +239
// sayi4 veri türü : string
// cikti4 : 239
// cikti4 veri türü : number

// sayi5 : Sayı 5
// sayi5 veri türü : string
// cikti5 : NaN
// cikti5 veri türü : number

// sayi6 : 5 6 7 8 9
// sayi6 veri türü : string
// cikti6 : 5
// cikti6 veri türü : number

// sayi7 : 13.27
// sayi7 veri türü : number
// cikti7 : 13.27
// cikti7 veri türü : number

/**************************************************************************************************************/

// .split()

// split türkçede bölmek manasına gelir. split() metodu verilen bir stringi(metin) diziye dönüştürür ve bu diziyi döndürür. Bölme işlemini istediğimiz karaktere(seperator) göre yapabiliriz. 

// Syntax
// string.split(separator,limit)
// seperator: verilen stringi diziye bölerken hangi karakter kullanacağımızı belirttiğimiz parametredir. Opsiyonel bir parametredir. Yani boş bırakılabilir. Eğer boş bırakırsak bütün string tek bir dizi elemanı haline getirilerek dizi oluşturulur. 
// limit: Opsiyonel bir parametredir yani boş bırakılabilir. Buraya yazacağımız değer bir tamsayı olmalıdır. Bu değer kaç tane bölüm oluşturacağımızı gösterir. Bir şekilde yeni oluşturduğumuz dizinin eleman sayısını da temsil eder.

// var metin = ["Üzeyir Ali eve geldi mi?"];
// var sonuc1 = metin.split(" ");   // ["Üzeyir","Ali","eve","geldi","mi?"]
// var sonuc2 = metin.split("");    // ["Ü","z","y","i","r"," ", "A", "l", "i"," ", "e", "v", "e"," ","g","e","l","d","i", " " ,"m","i","?"]
// var sonuc3 = metin.split(" ",3); // ["Üzeyir","Ali","eve"]
// var sonuc4 = metin.split("i");   // [Üzey,r Al, eve geld, m,?]

// Dikkat: Hangi karekteri yazarsak o karakterden itibaren bölüyor mesela en üstte boşluk koyduk seperator yerine ve sadece boşluklara virgul koydu, altına bosluk koymadık o yuzden tüm bitişik olanları virgul ile ayırdı. Yani seperator yerine ne yazarsak onu baz alarak ayırıyor.

/**************************************************************************************************************/






 





      
