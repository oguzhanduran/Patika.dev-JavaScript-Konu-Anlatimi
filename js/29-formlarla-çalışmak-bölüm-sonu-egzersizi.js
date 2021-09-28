//Formlarla Çalışmak : Bölüm Sonu Egzersizi

 
// 1: Formu Seç
// 2: Input bilgisini UL bilgisine ekle
// 3: Form içindeki bilgiyi sıfırla
// 4: Eğer formda bilgi girilmezse kullanıcıyı uyar

// 1: Formu Seç

let userFormDOM = document.querySelector("#userForm") //querySelector ile id="userForm" ulaştık ve bunu userFormDOM değişkenine atadık.
userFormDOM.addEventListener("submit", formHandler) // addEventListener ile submit tuşuna formHandler fonksiyonunu atadık.
const alertDOM = document.querySelector("#alert") // alert'ı ekranda cıkartmak için sectik.

const alertFunction = (title, message, className="warning") => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

// 2: Input bilgisini UL bilgisine ekle

function formHandler(event) {
    event.preventDefault() // bununla tusa basınca console'da gelip gitmesini önledik, yani submit anında sayfanın yenilenmesini engelledik. şu an console'da gözükmüyor.

    //simdi bilgileri alıcaz bu işlemi function'ın içindede yapabiliriz dışında da.

    const USER_NAME = document.querySelector("#userName") //userName bilgisini aldık. 
    const SCORE = document.querySelector("#score") // score bilgisini aldık. "html dosyasından username ve score idlerini querySelector ile çağırdık.""
    
    if (USER_NAME.value && SCORE.value) { //if yapısıyla beraber bos girişlerde kutucuk olusmasını engelledik, 
        addItem(USER_NAME.value, SCORE.value)//bunların değerlerini listeye eklemek için addItem adlı fonksiyona yolluyoruz 
        USER_NAME.value = "" 
        SCORE.value = ""// Bu şekilde gönderdikten sonra userName ve score kutucuklarını sıfırladık.
    } else {
        alertDOM.innerHTML = alertFunction("Baslık Bilgisi", 
        "Eksik bilgi girdiniz", 
        "danger") //Yukarda queryselector ile seçtiğimiz alertDOM'u innerHTML ile ekrana yazdırdık.
    }
   
}

/*
<li class="list-group-item d-flex justify-content-between align-items-center">
    Cras justo odio
    <span class="badge badge-primary badge-pill">14</span>
</li>
*/
// 2: UL bilgisine ekle


let userListDOM = document.querySelector("#userList") 


const addItem = (userName, score) => {  //function yerine bilgiyi arrow function ile aldık function = parameter => {işlem}
    let liDOM = document.createElement('li')
    liDOM.innerHTML = ` ${userName} <span class="badge badge-primary rounded-pill">${score} </span> 
    
    ` //yan taraftaki mavi kutucugu değiştirdik

    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center') //claslist ile birlikte artık yazılan bilgiler alta taşmıyor tablonun içine gidiyor. 
    userListDOM.append(liDOM) //burda append ile birlikte userName ve score bilgisini listenin sonuna ekledik. 

}