//  hata yönetimi için try ve catch Kullanımı 

// mesela ekranda hatalı bir işlem yaptım, hatalı işlemlerden sonrada çok düzgün işlemler yaptım

// try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.

// try {
//     //Çalıştırılacak kodlar
//   }catch(hata) {
//     //Hata yakalandığında çalışacak kodlar
//   }finally {
//     //try tamamlandıktan sonra hata olsada olmasada çalışacak olan kodlar.
//   }


let products;

try {
    products.forEach(item => console.log(item));
} catch (error) {
console.log("error :", error) //consolda hatamızı göreceğiz.

} //bu önce kodu dene eğer bir hata yakalarsanda hatayı bana bildir anlamına gelir


console.log("hata yönetimi düzgün çalışıyor")

let info = "kodluyoruz"
console.log(info)

// Eğer bir blokta bir hata varsa ve biz bu bloktaki hatay yönetmediysek, artık daha aşağı inemeyiz daha aşağıdaki işlemleri göremeyiz console'da baktığımızda item array'ını tanımlamadığımız için hata veriyor ve bu yüzden aşağıdaki işlemleri göremiyoruz.

// Bu yüzden bizim yapmamız gereken şey bir hata yönetimi belirlemek

// Bu şekilde gene dışardan alacağımız bilgiler varsa try catch yapısının içine alıp hata yönetimi yapabiliriz