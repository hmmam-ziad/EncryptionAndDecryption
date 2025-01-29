const inputText = document.getElementById("inputText");
const algorithmSelect = document.getElementById("algorithmSelect");
const keyInput = document.getElementById("keyInput");
const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");
const outputText = document.getElementById("outputText");


function encryptCaesarCipher(text, shift) {
    return text.split('').map(char => {
        let code = char.charCodeAt(0);
        return String.fromCharCode(code + shift);
    }).join('');
}


function decryptCaesarCipher(text, shift) {
    return text.split('').map(char => {
        let code = char.charCodeAt(0);
        return String.fromCharCode(code - shift);
    }).join('');
}


function encryptBase64(text) {
    return btoa(text);
}


function decryptBase64(encoded) {
    return atob(encoded);
}


function encryptAES(text, key) {
    return CryptoJS.AES.encrypt(text, key).toString();
}


function decryptAES(cipherText, key) {
    return CryptoJS.AES.decrypt(cipherText, key).toString(CryptoJS.enc.Utf8);
}


encryptBtn.addEventListener("click", () => {
    const text = inputText.value;
    const algorithm = algorithmSelect.value;
    const keyOrShift = keyInput.value;

    if (!text || !keyOrShift) {
        outputText.value = "Please enter text and a key/shift value.";
        return;
    }

    if (algorithm === "caesar") {
        const shift = parseInt(keyOrShift);
        outputText.value = encryptCaesarCipher(text, shift);
    } else if (algorithm === "base64") {
        outputText.value = encryptBase64(text);
    } else if (algorithm === "aes") {
        outputText.value = encryptAES(text, keyOrShift);
    } else {
        outputText.value = "Algorithm not supported yet.";
    }
});

decryptBtn.addEventListener("click", () => {
    const text = inputText.value;
    const algorithm = algorithmSelect.value;
    const keyOrShift = keyInput.value;

    if (!text || !keyOrShift) {
        outputText.value = "Please enter text and a key/shift value.";
        return;
    }

    if (algorithm === "caesar") {
        const shift = parseInt(keyOrShift);
        outputText.value = decryptCaesarCipher(text, shift);
    } else if (algorithm === "base64") {
        outputText.value = decryptBase64(text);
    } else if (algorithm === "aes") {
        outputText.value = decryptAES(text, keyOrShift);
    } else {
        outputText.value = "Algorithm not supported yet.";
    }
});
