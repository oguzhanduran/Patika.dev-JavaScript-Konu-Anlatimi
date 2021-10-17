// Dom etkinlikleriyle Çalışmak

let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick) // burda addEventListener ile dinleme işlemi yapıyoruz "click" demekte her tıklandıgında bilgi akısını sagla demek oluyor. Click yerine mouseover yazsaydım üstüne her geldiğimde renk değiştircekti

function domClick() {
    console.log("tiklandi")
    
    console.log(this.innerHTML = "tıklandığı için bilgi ve rengi değişti") //this nereye tıklandıgını gösteriyor. //.innerHTML ise bize tıklanan yazıyı gösteriyor
    
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" // .style.color ile tıklandıktan sonra rengini değiştirdik.
    // console'da görünmesini istemiyorsak direk this.style.color = "red" şeklinde yazıp değişiklikleri ekranda görebiliriz.
}
