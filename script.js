function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    if (weight === "" || height === "" || weight <= 0 || height <= 0) {
        alert("Harap masukkan berat dan tinggi badan yang valid!");
        return;
    }

    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById("result").textContent = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Kelebihan berat badan";
    } else {
        category = "Obesitas";
    }

    alert("BMI Anda adalah " + bmi.toFixed(2) + " - " + category);
}
