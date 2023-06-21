document.getElementById('konversi').onclick = tempConvert;
function tempConvert(event){
    event.preventDefault();
    let inputCelcius = document.getElementById("celcius").value;
    if (!inputCelcius || inputCelcius === "0"){
        document.getElementById("celcius").value = "0";
        document.getElementById("fahrenheit").value = "0";
        document.getElementById("cara-kalkulasi").value = "";
        document.getElementById("titleKonversi").innerHTML = "Cara Konversi dari Celsius (°C) ke Fahrenheit (°F)";

        alert("Please enter a valid number for Celsius!");
        return
    }
    var fahrenheit = ((9 / 5) * inputCelcius ) + 32;

    document.getElementById('celcius').value = `${inputCelcius}`;
    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('cara-kalkulasi').value = `(9/5 x ${inputCelcius}°) + 32 = ${fahrenheit}°` ;
    document.getElementById("titleKonversi").innerHTML = "Cara Konversi dari Celsius (°C) ke Fahrenheit (°F)";
}

document.getElementById('reset').onclick = formReset;
function formReset(){
    document.getElementById('celcius').value ='';
    document.getElementById('fahrenheit').value ='';
    document.getElementById('cara-kalkulasi').value = '' ;
}

document.getElementById('reverse').onclick = tempReverse;
function tempReverse(event){
    event.preventDefault();
    let inputFahrenheit = document.getElementById("fahrenheit").value;
    if (!inputFahrenheit || inputFahrenheit === "0"){
        document.getElementById("celcius").value = "0";
        document.getElementById("fahrenheit").value = "0";
        document.getElementById("cara-kalkulasi").value = "";
        document.getElementById("titleKonversi").innerHTML = "Cara Konversi dari Fahrenheit (°F) ke Celsius (°C)";

        alert("Please enter a valid number for Fahrenheit!");
        return
    }
    var celcius = 5 / 9 * (inputFahrenheit - 32) ;

    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
    document.getElementById('fahrenheit').value = `${inputFahrenheit}`;
    document.getElementById('cara-kalkulasi').value = `5/9 x (${inputFahrenheit}° - 32) = ${celcius}°` ;
    document.getElementById("titleKonversi").innerHTML = "Cara Konversi dari Fahrenheit (°F) ke Celsius (°C)";
}