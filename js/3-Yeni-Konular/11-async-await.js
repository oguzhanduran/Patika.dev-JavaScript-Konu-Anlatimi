// axios'u kullanmak için önce npm install axios diyoruz

import axios from "axios"; // şeklinde axios'u getirebiliriz.

function ulkeGetir() {
    axios.get("veriyi alacağımız link adresi") // axios.get(request) bir promis yapısıdır.
    .then(response => console.log(response.data[0])) // promis olduğunu bildiğimize göre .then ve .catch ekleyebiliriz buna burda gelen veriyi console'da yazdırdık. // console.log(response.data[0]) diyerek data altbalğının altındaki ilk veriyi aldık.
    .catch() 
}

ulkeGetir()

//--------------------------------

// Aynı işlemi .then ve .catch ile yapmak istemiyorsak async/await  devreye giriyor

import axios from "axios"; 

async function ulkeGetir() {
    const ulkeListesi = await axios.get("veriyi alacağımız link adresi");
    console.log(ulkeListesi.data[0]);
}

ulkeGetir() // await fonksiyonlar sadece asengron fonksiyonlarda çalışır yani await kullanacaksak fonksiyonun başına async'yi eklemeliyiz.

// Birbiri içersinde çok fazla .then .catch yapmak istemiyorsak o durumlarda await kelimesini kullanabiliriz. Bu tercih meselesi hangisi hoşumuza gidiyorsa onu kullanabiliriz. 