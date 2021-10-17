/***********************Template Literals Kullanımı***********************/


let username = "hakan"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
//console.log("Merhaba ", username, "email adresin :", email) //Console.log'da yazan yazılar ekranda gözükmez bunları consola test etmek için yazıyoruz. İlerde biz bunları HTML dökümanını içine JavaScript ile birlikte yazıcaz.
// Yukaroda console log ile yazdığımız yazı kısaydı biz uzun bir yazı yazmak isteyebiliriz bunu yazarken zorlanabiliriz bu zorluğu aşmak için Template Literals yöntemini kullanacağız.

let info = `
Merhaba ${username} sitemize hoşgeldin 
mail adresin: ${email}

mail adresinin uzunluğu ${email.length}

borcunuz ${( 2 + 3 ) * 10 } TL
günün saat bilgisi ${ new Date().getHours( )}  

kısa isminiz : ${username[0]}.


`

//${} dolar süslü parantezin içinde fonksiyon kullanabiliyorum, bir değişkenin ismini yazabilirim, hesaplama yaptırtabilirim, short if kullanımı yaptırtabilirim içersinde yani birçok şeyi template literals sayesinde yapabiliriz. İlk bilmem gereken sey dolar ve süslü parantezin içersinde değişkenleri tanımlayabiliyorum.

//su an back tick içine alarak birden fazla satırı rahatlıkla yazabiliyoruz normalde birden fazla satırı bu sekilde yazamıyorduk örneğın DOMAIN kısmındaki kodluyoruz.org yazısının hemen yanından alta inmek için enter'a bastıgımızda org'un g yazısı kırmızılasıyor.



console.log(info)


const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }
  const bookTable = `
        <table border>
     <tbody>
       <tr>
        <td>Kitap</td> 
        <td>kitap.ad</td>
      </tr>
    <tr>
        <td>Yazar</td>+
        <td>kitap.yazar</td>
      </tr>
        <tr>
        <td>Tarih</td>
        <td>kitap.tarih</td>
      </tr>
    </tbody>
  </table> 
  ` ;
  document.body.innerHTML = bookTable