const qrText = document.getElementById("qr-text");
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;
generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    GenerateQRCode();
});

sizes.addEventListener('change', (e) => {
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('.qr-body img');
    if (img !== null) {
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

// function isEmptyInput() {
//     qrText.value.lenght > 0 ? GenerateQRCode() : alert("enter text");
// }

function GenerateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: 200,
        width: 200,
        colorDark: "#000",
        colorLight: "#fff",
    });
}