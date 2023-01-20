// https://goqr.me/api/

const wrapper = document.querySelector('.wrapper');
const generateButton = wrapper.querySelector('.form button');
const qrCodeInput = wrapper.querySelector('.form textarea');
const qrCodeImage = wrapper.querySelector('.qr-code img');

generateButton.addEventListener('click', () => {
    let qrCodeValue = qrCodeInput.value;

    if (!qrCodeValue.trim()) {
        return;
    }

    generateButton.innerHTML = 'Gerando QR Code...';

    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrCodeValue}`;

    qrCodeImage.addEventListener('load', () => {
        wrapper.classList.add('active');
        generateButton.innerHTML = 'Gerar QR Code';
    });
});

qrCodeInput.addEventListener('keyup', () => {
    if (!qrCodeInput.value) {
        wrapper.classList.remove('active');
    }
});