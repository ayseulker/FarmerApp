
let toplamBacak;

let inekCheck = document.getElementById("inek");
let tavukCheck = document.getElementById("tavuk");
let domuzCheck = document.getElementById("domuz");
let koyunCheck = document.getElementById("koyun");

function bacakBulma() {
    let inek = 2;
    let tavuk = 3;
    let domuz = 2;
    let koyun = 2;

    if (inekCheck.checked) {
        inek = inek * 4;
    } else {
        inek = 0;
    }

    if (tavukCheck.checked) {
        tavuk = tavuk * 2;
    } else {
        tavuk = 0;
    }

    if (domuzCheck.checked) {
        domuz = domuz * 4;
    } else {
        domuz = 0;
    }

    if (koyunCheck.checked) {
        koyun = koyun * 4;
    } else {
        koyun = 0;
    }

    toplamBacak = inek + tavuk + domuz + koyun;

    lblSonuc.innerHTML = "Stokta olan bacak sayısı: " + toplamBacak;

}

bacakBulma();


let animalss = ["inek", "inek", "tavuk", "tavuk", "tavuk", "domuz", "domuz", "koyun", "koyun"];
let bacakSayilari = {
  "inek": 4,
  "tavuk": 2,
  "domuz": 4,
  "koyun": 4
};
let toplamBacakSayisii = 0;
let helalHayvan = ["inek" , "tavuk" ,"koyun"]



for (let animal of animalss) {
  if (animal in bacakSayilari && helalHayvan.includes(animal)) { // hayvanın bacak sayısı biliniyorsa
    toplamBacakSayisii += bacakSayilari[animal]; // toplam bacak sayısını güncelle
  }
}

console.log("Toplam bacak sayısı: " + toplamBacakSayisii);



let animals = [
    {
        hayvan: "inek",
        bacakSayisi: 4,
        hayvanSayisi: 2
    },
    {
        hayvan: "tavuk",
        bacakSayisi: 2,
        hayvanSayisi: 3
    },
    {
        hayvan: "domuz",
        bacakSayisi: 4,
        hayvanSayisi: 2
    },
    {
        hayvan: "koyun",
        bacakSayisi: 4,
        hayvanSayisi: 2
    }
];
let toplamBacakSayisi = 0;




for (let animal=0;animal<animals.length ; animal++) {
    if (animals[animal].hayvan !== "domuz") {
        toplamBacakSayisi += animals[animal].bacakSayisi* animals[animal].hayvanSayisi
    }
}

console.log("Toplam bacak sayısı: " + toplamBacakSayisi);


