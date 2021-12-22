// Callbacks

// Bir fonksiyonun çalışması tamamlandıktan sonra, başka bir fonksiyonun çalışmasını sağlayan fonksiyonlar callback function olarak adlandırılır. Şöyle düşünün bir web sitesi yapıyorsunuz varsayın. Önce front end developerlar çalışmasını bitirir ardından back end developerlar çalışmaya başlar. Bu bir callback işlemidir.

// Bir Callback fonksiyonu başka bir fonksiyona verilen bir parametre şeklindeki fonksiyondur. Geri çağırma fonksiyonu ikinci parametrenin içinde çağrılır veya çalıştırılır.

// Her komut satırının süresi aynı değildir, Bazı komutların çalışma süresi daha uzun vakit alabilir. Uzun calışma süresine sahip komutlar sıradaki diğer komutları bekleterek kodların çalışma süresini uzatır.

// Asengron programlamada komutlar parçalanarak işlem yapılır, yazılan komutlar işlem süresine göre çalışır ve ona göre çıktı verir. Yani asengron programlamada 2 farklı komut aynı anda çalışabilir.

// Neden Callback fonksiyonlara ihtiyacımız var?

// JavaScript olaya dayalı bir dildir. Yani Javascriptte bir butona tıklanması gibi bir olayın gerçekleşmesinin beklenip sonra komutlar çalışssaydı sitemizde aksaklıklar olurdu. Bu da Javascript'in diğer etkinlikleri dinlerken yürütülmeye devam edeceği (Asengron Çalışma)anlamına gelir.

// Senkron Çalışmaya bir örnek

function first(){
    console.log(1);
  }
  function second(){
    console.log(2);
  }
  first();
  second(); 
// Çıktı 
// 1
// 2  

function first() {
    setTimeout(function () {
        alert(1);
    }, 500);
}

function second() {
    alert(2);
}

first();
second();

// çıktı
// 2
// 1

//Önce first'ü çalıştırmamıza rağmen 0.5 ms geciktirdiğimiz için önce ekranda 2 sonra 1 gözükür. Bu javascript'in callback özelliğinden dolayıdır.

// Peki biz önce 1'i sonra 2'yi görmek istersek ne yapıcaz yani 0.5s sonra ekran 1 gözükecek sonrasında 2 gözükecek iste burda callback fonksiyon devreye giriyor.

function first(callback) {
    setTimeout(
        function () { 
              alert(1);
              callback() 
        }, 500); 
  } 
  
  function second() { 
      alert(2); 
  } 
  
  first(second); 
  
  // çıktı 
  // 1 
  // 2

  // Burda second fonksiyonunu callback fonksiyon olarak first fonksiyonun içinde çalıştırdık ve çıktı önce 1 sonra 2 oldu.



function cıkar (deger) { 
    console.log(deger - 5)
    }
    
function hesapla(num1, num2, callback) {
      let toplam= num1 + num2;
      callback(toplam);
    }
    
    hesapla (5, 3, cıkar) // 3

    // Burda hesapla fonksiyonu çalıştıktan sonra cıkar fonksiyonunu callback fonksiyonunu kullanarak başardık. Yani çıkar fonksiyonunun içine hesapla fonksiyonundan aldığımız toplam değerini atadık.

    // callback bir fonksiyona gönderdiğimiz parametre olan fonksiyonu istediğimiz bir noktasında geri döndüren fonksiyonlar.


    // Callback'e gerçek hayattan örnek:

    // Örneğin büyük bir dosyayı internetten indirirken diğer işlemlerinde aksamamasını isteyelim. Bir başka değile indirme işlemi diğer işlemleri engellemesin veya durdurmasın. İndirme işleminin arka planda sürmesini işlem bitince de bir fonksiyonu çağırmak istediğimizde asengron çalışma modu uygulanmalıdır. Arka planda bir işlem yürürken diğer talepleri kabul etmeli ve sistemi bloke etmemelidir. Yani Callback'i tanımlayarak dosya okuma işleminin bittiği sinyalini veya diğer işlemlere geçiş sinyalini sağlayabiliriz. 