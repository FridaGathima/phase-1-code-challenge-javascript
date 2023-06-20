//The speed limit is set at 70. This function is used to calculate by how many km a car travels above the speed limit 
// and awards demerit points for speed above the speed limit

function speedDetector (speed) {
    if (speed <= 70) { 
        return "Ok";
    } else {
        let dePointsGross= speed - 70 //calculates by how many km the car went above the speed limit.
        dePoints = dePointsGross / 5 // divides the speed limit by 5 to get the demerit points since
        if (dePoints >= 12) {        // 1 point is awarded for every 5km.
            return "Licence Suspended";
        }else {
            return "Points:" + dePoints 
        }
    }   
} 
