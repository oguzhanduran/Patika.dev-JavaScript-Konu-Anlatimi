// Local Storage Bölüm Egzersizi

let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0 // bu sekilde sayfa yenilenince 0 gelir
// asagıda set ettigimiz counter key'inin içindeki bilgiyi almak istiyorum. 
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter // counterDOM değişkenine counter değişkenini innerHTML ile atadık.

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    
    this.id == "increase" ? counter += 1 : counter -= 1;
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter;
}

//counter bilgisini storage içinde tutacağız ve storage içinden bu bilgiyi almaya çalışıcaz.