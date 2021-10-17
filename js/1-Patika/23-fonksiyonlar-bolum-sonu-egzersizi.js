// Fonksiyon Bölüm Sonu Egzersizi

let counter = 0
let counterDOM = document.querySelector("#counter")
let increaseDOM = document.querySelector("#increase")
let decreaseDOM = document.querySelector("#decrease")

counterDOM.innerHTML = counter // counterDOM değişkenine counter değişkenini innerHTML ile atadık.

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

// function clickEvent() {
//     console.log(this.id) 
//     if (this.id == "increase") { 
//     counterDOM.innerHTML = counter += 1 //counter'ı bir arttırarak counterDOM'a atadık.
//     } else {
//         counterDOM.innerHTML = counter -= 1
//     }
// }


// daha kısa yol

// function clickEvent() {
//     console.log(this.id)
//     this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1
// }

// daha da kısa yol 

function clickEvent() {
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1;
    counterDOM.innerHTML = counter;
}

