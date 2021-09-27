// FORM SUBMİT

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit) //submit yapıldığında formSubmit fonksiyonum devreye girsin istiyorum. addEventListener kullanıcı bir olayı gerçekleştirdiğinde (bir yere tıklamak gibi) çağrılarak o olay gerçekeştiğinde bizim yapılmasını istediğimiz şeyi yapabilmemizi sağlar.

function formSubmit(event) {
    event.preventDefault() // böylelikle get ile birlikte olan işlemi sen yapma yani ben söyleyene kadar dur diyoruz. Bu da işlem gerçekleşti yazısının console'da gözükmesini sağlıyor.
    console.log("Islem Gerçeklesti")
}

// bu videoda formSubmitte default işlemi engelledik. Bundan sonraki adımda formSubmit olduğunda git ve bu bilgiyi al ve düzenle diyebiiriz.