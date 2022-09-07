const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si, te amo demasiado y estoy demasiado orgulloso de ti, porfa vor no te exijas demasiado, se que quieres sacar buenas calificacion por eso te admiro pero te puede hacer daño con tanto estres para lo que ocupes estoy para ti y vuelvo a recalcar estoy demasiado orgulloso de ti!!!!!')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})