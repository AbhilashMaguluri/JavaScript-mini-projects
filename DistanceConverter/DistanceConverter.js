function convert() {
    let value = parseFloat(document.getElementById("inputValue").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;

    if (isNaN(value)) {
        document.getElementById("result").innerHTML = "Please enter a valid number.";
        return;
    }

    
    const toMeters = {
        kilometers: 1000,
        meters: 1,
        miles: 1609.34,
        feet: 0.3048
    };

    
    let valueInMeters = value * toMeters[fromUnit];

    
    let convertedValue = valueInMeters / toMeters[toUnit];

    document.getElementById("result").innerHTML = 
        `${value} ${fromUnit} = ${convertedValue.toFixed(2)} ${toUnit}`;
}
