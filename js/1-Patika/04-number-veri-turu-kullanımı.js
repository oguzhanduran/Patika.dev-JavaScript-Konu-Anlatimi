//Number veri Turu Tanımlamak
let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log("Fiyat:", price, "KDV Oranı:", tax, "KDV Tutarı:", priceTax, "Toplam Fiyat", total)

let stringNumber = "12" //Burda 12 rakam değildir metinsel ifadedir çünkü tırnak içine alınmıstır bunu çıktının renginden anlayabiliriz.
console.log(stringNumber)
let newNumber = Number(stringNumber) //Number içerisinde constractor yani sabit tutuyor ve biz bununla birlikte içersine istediğimiz rakamsal bilgiyi gönderebiliyoruz. Ve rakamsal ifade olarak görünüyor metinsel ifade değil bunu da renginden anlayabiliriz 
console.log(newNumber)
console.log("Number Constructor Icıne Bilgi Gonderildi :", Number(117)) //Ekrana baktıgımızda 117'nin renginin metinsel olarak değil rakamsal olarak gözüktüğünü görebiliriz.


//Arttırma ve Azaltma İslemleri
let counter = 320
counter = counter + 1    //Uzun Yöntem
counter += 1
counter ++; //en kısa yol sayı arttırmak için
console.log(counter)

counter --;
counter -= 1;
console.log(counter);

counter *= 10; // Counter'ı 10 ile çarp gene counter'a ekle.
console.log(counter) 

counter /= 2;
console.log(counter)

// İslem Önceliği
console.log(2 + 3 * 10)
console.log((2 + 3) * 10)

//Mod (kalan) alma %:
//Sayı tek mi çift mi
console.log(3 % 2)
//8 ürün alan koliye tüm ürünler sığıyor mu?
console.log("Koli Kalan Ürün Örneği :", 18 % 8)

//Us alma
console.log(2 * 2 * 2 * 2)
console.log(2 ** 4)

//Asagı Yuvarlama Islemı -> Math.floor :
console.log( "Asagı Yuvarlama :", Math.floor (1.7))

//Yukarı Yuvarlama Ismlemı -> Math.ceil :
console.log( "Yukarı Yuvarlama :", Math.ceil (1.1) )

//Yakına Yuvarlama İslemi -> Math.round :
console.log( "Yakına Yuvarlama Islemi :", Math.round (1.49))

   

