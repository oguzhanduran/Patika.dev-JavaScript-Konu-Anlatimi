// Promise

    // Diyelim ki bir hamburgerciye gittiniz ve kasada siparişinizi verdiniz. Kasiyer de size siparişinizi hazırladıklarında haber vermek üzere bir elektronik alet teslim etti. Şu anda hamburger bizim için gelecekte elde edebileceğimiz bir değer. Elimizdeki aygıt da bu değere ulaşmamız için müessesenin bize verdiği sözün (işte promise) bir göstergesi. Aygıt bildirim alıncaya kadar bekleme (pending) durumundadır. Bildirim geldiğinde ise ya hamburgerimiz başarılı (resolved) bir şekilde hazırlanmıştır, ya da beklenenin dışına çıkarak başarısız (rejected) olmuştur. Başarılı durumda afiyetle yemeğimize yumuluruz tabii ki. Başarısız durum biraz daha nahoş olacaktır. Kasiyerle kavga ederek veya yeniden sipariş vererek hatalı durumu yönetmemiz (error handling) gerekir.

// Callback mi döver, Promise mi?

// Öncelikle hatırlayalım callback neydi diye. Callback, en basit haliyle herhangi bir fonksiyona parametre olarak verdiğimiz ve sonra geri çağıracağımız fonksiyonlara denir. İstenilen değere ulaştığında veya işlem sonlandığında görevini yerine getirir.
    
// Buradaki sıkıntılı nokta aslında, callback’imizi doğru ellere mi teslim ediyoruz sorusu. Emanete hıyanet ederler mi, callback’imizi çağırmadan yaban ellerde (başka bir API fonksiyonunda mesela) bırakırlar mı? Şakası bir yana callback yapısıyla ilgili bir güven sorunu olduğu aşikar. Güvenemememizin başlıca sebepleri şunlar:

// Callback’in beklenenden erken çağırılması
// Callback’in hiç çağırılmaması
// Callback’in beklenilenden az veya çok çağırılması
// Gerekli parametreleri doğru bir şekilde alamaması
// Hataların yutulması

// Promise, callback’lerin sıkıntılı yönlerini düzeltmek amacıyla önerilmiş bir yapıdır. Sözdiziminden bahsettiğimde daha net akıllarda oturacaktır ancak şimdiden avantajlarından bahsetmekte fayda var. Şöyle ki:

// Promise istenilen görevi yerine getirdiğinde değeri değişmez (immutable)
// Sadece bir kere başarıya (resolved) ulaşır, veya başarısız (rejected) olur.
// Öngörülemeyen hatalar otomatik olarak Promise’i başarısız (rejected) sonuca götürür. Bu da hataları kontrol etme noktasında faydalıdır.
// Yapısı gereği, gelecekteki bir değerin göstergesi olduğundan daha güvenilirdir.

// En basitinden bir promise örneği:

const sozVerdik = new Promise(function(resolve, reject){
    if (herseyYolunda) {
      resolve('İşlem tamam!');
    } else {
      reject('Bir sıkıntı var...');
    }
  })
  
  sozVerdik.then(function(cevap){
    console.log(cevap) // 'İşlem tamam!' yazısını basar
  }).catch(function(hata){
    console.log(hata) // 'Bir sıkıntı var...' yazısını basar
  })

//   Promise’leri new öneki ile tanımlıyoruz.

// Başarılı (resolve) ve başarısız (reject) durumlarda çağıralacak iki fonksiyon ile birlikte oluşturuyoruz. (Sıralamayı değiştirmemek kaydıyla bu iki fonksiyona farklı isimler de verebilirsiniz ancak genelde bu isimler tercih edilmektedir.)

// Promise’leri bir değişkene atayabiliriz. (Örnekteki sozVerdik değişkeni gibi.)

// Promise beklenilen işlemi gerçekleştirdikten sonra yapılacak adımlar için .then() fonksiyonu çağırılır. İçerisindeki fonksiyonun parametresi resolve() ile gönderilen parametredir.

// Eğer istek dahilinde reject() çağırıldığında veya öngörülemeyen bir hata sonucu promise başarısız olduğunda .then() fonksiyonu es geçilerek, .catch() içerisindeki fonksiyon çağırılır ve hatalı durumda yapılacak adımlar izlenir.

