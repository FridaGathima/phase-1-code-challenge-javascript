function speedDetectorr (speed) {
    if (speed <= 70) {
        return "Ok";
    }
    else if (speed > 70 && speed <= 75)
        return "Points:2"
}

function speedDetector (speed) {
    let speedLimit = speed - 70
    if (speedLimit <= 0) {
        return "Ok";
    }
    else if (speedLimit <= 5) {
        return "Points:1"
    }
    else if (speedLimit > 5 && speedLimit <= 10) {
        return "Points:2"
    }
    else if (speedLimit > 10 && speedLimit <= 15) {
        return "Points:3"
    }
    else if (speedLimit > 15 && speedLimit <= 20) {
        return "Points:4"
    }
    else if (speedLimit > 20 && speedLimit <= 25) {
        return "Points:5"
    }
    else if (speedLimit > 25 && speedLimit <= 30) {
        return "Points:6"
    } 
    else if (speedLimit > 30 && speedLimit <= 35) {
        return "Points:7"
    }
    else if (speedLimit > 35 && speedLimit <= 40) {
        return "Points:8"
    }
    else if (speedLimit > 40 && speedLimit <= 45) {
        return "Points:9"
    }
    else if (speedLimit > 45 && speedLimit <= 50) {
        return "Points:10"
    }
    else if (speedLimit > 50 && speedLimit <= 55) {
        return "Points:11"
    }
    else if (speedLimit >55 && speedLimit <= 60) {
        return "Points 12"
    }
    else if (speedLimit >60) {
        return "Licence suspended"
    }
}

console.log(speedDetector(10))