function adviseClothing() {
    const temperature = parseInt(document.getElementById('temperature').value);
    const raining = document.getElementById('raining').value;
    let advice = "";

    if (isNaN(temperature)) {
        document.getElementById('advice').innerText = "Please enter a valid temperature.";
        return;
    }

    switch (true) {
        case (temperature < 10):
            advice = "It's cold outside. Wear a heavy jacket.";
            break;
        case (temperature >= 10 && temperature < 20):
            advice = "It's cool outside. Wear a light jacket.";
            break;
        case (temperature >= 20 && temperature < 30):
            advice = "The weather is warm. Wear regular clothing.";
            break;
        case (temperature >= 30):
            advice = "It's hot outside. Wear light and breathable clothing.";
            break;
        default:
            advice = "Please enter a valid temperature.";
    }

    if (raining === "yes") {
        advice += " Also, don't forget to take an umbrella.";
    }

    document.getElementById('advice').innerText = advice;
}