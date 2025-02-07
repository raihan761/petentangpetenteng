const gambar = document.querySelectorAll('img');
const audio = document.getElementById('audio');

gambar.forEach(gambar => {
  gambar.addEventListener('click', () => {
    const lagu = gambar.dataset.lagu;
    audio.src = lagu;
    audio.play();
  });
});