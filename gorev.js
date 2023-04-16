let gorevlerim = ["Yataklari düzelt", "(x) Evi süpür", "Camasirlari yika", "(x) Yemegi yap", "Alisverise git", "Cocugu okuldan al"];

// Bitirilen işlerin filtrelenip gösterilmesi
let tamamlananlar = gorevlerim.filter((gorev) => gorev.includes("(x)"));
console.log("Tamamlanan Gorevler:", tamamlananlar);

// Bitirilmeyen işlerin filtrelenip gösterilmesi
let tamamlanmayanlar = gorevlerim.filter((gorev) => !gorev.includes("(x)"));
console.log("Tamamlanmayan Gorevler:", tamamlanmayanlar);

// İşlerin hepsinin bitip bitmediğinin kontrolü ve EVET/HAYIR gösterimi
let gorevlerTamamMi = gorevlerim.every((gorev) => gorev.includes("(x)"));
console.log("Gorevler tamam mı?", gorevlerTamamMi ? "Evet" : "Hayır");




/* INDEX YAZIM KODU
<script>let gorevlerim = ["Yataklari Duzelt", "(x) Evi Supur", "Camasirlari Yika", "(x) Yemegi Yap", 
    "Alisverise Git", "Cocugu Okuldan Al"];
    Bitirilen islerin filitrelenip gosterilmesi
    
    let tamamlananlar = gorevlerim.filter((gorev) => gorev.includes("(x)"));
     let tamamlananlarListesi = document.createElement("ul");
     for (let i = 0; i < tamamlananlar.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = tamamlananlar[i];
        tamamlananlarListesi.appenChild(listItem);
     }
     document.getElementById("gorevler listesi").appenChild(tamamlananlarListesi);

     Bitirilmeye islerin filitrelenip gosterilmesi
    
     let tamamlanmayanlar = gorevlerim.filter((gorev) => !gorev.includes("(x)"));
     let tamamlanmayanlarListesi = document.createElement("ul");
     for (let i = 0; i < tamamlanmayanlar.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = tamamlanmayanlar[i];
        tamamlanmayanlarListesi.appenChild(listItem);
     }
     document.getElementById("gorevler listesi").appenChild(tamamlanmayanlarListesi);

     Islerin hepsinin bitip bitmediginin kontrolu ve EVET/Hayir gosterimi
     
     
     let gorevTamamMi = gorevlerim.every((gorev) => gorev.includes("(x)"));
     let tamamMiText = document.createElement("p");
     tamamMiText.textContent = "Gorev tamam mi? " + (gorevTamamMi ? "Evet" : "Hayir");
     document.body.appenChild(tamamMiText);
    </script>
    */