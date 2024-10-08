
const ratingContainer = document.querySelector('.rating');
let CurrentValue = 0;
const limit = 5;

const html = Array.from (Array(limit)), map((_, i) => {
  return `<div class="item item-${i}" data-pos="${i}></div>`;
})

ratingContainer.innerHTML = html.join('');
