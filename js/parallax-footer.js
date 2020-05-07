$(function () {
    let bg3 = document.querySelector('.parallax4');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg3.style.transform = 'translate(-' + x * 12 + '%, -' + y * 4 + '%)';
    });
    let bg4 = document.querySelector('.parallax5');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg4.style.transform = 'translate(-' + x * 12 + '%, -' + y * 0 + '%)';
    });
    let bg5 = document.querySelector('.parallax6');
    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg5.style.transform = 'translate(-' + x * 0 + '%, -' + y * 15 + '%)';
    });
});
