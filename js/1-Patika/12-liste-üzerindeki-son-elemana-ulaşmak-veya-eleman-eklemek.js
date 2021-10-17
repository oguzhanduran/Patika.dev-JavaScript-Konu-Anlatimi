/************Liste İçersindeki Son Elemana Ulaşmak veya Eleman Eklemek**************/

let lastChild = document.querySelector("ul#list>li:last-child ")
lastChild.innerHTML = "son öğe değişti"

let firstChild = document.querySelector("ul#list>li:first-child ")
firstChild.innerHTML = "ilk öğe değişti"

//Yeni bir öğe eklemek için

let ulDOM = document.querySelector("ul#list") //listeye ulaştık ve ulaştığımız listeyi ulDOM öğesinin içine atadık.
let liDOM = document.createElement ("li") // liDOM öğesini oluşturup li elementini yaratacağımızı bildirdik 

liDOM.innerHTML = "kendi oluşturduğumuz öğe" //li elementinin içine ne yazacağımızı bildirdik.

// ulDOM.append(liDOM) //append'i kullanarak ulDOM listesinin içine oluşturduğumuz liDOM öğesini listenin en sonuna yerleştirdik.

ulDOM.prepend(liDOM) // prepend'i kullanarak listenin başına ekledik. 

//mesela kullanıcıya bir to-do list yapalım to-do liste tıkladıkça bunları ekleyebilelelim.