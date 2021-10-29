// pop() Metodu

// pop() metodu dizinin son elemanını siler ve dizinin yapısını değiştirir. Aynı zamanda da diziden silinen elemanı döndürür.

let array = ["1", "2", "3"]
let silinenArray = array.pop() 
console.log(silinenArray) // "3"
console.log(array) // "1" "2"

  //*****************************************************************************************************************/

// unshift() Metodu 
//  Javascript de dizilerin başına eleman ya da elemanlar eklemek için unshift() metodunu kullanıyoruz. Metot diziye eleman ya da elemanlar eklerken dizinin yapısını değiştirir. push() metodu ile de sonuna ekleriz.
let dizi = ["6", "7", "8"]
dizi.unshift("5")
console.log(dizi) // ["5","6","7","8"]

  //*****************************************************************************************************************/
