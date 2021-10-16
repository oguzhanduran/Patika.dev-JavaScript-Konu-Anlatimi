/*****Arrow Fonksiyon Kullanımı************/

function hello(firstName) {
    console.log(`Merhaba ${firstName}`);
}

hello("JavaScript")

// Yukardaki örneği fat arrow ile yapalım "=>"

const helloFuncV1 = (firstName) => { console.log(`Merhaba ${firstName}`) }

helloFuncV1("helloFuncV1") 

const helloFuncV2 = firstName => console.log(`Merhaba ${firstName}`)      //Eğer 1 tane parametre varsa parantez koymaya gerek yok, 1 tane islem varsa süslü paranteze de ihtiyac yok. Koymamalısın süslü parantez

helloFuncV2("HelloFuncV2")

const helloFuncV3 = (firstName, lastName) => console.log(
    `Merhaba ${firstName} ${lastName}`
    )

helloFuncV3("HelloFuncV3", "LastName")

const helloFuncV4 = (firstName, lastName) => {  //BURDA birden çok işlem olduğu için süslü parantezlerin içine almamız gerekiyor.
    let info = (`Merhaba ${firstName} ${lastName}`)
    console.log(info);
    return info ;
} 

helloFuncV4("helloFuncV4", "other Info")

// Arrow function bir değişkene bağlamadan da kullanılabiliyor 



const seriesList = list => {
  
    list.forEach((series, index) => {
      console.log(`${index+1}. ${series}`) 
    });
  };

  seriesList(["Firefly", "The Mandalorian","Breaking Bad"]);