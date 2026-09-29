const quotes = [
  '«План на день: выглядеть так,<br>будто ты уже всё запустил.»',
  '«Не опаздываю. Я просто<br>эффектно появляюсь.»',
  '«Если пальто развевается —<br>значит, день удался.»',
  '«Уверенность — это когда<br>даже чай пьёшь эпично.»'
];

const quote = document.querySelector('#quote');
const toast = document.querySelector('#toast');
let quoteIndex = 0;

document.querySelector('#quote-button').addEventListener('click', () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quote.innerHTML = quotes[quoteIndex];
  quote.animate([{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 280 });
});

document.querySelector('#meme-button').addEventListener('click', () => {
  toast.classList.add('show');
  document.body.classList.add('party');
  setTimeout(() => toast.classList.remove('show'), 2600);
  setTimeout(() => document.body.classList.remove('party'), 700);
});

document.querySelector('.sound').addEventListener('click', (event) => {
  event.currentTarget.classList.toggle('active');
  toast.textContent = event.currentTarget.classList.contains('active') ? 'ПАФОС ВКЛЮЧЁН. ВОЗДУХ СТАЛ ТОРЖЕСТВЕННЕЕ.' : 'ПАФОС НА ПАУЗЕ. НО НЕ НАДОЛГО.';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
});
