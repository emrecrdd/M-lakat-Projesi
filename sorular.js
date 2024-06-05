function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
}

let sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm" , d: "Nuget" }, "c"),
    new Soru("2-JavaScript'te hangisi zamanlayıcı çalışması değildir?", { a: "setTimeout", b: "setInterval", c: "TimeoutInterval", d: " clearInterval" }, "c"),
    new Soru("3-Bir HTML öğesinin içeriğini değiştirmek için aşağıdakilerden hangisi doğrudur ?", { a: "#yazi.innerHTML ='Crd Soft' ", b: "document.getElement('#yazi').innerHTML = 'Crd Soft'", c: "document.getElementById('#yazi').innerHTML = 'Crd Soft'", d: "document.querySelector('#yazi').innerHTML='Crd Soft'" }, "d"),
    new Soru("4-JavaScript'te 'this' anahtar kelimesi neyi gösterir/belirtir?", { a : "Function", b: "Obje",c: "Class" , d: "Constructor" }, "b"),
    new Soru("5-Hangisi 7.25 sayısını en yakın tamsayıya yuvarlar?", { a : "round(7.25)    ", b: "Math.rnd(7.25)",c: "rnd(7.25)" , d: "Math.round(7.25)" }, "d"),
    new Soru("6-Hangisi ile X ve Y’nin en yüksek değeri bulunur?", { a : "ceil(x, y)   ", b: "Math.max(x, y)",c: "Math.ceil(x, y)" , d: "top(x, y)" }, "b"),
    new Soru("7-Hangisi ile bir html elemanına tıklama olayı gerçekleşir?", { a : "onclick", b: "onmouseclick",c: "onchange" , d: "onmouseover" }, "a"),
    new Soru("8-Aşağıdakilerden hangisi uygun değişken ismidir?", { a : "case", b: " try",c: "tree" , d: "const" }, "c"),
    new Soru("9-Yorum kodları ile ilgili aşağıdakilerden hangisi yanlıştır?", { a : "Yorum kodları uygulamanın istediğimiz yerine açıklama eklememizi sağlar.", b: "İki şekilde açıklama satırları eklenebilir.",c: "Yorum kodları uygulamanın işleyişini değiştirir." , d: "/**/ ifadeleri çok satırlı açıklama satırları oluşturur." }, "c"),
    new Soru("10-JavaScript'le ilgili aşağıdakilerden hangisi doğrudur?", { a : "JavaScript yalnızca sunucu tarafında kullanılan bir dildir.", b: "JavaScript hem istemci tarafında hem de sunucu tarafında çalıştırılabilir.",c: " JavaScript, HTML sayfalarını şekillendirmek için kullanılır." , d: "JavaScript yalnızca HTML belgelerinin içine yazılabilir." }, "b"),
    new Soru("11-Aşağıdakilerden hangisi JavaScript'te bir nesneyi tanımlamanın bir yoludur?", { a : "var araba = {'marka':'Toyota', 'model':'Corolla'};", b: "var car = new Object(); {car.make = 'Toyota'; araba.model = 'Corolla';",c: "var araba = (marka: 'Toyota', model: 'Corolla');" , d: "var araba = {[marka: 'Toyota', model: 'Corolla']};" }, "a"),
    new Soru("12-console.log(typeof(undefined)); kod çıktısı ne olacak?", { a : "undefined", b: "Object",c: "null" , d: "string" }, "a"),
    new Soru("13-'123' dizesini JavaScript'te bir sayıya nasıl dönüştürebilirsiniz?", { a : " Number('123')", b: "parseInt('123')",c: "parseFloat('123')" , d: "Hepsi" }, "d"),
    new Soru("14-JavaScript'te hangileri Primitive(ilkel) tip değildir?", { a : "string", b: "null",c: "object" , d: "undefined" }, "c"),
    new Soru("15-setInterval fonksiyonunun yürütülmesini nasıl durdurabilirsiniz?", { a : " clearInterval()", b: "stopInterval()",c: "breakInterval()" , d: "pauseInterval()" }, "a"),
    new Soru("16-let number = 8; let str = '8'; console.log(number === str); kodun çıktısı nedir?", { a : "true", b: " false",c: " TypeError" , d: "NaN" }, "b"),
    new Soru("17-JavaScript'te event bubbling nedir?", { a : " Olay doğrudan yakalama aşamasında ele alınır.", b: "Bir olay hedef elemandan doğrudan en dıştaki elemana yayılır.",c: "Bir olay en dıştaki elemandan hedef elemana doğru yayılır." , d: "Olay hiçbir yöne yayılmaz." }, "b"),
    new Soru("18-JavaScript 'Promise' nasıl oluşturursunuz?", { a : "new Promise()", b: "Promise.create()",c: " Promise()" , d: "new AsyncPromise()" }, "a"),
    new Soru("19-console.log('B' + 'a' + + 'a' + 'a'); çıktısı ne olacak?", { a : "BaNaNa", b: "Baaa",c:  "BaNaN" , d:  SyntaxError }, "c"),
    new Soru("20-Map JavaScript'te ne işe yarar?", { a : "Her elemana bir fonksiyon uygulayarak orijinal diziyi değiştirir.", b: "Çağıran dizideki her öğe için sağlanan işlevin çağrılmasının sonuçlarını içeren yeni bir dizi oluşturur.",c: "Bir dizinin tüm elemanlarını bir dizide birleştirir" , d: "Bir dizide bir öğe değeri arar ve konumunu döndürür" }, "b"),
    new Soru("21-JavaScript'te 'prototip' nedir?", { a : "Bir yazılım uygulamasının ön versiyonu", b: "Tüm JavaScript nesnelerinin dayandığı başlangıç ​​modeli",c: "Diğer nesnelerin özelliklerini devraldığı ana nesne" , d: " Özel bir yapıcı işlevi" }, "c"),
    new Soru("22-JavaScript'te HTTP istekleri yapmak için hangi nesne kullanılır?", { a : "HTTP İstemcisi", b: "Web İstemcisi",c: "Async-await İstemcisi" , d: " FetchAPI İstemcisi" }, "d"),
    new Soru("23-Bir form alanı odağını kaybettiğinde hangi olay tetiklenir?", { a : "onchange", b: "onfocus",c: "onblur" , d: "submit" }, "c"),
    new Soru("24-Bir JSON dizesini JavaScript'te nasıl ayrıştırırsınız?", { a : "JSON.stringify(jsonString)", b: " JSON.parse(jsonString)",c: " JSON.decode(jsonString)" , d: "JSON.toObject(jsonString)" }, "b"),
    new Soru("25-JavaScript kullanarak bir HTML öğesinin stilini dinamik olarak nasıl değiştirebilirsiniz?", { a : " document.getStyle().change()", b: " element.style.property = 'value'",c: "element.changeStyle('property', 'value')" , d: "style.setAttribute('property', 'value')" }, "b"),
    





]
