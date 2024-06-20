// Function untuk konversi Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
    return (celcius * 1.8) + 32;
}

// Function untuk konversi Farenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

// Function untuk mengeksekusi konversi
function convertTemperature() {
    const celcius = parseFloat(document.getElementById('input-celcius').value);
    const fahrenheit = parseFloat(document.getElementById('input-farenheit').value);
    let result = '';

    if (!isNaN(celcius)) {
        const fahrenheitResult = celciusToFahrenheit(celcius).toFixed(2);
        result = `(${celcius}°C * 1.8) + 32 = ${fahrenheitResult} °F`;
        document.getElementById('input-farenheit').value = fahrenheitResult;
        document.getElementById('display-result').value = `(${celcius}°C * 1.8) + 32 = ${fahrenheitResult}°F`;
    } else if (!isNaN(fahrenheit)) {
        const celciusResult = fahrenheitToCelcius(fahrenheit).toFixed(2);
        result = `(${fahrenheit}°F - 32) / 1.8 = ${celciusResult} °C`;
        document.getElementById('input-celcius').value = celciusResult;
        document.getElementById('display-result').value = `(${fahrenheit}°F - 32) / 1.8 = ${celciusResult}°C`;
    } else {
        result = 'Masukkan nilai suhu antara Celcius atau Farenheit.';
        document.getElementById('display-result').value = result;
    }
}

// Function untuk reset inputan
function resetFields() {
    document.getElementById('input-celcius').value = '';
    document.getElementById('input-farenheit').value = '';
    document.getElementById('display-result').value = '';
}

// Function untuk reverse inputan
function reverseInputs() {
    const celciusContainer = document.querySelector('.celcius-container');
    const fahrenheitContainer = document.querySelector('.farenheit-container');
    const parentContainer = document.querySelector('.konversi-container');

    // Cek element untuk menukar posisi
    if (celciusContainer.nextElementSibling === fahrenheitContainer) {
        parentContainer.insertBefore(fahrenheitContainer, celciusContainer);
    } else {
        parentContainer.insertBefore(celciusContainer, fahrenheitContainer);
    }
}

// Add event listeners untuk menjalankan function pada button
document.getElementById('btn-konversi').addEventListener('click', convertTemperature);
document.getElementById('btn-reset').addEventListener('click', resetFields);
document.getElementById('btn-reverse').addEventListener('click', reverseInputs);

// Note:
// UNTUK BUTTON REVERSE SETELAH DIKLIK HARUS DI RESET DULU AGAR BISA MELAKUKAN KONVERSI