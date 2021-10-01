// While Döngüsü

while(koşul) {
yapılacak işlem; 
}

//for döngüsünü genellikle bir sayıya kadar döndürmek için yapıyoruz ama while döngüsünü sonsuza kadar yapılacak işlemlerde kullanılır.

// while'de bir sey olana kadar diyebiliyoruz. 

// let counter = 0;

// while (counter < 10) { //10'a gelene kadar 1 arttıra arttıra ilerliyoruz.
//  console.log(counter)
//  counter += 1; // counter ++ şeklindede yazabiliriz
// }   


let userName; //userName'in içine bir sey atamadık.

while (!userName) { //userName bilgisi yok olduğu sürece çalış dedik.
    userName = prompt("Kullanıcı Adını Giriniz :")
    console.log(userName)
}

//mesela kullanıcının 0 ile 100 arasında bir şey girmesini istiyoruzdur 0 ile 100 arasında bir şey girene kadar diyebiliriz.

// TEXT ÖZET

// JavaScript’de tekrar eden işlemlerde kodlarımızın karışmasını önlemek ve okunabilirliği artırabilmek için döngüler kullanırız. Bunlardan bir tanesi While döngüsüdür. While döngüsü oluşturabilmek için ilk olarak parametre olarak bir koşul vermemiz gerekmektedir verdiğimiz koşul sağlandığı sürece döngü devam eder. Bu koşul sınırsız olursa döngü de sonsuz kere devam eder ve biz bunu istemeyiz genel olarak sonlanacağı bir durumla döngü sonlandırılmalıdır.