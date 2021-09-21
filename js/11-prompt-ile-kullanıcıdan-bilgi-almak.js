/*******Prompt ile Kullanıcıdan Bilgi Almak*************/



let fullName = prompt("Boyunuzu giriniz", "")

let greeting = document.querySelector("#greeting") //innerHTML ile backtick içerşinde yazdırmadan önce yazdırmak veya değişiklik yapmak istediğim id'me querySelector ile ulaşıp onu greeting değişkenine tanımlıyorum.

greeting.innerHTML = `${greeting.innerHTML}  <small style="color:red"> ${fullName} </small>` 


