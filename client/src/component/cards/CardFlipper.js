let card = document.querySelector('.red5card');

if (card) {
    card.addEventListener('click', function () {
        if (card) {
            card.classList.toggle('is-flipped');
            console.log(card.classList)
        }
    });
}