// Promise Zincirleri
// Zincir diyerek kastettiğim şu: biri diğerini bekleyen asenkron işlemlerin arka arkaya çalıştırılması. Örneğin, cep telefonunda kullandığımız bir uygulamaya güncelleme geldiğinde, önce güncellemenin tamamlanması bekleriz, ardından uygulamadan içerik talep edebiliriz. Promise yapısı gereği asenkrondur ve uygulamadaki bekleyen diğer kodların çalışmasını bekletmez. Bu yüzden sıralı asenkron işlemlerin birbirini beklemesi için promise zinciri diyebileceğimiz yapılar oluşturmamız gerekir.

asenkronIslem()
  .then(sonuc => {
    return baskaAsenkronIslem(sonuc);
  })
  .then(zincirSonuc => {
    return zincirSonuc.json();
  })
  .catch(hata => {
    console.log(hata);
  });

//   Yukarıdaki kod parçacığı üzerinden promise zincilerine bir bakalım:

// Birden fazla .then() arka arkaya eklenerek oluşturulur.

// Zinciri başlatan bir promise olduğu gibi .then() içindeki fonksiyonların dönüş değeri de promise olur. return değeri promise’leştirilerek zincirin diğer halkasına aktarılır. Bu yüzden zincirin her bir halkasını promise okuyan ve promise çıktısı oluşturan bir yapı olarak düşünebiliriz.

// Hataların yakalanması için tek bir .catch() yeterlidir. Zincir içerisinde ne zaman başarısız (rejected) bir promise veya beklenmedik bir hata oluşursa, sonrasındaki .then() halkaları atlanılarak .catch() içerisindeki fonksiyon çalışır. asenkronIslem, baskaAsenkronIslem, birinci veya ikinci .then()’in hatalı sonuçlanması konsola hata mesajının basılması ile sonuçlanır.

// Promise metodları
// Promise nesnesinin kendine ait 4 tane metodu bulunmaktadır. Bunlar yeni bir promise (new Promise()) oluşturmadan kullanılabilir. Açıklamadan önce, örnek kullanımlarına bakalım:

// Anında başarıya ulaşan(resolve) promise nesnesi
const basarili = Promise.resolve(42);

// Anında başarısız olan(reject) promise nesnesi
const basarisiz = Promise.reject('Tüh ya');

// Promise'lerden oluşan bir dizinin gelecekteki değerlerinin 
// hepsinin başarılı sonuçlanması için oluşturulan promise nesnesi 
const tumIslerBitti = Promise.all([promise1, promise2, ...]);

// Promise dizisi içinden en hızlı başarılı/başarısız 
// olan değeri tutan promise nesnesi
const enHizliYapan = Promise.race(promiseDizisi)

// Promise.resolve(): Verilen değeri, başarılı sonuçlanmış promise haline getirir. .then() içindeki fonksiyonların dönüş değeri kendiliğinden promise haline getirilir demiştik. Bu durumu `return Promise.resolve(donusDegeri)` şeklinde de düşünebiliriz.

// Promise.reject(): Verilen değer, hata mesajı olacak şekilde başarısız(rejected) olmuş bir promise nesnesi döndürür.

// Promise.all(): Bu metodun kullanılma amacını, paralel olarak gerçekleştirilen asenkron işlemlerin hepsinin bitip, bitmediği anlamak olarak tanımlayabiliriz. Birbirini beklemeyen asenkron işlemleri (promise’leri) zincirlersek toplam gerçekleşme süresini uzatmış oluruz. Hem bekleyen tüm işlemlerin bittiğinden emin olmak hem de bunu promise kullanarak yapabilmek Promise.all() ile mümkün. Dizideki tüm promise’ler başarılı(resolved) olduğunda tuttukları değerler de dizi halinde kullanıcıya döner. Eğer dizideki herhangi bir promise başarısız(rejected) olursa, Promise.all() sonucu oluşan promise de başarısız(rejected) olur.

// Promise.race(): Bu metod ise adından anlaşılacağı gibi dizi içerisindeki promise’lerin yarıştırılmasıdır. Galip olan, yani en hızlı sonuca ulaşan promise dönüş değeri olarak alınır. Yalnız başarılı(resolved) veya başarısız (rejected) sonuçlanması sonucu etkilemez. Gelecekteki vaat edilen değerine (istenilen değer veya hata mesajı) ilk ulaşan promise yarışın kazananı olur.

