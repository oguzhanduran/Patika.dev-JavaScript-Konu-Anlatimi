//let ve Const ile Degisken Tanımlama


//var ile degisken tanımlamak

//var serverName = "api.kodluyoruz.org"
//console.log(serverName); //serverName yazısını tırnak içine almıcaz

//let ile değiskeni boş tanımlama
//let serverName;
//consolo.log(serverName)

//let ile değişkene bilgi atamak
serverName = "https://kodluyoruz.org"
console.log(serverName)

//let ile değişkene bilgi atayarak tanımlamak
let password = "1234";
console.log(password)

//değisken atması yapmadan önce kullanmaya çalışmak
/* HATALI KULLANIM

console.log(fullName)
let fullName = "Hakan Yakcinkaya"; //let ile tanımladığımız zaman hatasını görürken var ile tanımladıgımızda sadece undefined diyor */

let fullName = "Hakan Yakcinkaya";

// let ile tanımlanan değişkenin içersindeki bilgiyi değiştirmek
fullName = "Lorem Ipsum Dolor"
console.log(fullName)

//Birleştirme ve Ekleme İslemi
fullName + "Yeni Eklenen Bilgi"
console.log(fullName + " Test Bilgisi") //Ekle ve göster ama değişkene eklemedik.
console.log(fullName)

fullName = fullName + " Yeni Bilgi" //Önce fullname'in içine yeni bir bilgi ekledik sonra da yazdırdık.
fullName =  " 2. Bilgi " + fullName  //Önce fullname'in içine yeni bir bilgi ekledik sonra da yazdırdık.
console.log(fullName)

fullName = "Sifirlandı "
fullName += "ve Yeni bilgi Eklendi"
console.log(fullName)

//const ile değişkeni boş tanımlamaya çalışmak :(
//const serverPassword; //Sadece değişken tanımlandı ama içi boş, bu yötem yanlış yapamıyoruz

// const ile değişken tanımlamak
const SERVER_PASSWORD ="Oguzhan Duran"
console.log(SERVER_PASSWORD)

SERVER_PASSWORD = "1234"
console.log(SERVER_PASSWORD) //Bu yanlış cünkü const kullanıldıgında sabit bir bilgi olmalı atama olmaz.