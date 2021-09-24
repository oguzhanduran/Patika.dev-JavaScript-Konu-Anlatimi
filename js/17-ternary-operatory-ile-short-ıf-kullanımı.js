/************** Ternary Operatoru-Ile-Short-ıf-Kullanımı***************/

//eğer kullanıcı adın varsa yazdır yoksa kullanıcı bilginiz bulunamadı yaz.

// `` -> template literal

let userName = prompt("kullanıcı bilginizi yazınız")
let info = document.querySelector("#info")

// ternary kullanımı
// kosul ? dogruysa : yanlıssa

info.innerHTML = `${ userName.length > 0 ? userName : "kullanıcı adı bulunamadı :( "} `