// For Döngüsü

// for ([başlangıç ataması]; [koşul ifadesi]; [arttırım ifadesi (döngü sonunda çalışacak ifade)]) {
//     yapılacak işlem
// }

let users = [ "lorem", "ipsum", "dolor", ]

// for (let index = 0; index < 10; index++) { 
// console.log(index)
// } //tanımlamayı içerden yaptık // index dediğimiz şey genelde i diye tanımlanıyor.

//let index = 0;
// for (; index < 10; index++) {
//     console.log(index)
// } //tanımlamayı dışardan yaptık 

const userListDOM = document.querySelector("#userList"); //ul'ye ulaştık 

for (let index = 0; index < users.length; index++) {
    const liDOM = document.createElement('li') //ul olduğu için ekrana yazdırabilmek amacıyla li oluşturmamız gerek.
    liDOM.innerHTML = users[index]; //inner html dom'a ekrana ulaştıık 
    userListDOM.appendChild(liDOM); // dokumanı nereye ekleyeceğimizi tanımlamalıyız appendChild diyerek listenin sonuna ekle demiş olduk
}

//: 0 ve 50 sayıları arasından çift olanları konsola yazdıralım.

for (var i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
}; i.length  0, 2, 4, ... 44, 46, 48