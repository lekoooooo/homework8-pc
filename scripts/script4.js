

function checkTemperature(temperature){
    if(temperature < 0){
        return "Freezing";
    } else if(temperature >= 0 && temperature < 20){
        return "Cold"
    } else if(temperature >= 21 && temperature <= 30){
        return "Warm"
    } else {
        return "Hot"
    }
}
console.log(checkTemperature(-5));
console.log(checkTemperature(15));
console.log(checkTemperature(25));

console.log(checkTemperature(35));