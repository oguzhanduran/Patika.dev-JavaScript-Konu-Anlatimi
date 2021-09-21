/***********JavaScript KosuL Kullanımı if else */

let username = prompt("kullanıcı adınızı giriniz")

//eger kullanıcı bilgisi varsa ekrana ismini yazdır
//eger (userName.length > 0)  { console.log(username) } değilse {console.log("bilgi yok")}
//if (userName.length > 0)  { console.log(username) } else {console.log("bilgi yok")}

if ( username.length > 0 ) {  // if kısmı her zaman doğru ise çalışır
    console.log(`Kullanıcı bilginiz ${username}`)
} else {
    console.log("bilgi yok")
}








