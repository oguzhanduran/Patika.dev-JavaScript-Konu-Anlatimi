//EVENTLER

// Eventler html sayfamızın direk içersinde direk uygulanabilen olaylardır. Ve bu olaylar sayesinde biz JavaScriptteki belli kodlarımızı çalıştırabiliriz

function lütfenTikla() {
    alert("Butona tiklandi...")
}

function tıkla(element) {
    element.innerHTML = "Butona Tiklandi"
}


//Butonumuzun bütün bilgilerini this diyerek tıkla'nın parametresine gönderdik ve bu parametreyede element ismi verdik. element üzerinde yapacağımız değişiklikler butonda da değişecek artık.