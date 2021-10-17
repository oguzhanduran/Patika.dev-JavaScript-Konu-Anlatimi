/***********Çoklu Koşullarla Çalışmak************/

let userName = prompt("Kullanıcı Adınız:0")
let age = prompt("yaşınız")
let info = document.querySelector("#info")

if (userName && age >= 18) {
    info.innerHTML = "Ehliyet Alabilirsiniz"
} else if (!userName) {
    info.innerHTML = "kullanıcı adınız yok"
}else if ( !(age >= 18)) {
    info.innerHTML = "yas bilginiz yok veya 18 yaşından kücüksünüz"
}