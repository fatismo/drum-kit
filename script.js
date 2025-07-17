const drums = document.querySelectorAll('.drum');
const volumeControl = document.getElementById('volume');

let volume = volumeControl.value;

volumeControl.addEventListener('input', (e) => {
  volume = e.target.value;
});

drums.forEach(drum => {
  drum.addEventListener('click', () => {
    playSound(drum.dataset.sound);
    animateDrum(drum.dataset.key);
  });
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();
  const drum = document.querySelector(`.drum[data-key="${key}"]`);
  if (drum) {
    playSound(drum.dataset.sound);
    animateDrum(key);
  }
});

function playSound(filename) {
  const audio = new Audio(`sounds/${filename}`);
  audio.volume = volume;
  audio.play();
}

function animateDrum(key) {
  const drum = document.querySelector(`.drum[data-key="${key}"]`);
  if (drum) {
    drum.classList.add('active');
    setTimeout(() => drum.classList.remove('active'), 150);
  }
}
