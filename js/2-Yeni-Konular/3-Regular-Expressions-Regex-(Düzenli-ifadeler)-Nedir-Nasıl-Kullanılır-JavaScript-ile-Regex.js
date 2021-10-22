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


//[a-zA-Z1-9?]at  a-z ---> Köşeli parantez bizim bir aralık belirlememizi sağlar, a'dan z'ye butun kucuk harflı karekterler dahil. A-Z ---> A'dan Z'ye butun buyuk harflı karekterler dahil. 1-9 ---> 0'dan 9'a butun sayılar dahil. ?---> basında soru isareti olabilir yani ?at için bu.

// gray ve grey ikisini de secmek için gra?e?y a ve e optional demis olduk böylece. Ama daha ıyı yontem gr[ae]y

//reeeee şeklinde bir secım için re+ rererere seklinde bir secim icin (re)+

// ^S satır basındaki ifade büyük S ise sec diyoruz ^ satır basını secmek iCin kullanılır. ^(Sokak) dersek satır basında Sokak yazısının olup olmadıgına bakar. Buyuk kucuk harf onemlidir.

// Multiline flag'i ile birden cok satır varsa birden cok satırda secim yapar yani biraz onceki ^S için sadece ilk satıra bakmaz tum satırlara bakar.

// Sonunda bilmem ne varsa demek için $ kullanılır. k$ demek sonunda k varsa sec anlamına gelir veya (sokak)$ sonunda sokak kelimesi varsa sec.

// Sonunda nokta olup olmadıgını anlamak istiyorsak .$ yapamayız Neden? Yukardan hatırlayalım nokta herhangi bir karekteri sec demekti yani biz bunu secersek sondaki tüm karekterleri sec demis ouyoruz yani sadece satırın sonundaki karekter olması yeterli.

// Peki sondaki noktayı secmek için ne yapıcaz \.$ sondaki noktayı secer.

//*******************************************************************************************************************/

// (Look Behind)x(Look Ahead)

// (basında)x(sonunda) ---> bazen x'i secmek için basındaki ifadeyi bazen de sonundaki ifadeyi dikkate alarak x'i seceriz

// Pozitif Look Ahead

// Look ahead ?= şeklinde kullanılır. .(?=u) nokta herhangi bir karekter sec anlamında. Yani bunun anlamı bir karekter sec ve karekterinden hemen sonra u olsun demek. Hemen sonra u olan karekterleri secer. Bana bosluk vs getirme sadece alfenumerik karekterleri getir demek istersem. \w(?=u) demeliyiz.

// Negatif Look Ahead 

// Yani devamında u olmayanı bana sec demek istersem = yerine ! kullanacam yani \w(?!u) gibi düsünebiliriz. Burda devamında u varsa secmeyecek diğerlerini sececek.

// Look Behind

// Pozitif Look Behind

// look behind için  ?<= kullanılır. (?<=q). bu sececegim karekterin oncesinde q varsa sec anlamına gelir.

// Negatif Look Behind

// ?<! kullanılır.  (?<!q). öncesinde q olan karekteri secme gerisini sec demektir.

// (.*) her seyi al demektir.

// (?<=src"=").*(?!").  ---> src"="url" url'yi secer. Aslındaki burdaki .* formuldeki x yerine geciyor.

// Grup olusturmak için parantez () kullanılır.
