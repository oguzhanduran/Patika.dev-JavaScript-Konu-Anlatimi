
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit) 

function formSubmit(event) {
    event.preventDefault() // Default işlemi engelledik.
    console.log("Islem Gerçeklesti")
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value) //daha önce girdiler için prompt kullanıyorduk fakat web yapısı için promptlar çok mantıklı değil onun yerine input kullanmamız gerekiyor. input değerini alıp console'a yazdırmak için .value kullandım.

    localStorage.setItem("score", scoreInputDOM.value ) // console.log'da yazdırdığım bilgiyi local storage da depoladım.
}


//Bizim bilmememiz gereken en önemli nokta formların mutkaka ve mutlaka bir input ve input'un içindede name bilgisinin olması gerektiği aksi taktirde input'u alamayız.

//sırada bu verileri bir listeye ekleyip bir listenin içersinde tutmaya çalışcaz.

