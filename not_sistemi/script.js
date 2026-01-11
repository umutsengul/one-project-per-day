
let ogrenciler = [
    { ad: 'Yiğit', soyad: 'Bilgi', notlar: [] },
    { ad: 'Ada', soyad: 'Bilgi', notlar: [] },
    { ad: 'Çınar', soyad: 'Turan', notlar: [] }
];


const notInput = document.getElementById('notInput');
const ogrenciSec = document.getElementById('ogrenciSec');
const btnEkle = document.getElementById('btnEkle');
const btnHesapla = document.getElementById('btnHesapla');
const sonucAlani = document.getElementById('sonucAlani');


btnEkle.addEventListener('click', () => {
    const secilenIndex = ogrenciSec.value;
    const girilenNot = notInput.value;

    if (girilenNot === "" || girilenNot < 0 || girilenNot > 100) {
        alert("Lütfen 0-100 arası geçerli bir not giriniz.");
        return;
    }

    ogrenciler[secilenIndex].notlar.push(Number(girilenNot));
    
    alert(`${ogrenciler[secilenIndex].ad} için not kaydedildi.`);
    notInput.value = "";
    notInput.focus();
});


btnHesapla.addEventListener('click', () => {
    sonucAlani.innerHTML = "<h2>Sınıf Durum Çizelgesi</h2>";

    ogrenciler.forEach(ogrenci => {
        let toplam = 0;
        let ortalama = 0;
        let durum = "";

        if (ogrenci.notlar.length > 0) {
            // Notları topla
            for (let n of ogrenci.notlar) {
                toplam += n;
            }
            ortalama = toplam / ogrenci.notlar.length;
            durum = ortalama >= 50 ? "BAŞARILI" : "BAŞARISIZ";
            const renkSinifi = ortalama >= 50 ? "basarili" : "basarisiz";

            sonucAlani.innerHTML += `
                <div class="ogrenci-kart">
                    <span>${ogrenci.ad} ${ogrenci.soyad} (Ort: ${ortalama.toFixed(1)})</span>
                    <span class="${renkSinifi}">${durum}</span>
                </div>
            `;
        } else {
            sonucAlani.innerHTML += `<div class="ogrenci-kart">${ogrenci.ad}: Not girilmedi.</div>`;
        }
    });
});