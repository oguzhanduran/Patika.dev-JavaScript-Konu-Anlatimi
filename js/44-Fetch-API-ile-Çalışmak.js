// Fetch API ile Çalışmak

// Bizim fetch API ile yapabildiğimiz şey veri sunucudan geldikten sonra işlem yapabilmek, peki bu ne demek?
// Mesela, bir yere gittik ve sipariş vermek istiyoruz, siparişi verdiğimiz zaman siparişi verdiğimiz kişi kasada siparişimizi aldı, ve aldıktan sonra da biz kasa da beklemeye devam edersek, aslında bir sonraki kişinin siparişinin verilmesini engellemiş oluruz. Belki diğer kişinim işlemi çok daha hızlı, öyleyse onun işleminin çok daha hızlı gerçekleşmesi gerekebilir.

// Biz kasada işlem yaptık ne zaman kasada sipariş ettiğimiz ürünleri almak isteriz, ürünlerimiz hazırlandıktan sonra gidip almak isteriz, yani Fetch ile birlikte yeni gelen kavramlardan bir tanesi de evet ben bunun sözünü verdim, şimdi bunu denicem ve her sey yolundaysa da sana bu bilgileri ulastırıcam diye yapı kurguluyor olması.

// Bunun için aslında fetch'in çalışması için bizim gördüğümüz sürekli bir sunucuya gidip o sunucunun içersinden veri almak 


// JSON DOSYASI HAKKINDA BILGILER
// userName: şeklinde yazamıyoruz bu şekilde bir yazım tarzı yok. Bunun yerine çift turnak içinde yazmamız lazım
// true false bilgisini tırnak içinde vermem gerekmiyor
// json notation'da en sonuncu elemana virgül koyamıyoruz



//JSON DOSYADAN VERİ ÇEKMEK
fetch("data/settings.json").then(
    response => {
    return response.json()
    }
).then(responseJson => {
    console.log(responseJson.userName) //json dosyası içindeki userName bilgisine ulaşabilirim responseJson.userName ile
    console.log(responseJson) 
})

let userlistDOM = document.querySelector("#userList")

//API UZERINDEN VERI CEKMEK
//farklı bir siteden jsonplaceholder yazarak bulabiliriz post çekelim
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    //  console.log(responseJson)
    responseJson.forEach(item => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = item.title
        userlistDOM.appendChild(liDOM) // Bu şekilde item bilgilerini ekranda gördük.
    }) //tüm itemları tek tek yazdırdık
    })  


