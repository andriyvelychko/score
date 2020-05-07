$(function () {
    //Paralax efect
    let bg = document.querySelector('.parallax');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg.style.transform = 'translate(-' + x * 10 + '%, -' + y * 5 + '%)';
    });

    let bg1 = document.querySelector('.parallax2');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg1.style.transform = 'translate(-' + x * 12 + '%, -' + y * 4 + '%)';
    });

    let bg2 = document.querySelector('.parallax3');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg2.style.transform = 'translate(-' + x * 0 + '%, -' + y * 20 + '%)';
    });
    let bg6 = document.querySelector('.parallax7');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg6.style.transform = 'translate(-' + x * 0 + '%, -' + y * 15 + '%)';
    });

});