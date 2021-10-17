// break & continue



// ben istemediğim bir şey geldiğinde döngüyü devam ettirip istediğim şey gelincede döngüyü durdurabilirim işte bunun için break & continue kullanıyoruz.

//mesela kullanıcı ismi su oldugunda devam et yada su kullanıcıyı içeri alma ve diğer kullanıcılarla devam et gibi bir komutta yazabiliriz, fonksiyonda yazabiliriz. veya benim istediğim bir kullanıcı geldiğinde tamam durdur benim istediğim kullanıcı geldi de diyebiliriz.

const LOREM_LIST = [
    'lorem', 'ipsum', 'dolor', 'amet', 'concestatur', 'adipisicing', 'elit'
]


// let counter = 0;

// for(; counter < 10; counter++) {

//     if ( counter === 5) {break}; // 4'e kadar consolda yazar. if'i asagı alsaydık o zaman 5'e kadar yazardı.
//     console.log(counter)
// }

// let counter = 0;

// for(; counter < 10; counter++) {

//     if ( counter === 5) {continue}; // 5'e gelince atladı. devam et dedi yani ekranda 5 yazmadı.
//     console.log(counter)
// }


const UL_DOM = document.querySelector("#userList")

index = 0;

// for(; index < LOREM_LIST.length; index++) {
    
//     if (LOREM_LIST[index] == "dolor") {break}; //buraya break dediğimiz için sadece lorem ve ipsum değerleri ekranda göründü.

//     const liDOM = document.createElement("li");
//     liDOM.innerHTML = LOREM_LIST[index];
//     UL_DOM.appendChild(liDOM)


// }

for(; index < LOREM_LIST.length; index++) {
    
    if (LOREM_LIST[index] == "dolor") {continue}; //buraya continue dediğimiz için dolor ifadesine gelince atladı ve bir sonraki ifadeyi yazdırdı.

    const liDOM = document.createElement("li");
    liDOM.innerHTML = LOREM_LIST[index];
    UL_DOM.appendChild(liDOM)


}