
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


let animals = ["inek", "inek", "tavuk", "tavuk", "tavuk", "domuz", "domuz", "koyun", "koyun"];
let bacakSayilari = {
  "inek": 4,
  "tavuk": 2,
  "domuz": 4,
  "koyun": 4
};
let toplamBacakSayisi = 0;
let helalHayvan = ["inek" , "tavuk" ,"koyun"]



for (let animal of animals) {
  if (animal in bacakSayilari && helalHayvan.includes(animal)) { // hayvanın bacak sayısı biliniyorsa
    toplamBacakSayisi += bacakSayilari[animal]; // toplam bacak sayısını güncelle
  }
}

console.log("Toplam bacak sayısı: " + toplamBacakSayisi);

