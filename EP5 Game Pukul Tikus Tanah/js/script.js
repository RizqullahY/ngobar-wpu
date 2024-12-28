const tanah = document.querySelectorAll('.tanah'); // untuk memunculkan tikus dari tanah
const tikus = document.querySelectorAll('.tikus'); // untuk memukul tikus apabila muncul
const papanSkor = document.querySelector('.score-tittle');    // untuk memulai game


let tanahSebelumnya;    // variable ini masih kosong
let selesai;
let skor;

function randomTanah(tanah){  // mengambil data acak 
   const t = Math.floor(Math.random() * tanah.length) // data acak dikali dengan panjang data dari tanah 
   const tRandom = tanah[t];
   if(tRandom === tanahSebelumnya){ // kalau data tanah yang diambil sama seperti variable tanahSebelumnya 
      randomTanah(tanah)         // menjalankan function randomTanah 
   }
   tanahSebelumnya = tRandom;
   return tRandom;



   // return tanah[tRandom]; // mengembalikan tanah dengan parameter acak dari tRandom
   // Mengapa kok tidak me-return tRandom saja ? ; karena tRandom hanya berisi angka acak saja, 
   // sementara angka acak itu harus dimasukkan pada elemen tanah 
}
function randomWaktu(min , max){
   return Math.round(Math.random() * (max - min) + min);
}

function munculkanTikus(){
   const tRandom = randomTanah(tanah);
   const wRandom = randomWaktu(300 , 1500); // 0.3 detik - 1.5 detik
   tRandom.classList.add('muncul') // contoh : pada class tanah di index-1 akan muncul
   
   setTimeout(() => {
      tRandom.classList.remove('muncul')
      if(!selesai){
         munculkanTikus(tanah);     // rekursif
      }
   }, wRandom);
}

function mulai(){
   selesai = false;
   skor = 0;
   papanSkor.textContent = 0;
   munculkanTikus();
   setTimeout(() => {
      selesai = true;
   }, 5000);
}

function pukul(){
   skor++;
   this.parentNode.classList.remove('muncul');
   papanSkor.textContent = skor;
}

tikus.forEach(t => {
   t.addEventListener('click',pukul);
});






/* Jenis Jenis Pembulatan
   Math.floor() == pembulatan ke bawah | 3.1 : 3 , 3.9 : 3
   Math.round() == pembulatan terdekat | 3.1 : 3 , 3.9 : 4
   Math.ceil() == pembulatan ke atas   | 3.1 : 4 , 3.9 : 4
   */
