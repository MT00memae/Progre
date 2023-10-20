
function checkTemp(temperature) {
    if (temperature >= 0 && temperature <= 20) {
        return -1; // Too cold
    } else if (temperature >= 21 && temperature <= 40) {
        return 0; // Just right
    } else if (temperature >= 41 && temperature <= 60) {
        return 1; // Too warm
    } else {
        return -2; // Temperature is not in any of the specified ranges
    }
}