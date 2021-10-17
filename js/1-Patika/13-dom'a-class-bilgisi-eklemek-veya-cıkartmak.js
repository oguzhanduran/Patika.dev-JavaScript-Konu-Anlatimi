/***********CSS Class Eklemek veya Çıkarmak*************/

let greeting = document.querySelector("#greeting");

greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("new-info", "second-class", "third-class") //bu şekilde birden fazla class ekleyebiliyoruz.

greeting.classList.remove("title", "second-class", "third-classsss") //remove ile birlikte class sileriz. Condole'a baktığımızda olmadığını görebiliyoruz. olmayan bir class eklediğimizde hata vermiyor.
console.log(greeting.classList) 

