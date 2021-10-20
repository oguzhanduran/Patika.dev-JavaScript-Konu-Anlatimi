// Source: Kablosuz Kedi / Youtube

//Neden Regex'e ihtiyacımız var?

// Mesela bizim bir tane kullanıcıdan veri aldığımız bir formumuz var, ve burada kullanıcı telefon numarası giriyor, e-mail adresi giriyor yada bir web sayfasının URL'sini giriyor,  bunların gerçekten bir web sayfası URL'si olup olmadıgını, geçerli bir e-mail adresi olup olmadıgını yada telefon numarası olup olmadığını kontrol etmek istiyorsunuz. Veya telefon numarasındaki alan kodunu operatoru ve telefon numarasının kendisini ayrı ayrı gruplara alıp almakta istiyor olabiliriz

// Yada bizim bir veri setimiz var ve içersinde 10000 tane satır olan bir metin belgesi var ve metin belgesinin içersinde söyle bir formatımız var: URL, title şeklinde düzenli olmayan bir veri seti sağlanmıs. Bunları yöneticiniz düzenlemenizi istiyor. Bunu düzenlemek için Regex'i kullanıyoruz. Yani Regex düzenli olmayan ifadeleri düzenli bir şekilde alabilmemizi sağlıyor.

// Regex bütün programlama dillerinde aynıdır. Sadece işlenisi ve işleyişi dile göre değişiyor.

// Mesela JavaScriptte validation'da (doğrulamada) kullanabiliriz yani geçerli mi geçersiz mi? Benim verdiğim regex'e göre bu metin dogru bir yapıda mı değil mi. Diğeri ise regexteki yazdığım cümleye göre eşleşmeleri bana teker teker ver kısmı işte bu 2 aksiyon dilden dile değişir.

//*******************************************************************************************************************/

// g Global Flag ve Notasyonlar 

// + istenen karekterleri birleşik halde seçer. Mesela o o var bunu birleşik seçer ve oo şeklinde olur gibi düşünebiliriz.

// ? opsiyonelliği belirtir. mesela hem burda hemde burada'yı secmek istersek bura?da deriz a opsiyonel anlamına gelir.

// * opsiyonel olarak bunu kontrol et ama bunun devamı varsa bunu da grup olarak bana getir + ile ? birleşimi gibi düşünebiliriz

// . nokta tek bir karekter secmeye yarar. Yani bosluklar dahil butun karekterleri teker teker secer.

// .+ hepsini tek tek sec ve birlestir gibi dusunebiliriz tüm yazıyı tek bir secim haline getirir

// .A. dersek A'nın karekteri olan yerin A ile birlikte noktalar sayesinde A karekterinin bir satır sagını ve solunu secer

// case insensitive flag'i küçük büyük harf ayrımı yapmamasını saglıyor.

// global flag'i bütün yazıyı dikkate almasını sağlıyor global olmadıgında yazının eşlesen ilk kısmını alıyor.

// "." ile ilgili bilmemiz gereken en önemli sey yeni satıra gecerse gecersız kalır.

// "\w" herhangi bir kelime karekterini bana tek tek getirir. Underscore(alttire) dahil.

// "\W" Alfanümerik veya underscore olmayan herseyi tek tek alır yukardakinin tam tersi.

// "\s" Sadece boslukları alır.

// "\S" Bosluk (space) olmayan her seyi tek tek alır.(Etiketler içindeki attribute'lar arasındaki boslukları görmezden gelebiliriz)

// "\d" Sadece sayıları(digit) tek tek secmek istersek kullanırız.

// "\D" Sayı dısındaki her seyi tek tek secmek için kullanırız.

//*******************************************************************************************************************/

// Aralık Belirleme

// tek tek sectiğimiz butun ifadeleri grup olarak secmek istersek yanına bir + koyarız ve grup olarak secebiliriz. Yani + istediğimiz sarta uyan ifadeleri gruplayarak bana getirir.

//{} aralık belirlemek için kullanılır. ".{2}" bu herhangi bir karekter bana ikili gruplar halinde gelsin demek. 5 yazsaydım süslü parantezin içine 5'li alırdı. 

//.{2,4} en az ikili olacak sekilde dörtlü al demek. yani mesela 1234456789 direk 4'lü al deseydik sondaki 89 bosta kalacaktı ama boyle dediğimizde en sondaki 89'uda seciyor. Ama sadece 8 olsaydı sonda almayacaktı cunku en az 2'li olsun dedik

//.{3,} En az 3 karekter olmak üzere sınırsız grupla yani 3 karekterden fazla olan butun satırları tek grup halinde grupladı.

//*******************************************************************************************************************/

// Karekter Gruplama

//[fchtFC5?_]at diyerek fat, cat, hat, Fat, Cat, 5at, ?at, _at'yi secebiliriz. at ortak olugu için onu dısarı yazdık farklı ortak olmayan ifadeleri ise koseli parantez içine yazdık.


//[a-zA-Z1-9?]at  a-z ---> a'dan z'ye butun kucuk harflı karekterler dahil. A-Z ---> A'dan Z'ye butun buyuk harflı karekterler dahil. 1-9 ---> 1'den 9'a butun sayılar dahil. ?---> basında soru isareti olabilir yani ?at için bu.