// Async/Await
// Öncelikle bu özellik ES7 kapsamında olup, promise’e nazaran tarayıcı desteği daha azdır. Eğer NodeJS 8 üstü kullanıyorsanız, ya da transpiler’a (bkz: babel) güvenerek bu özelliği denerim diyorsanız, anlatacaklarıma kulak verin.

// Async/await bize neler katacak? Maddelerimiz şöyle:
// Kod daha okunaklı hale gelecek
// Asenkron işlemlerin gerçekleşme sırasını takip etmek kolaylaşacak
// Promise zincirleri için birçok .then() yazmak gerekmeyecek
// Diğer programlama dillerinden aşina olunan try-catch yapısı kullanılabilecek

//-------------------------------------------------------------------------------------------------------------------

// Promise 2. Kaynak

// Promise: “Söz vermek”
// Promise kelime manasıyla “söz vermek” olarak geçiyor. Yani biz bunu kullandığımızda fonksiyonumuz bize bir söz veriyor. Ve mutlaka bize işin sonucunu bildiriyor. Yani başarılı olsa da başarısız durumunda kalsa da bize bir çıktı vermek zorunda. Şimdi çalışma mantığına bakalım.

// then ya da cath
// Javascript/typescript ile uğraşıyorsanız şu şekilde çalışan fonksiyonlara denk geleceksiniz mutlaka. Pseudo kod şöyle

// myFunction()
// .then(res=>console.log("başarılı");).catch(err=>console.log("başarısız");)
// Yani fonksiyon çalışıyor ve eğer belirtilen koşullara uygun olarak işlemler gerçekleşti ise then kısmına eğer bir hata varsa catch kısmına düşüyor.

function checkName(name){
  return new Promise((resolve, reject)=>{
      if(name === "kodlib"){
          resolve(name)
      } else{
          reject("Kullanıcı adınız yanlış.")
      }
  })
}
// Şimdi burayı açıklayalım. İlk olarak checkName adında bir fonksiyon oluşturduk ve input üzerinden gelen değeri aldık buraya kadar olan kısım Promise ile alakalı değil.
// Sonra bir Promise return ediyoruz ve 2 argüman alıyor birisi resolve diğeri reject.

// resolve “çözmek” ve reject “reddetmek” mânalarına geliyor. Yani eğer isim değeri “kodlib”e eşitse resolve ile Promise’in başarılı olduğunu, eğer “kodlib”e eşit değilse reject ile Promise reddediyoruz yani bir hata fırlatmış oluyoruz.

// Neden Promise kullanmalıyım?

// Bunun hem çok kısa hem çok uzun cevabı olabilir. Ama şöyle düşünelim. Kullanıcı adı kontrolü yaptınız daha sonra giriş saatini veritabanına ekleyeceksiniz daha sonra kullanıcıya ait bilgileri getireceksiniz diyelim. Bunların her birini bir öncekinin “resolve” olduğu yerde yaparsak bir problem olmayacaktır. Çünkü eğer kullanıcı adı yanlışsa diğer kısımlara hiç girilmeyecek bile.
// Diyelim kullanıcı adını kontrol ettikten sonra veritabanında sıkıntı oluştu: kullanıcı adı doğru ama veritabanına giriş saatini eklerken hata oluşacak ve kullanıcıya ait bilgileri getirmeye hiç çalışmayacak. Büyük çapta bir projelerde sadece if else yetersiz kalacaktır.


const sozVerdik = new Promise(function(resolve, reject){
    const islem = true;
      if (islem) {
        resolve('İşlem tamam!');
      } else {
        reject('Bir sıkıntı var...');
      }
    })
    
    sozVerdik
    .then((cevap) => console.log(cevap))
    .catch((hata) => console.log(hata)) // hata gelince catch yakalıyor cevap olumlu gelince catch

    // Başka şekilde 

    const sozVerdik = new Promise(function(resolve, reject){
        const islem = true;
          if (islem) {
            resolve('İşlem tamam!');
          } else {
            reject('Bir sıkıntı var...');
          }
        })
        
        sozVerdik.then(function(cevap){
          console.log(cevap) // 'İşlem tamam!' yazısını basar
        }).catch(function(hata){
          console.log(hata) // 'Bir sıkıntı var...' yazısını basar
        })
      
        // const islem = true; ise 'İşlem tamam!' yazısını basar, const islem = false; ise 'Bir sıkıntı var...' yazısını basar. Burdaki islem değişkenini backendden gelen cevap olarak düsünebiliriz.