//This function is used to detect by how many km a car travels above the speed limit.

function speedDetector (speed) {
    let speedLimit = speed - 70 // This calculates by how many km a car went above the speed limit of 70
    if (speedLimit <= 0) {
        return "Ok";
    }else if (speedLimit > 0 && speedLimit <= 5) { //This shows the demerit points a driver is awarded depending
        return "Points:1";                         // on how many km they went above the speed limit
    }else if (speedLimit > 5 && speedLimit <= 10) {
        return "Points:2";
    }else if (speedLimit > 10 && speedLimit <= 15) {
        return "Points:3";
    }else if (speedLimit > 15 && speedLimit <= 20) {
        return "Points:4";
    }else if (speedLimit > 20 && speedLimit <= 25) {
        return "Points:5";
    }else if (speedLimit > 25 && speedLimit <= 30) {
        return "Points:6";
    }else if (speedLimit > 30 && speedLimit <= 35) {
        return "Points:7";
    }else if (speedLimit > 35 && speedLimit <= 40) {
        return "Points:8";
    }else if (speedLimit > 40 && speedLimit <= 45) {
        return "Points:9";
    }else if (speedLimit > 45 && speedLimit <= 50) {
        return "Points:10";
    }else if (speedLimit > 50 && speedLimit <= 55) {
        return "Points:11";
    }else if (speedLimit >55 && speedLimit <= 60) {
        return "Points 12";
    }else if (speedLimit >60) { // any speed limit above 60, the licence is suspended.
        return "Licence suspended";
    }
}
