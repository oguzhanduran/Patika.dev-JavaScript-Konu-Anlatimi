// Filter ile Array İçerisinde Sadece İstenilen Bilgilerin Yeni Listeye Eklenmesi

// Bir Array metodu olan filter(), dizi elemanlarını döngüye alıp, istediğimiz koşula sahip olanlarla yeni bir dizi oluşturmak için kullanılır.

// Diyelim ki bir liste var ama ben 5 karakterden daha fazla olan productları bulup listeye eklemeye calısıyorum.

const PRODUCTS = ["laptop", "phone", "speaker", "desktop", "server", "mause", "keyboard"]   

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5 )
console.log(NEW_PRODUCTS)





// Aktif kullanıcılar ??

const USERS = [
    {fullName: "Ayse Sumer", isActive: false},
    {fullName: "Ahmet Urgan", isActive: true},
    {fullName: "Asya Basar", isActive: true},
    {fullName: "Aksel Durmaz", isActive: false},
]

// const ACTİVE_USERS = USERS.filter(user => user.isActive === false) // nokta "." ile birlikte bir objenin içersindeki yapıya bakabiliyoruz.

const ACTİVE_USERS = USERS.filter(user => user.isActive) //isActive false ise bize zaten işlem dönmeyecek, yani sadece true da calısan bir yapı. UNUTMA!!! Biz bir seye baktıgımız zaman true olanına bakmak isteriz, bu default'ta bu sekildedir. yani direk true da yazabiliriz ama yazmasakda yeterli
console.log(ACTİVE_USERS)