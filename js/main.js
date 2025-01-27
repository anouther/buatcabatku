
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Happy Birthday').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "happy birthday bff ku yang paling imout! maap ya kado dari akunya telat hehe bingung soalnya mau kasih apa buat kamu. wishnya semoga kamu sehat selalu, panjang umur, lancar terus rezekinya (biar bisa traktir ak, ups ups) kamu tw gaa si? aku tu sayanggg banget sama kamu, rasa sayangnya tu sebanyak buih di lautan (anjay) pokoknya besarrrr banget deh rasa sayang aku. makasii banyak udah mw jadi temen aku ya sayangq. aku bersyukur banget punya temen sebaik kamu. semoga di ulang tahun kamu ini, kamu bisa jadi pribadi yang lebih baik ";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
