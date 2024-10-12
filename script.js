const ratingContainer = document.querySelector('.rating');
let CurrentValue = 0;
const limit = 5;

const html = Array.from(Array(limit)).map((_, i) => {
  return `<div class="item item-${i}" data-pos="${i}"></div>`;
});

ratingContainer.innerHTML = html.join('');

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('mouseover', e => {
    const pos = item.getAttribute('data-pos');

    if(CurrentValue) {
      document.querySelectorAll('.item').forEach(item => {
        if(item.classList.contains('item-full')) {
          item.classList.remove('item-full');
        }
      });
    }

    document.querySelectorAll('.item').forEach(item => {
      if(item.classList.contains('item-full')) {
        item.classList.remove('item-full');
      }
    });
    
    for (let i = 0; i <= pos; i++) {
      const cuadro = document.querySelector(`.item-${i}`);
      if (!cuadro.classList.contains('item-full')) {
        cuadro.classList.add('item-full');
      }
    }
    CurrentValue === parseInt(pos) + 1;
  });
});
