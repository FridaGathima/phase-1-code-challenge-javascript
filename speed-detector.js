//The speed limit is set at 70. This function is used to calculate by how many km a car travels above the speed limit 
// and awards demerit points for speed above the speed limit

function speedDetector (speed) {
    if (speed <= 70) { 
        return "Ok";
    } else {
        let dePoints = speed - 70 
        dePoints = dePoints / 5
        if (dePoints >= 12) {
            return "Licence Suspended";
        }else {
            return "Points:" + dePoints 
        }
    }   
}
