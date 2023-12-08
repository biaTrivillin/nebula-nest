const backBtn = document.querySelector('#back__btn');
const nextBtn = document.querySelector('#nxt__btn');

nextBtn.addEventListener('click', () => {
    window.location.href = '../html/mercury.html'
})

backBtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

