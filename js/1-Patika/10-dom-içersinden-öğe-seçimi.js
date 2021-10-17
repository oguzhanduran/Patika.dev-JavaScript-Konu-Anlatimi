
/*************** DOM İçersinden Öğe Seçimi ve Düzenleme İşlemleri *********************/


let h2 = document.getElementsByTagName("h2")
console.log(h2.title.innerHTML) //Bu kullanımda Hello World yazısını görmek için bu işlemleri yapmamız lazım bu uzun bir yöntem ve bizim işimize yaramaz.

// let title = document.getElementById("title");
// console.log(title.innerHTML = "Deneme") //hem eşitleme yaptık hem de yazdırma çok iyi bir kullanım değil.


//getElementById yöntemi

let title = document.getElementById("title")
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)   


//querySelector Yöntemi

// let link = document.querySelector("ul#list>li>a") //querySelector bir tane seçer birden fazla olsa da farketmez. querySelectorAll ise hepsini birden seçer.

// console.log(link.innerHTML) // istediğimiz bilgiye ulaştık link bilgisi diye.

//Eşitleme yapalım gene

let link = document.querySelector("ul#list>li>a")
link.innerHTML += " değişti"                 //"link bilgisi değişti" //console.log ile yazdırmaya gerek yok çünkü zaten ekranda görmek istiyoruz consolda değil. += ile birlikte değişti yazarsam varsayılan yazının yanına değiştiyi ekler    
link.style.color = "red"
link.classList.add("btn")

let yeniLink = document.querySelector("#kodluyoruz")
yeniLink.innerHTML += "  Mubarek!"
