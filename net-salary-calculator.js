// For the net salary calculator, first, I derived the formula to calculate the net salary.
// Net Salary = Gross Salary - (Paye Tax + NSSF + NHIF)
// I created 4 functions to calculate:
// a)The Paye Tax deductibe c)The NHIF contribution
// b)The NSSF contribution  d) The Net salary
//If a user inputs Gross Salary of < 0, each of the functions outputs "Invalid Gross Salary."


// This function calculates the PAYE Tax payable to KRA. 
//The deductions are dependant on the gross salary. They are 10%, 25% and 30% of gross salary

function payeCalculator (grossSalary) {  
    if (grossSalary > 0) {
        if (grossSalary > 0 && grossSalary <= 24000) {
            return grossSalary * 10/100;
        }else if (grossSalary >= 24001 && grossSalary <= 32333) {
            return grossSalary * 25/100;
        }else if (grossSalary > 32333) {
            return grossSalary * 30/100;
        }
    } else
    return "Invalid Gross Salary";
}

// This function calculates the NSSF Contribution. The contribution is 6% of the gross salary.

function nssfCalculator (grossSalary) {
    if (grossSalary > 0) {
        return grossSalary * 6/100;
    } else
    return "Invalid Gross Salary";
}

// This function calculates the NHIF Contribution. The deductions are dependant on the gross salary.

function nhifCalculator (grossSalary) {
    if (grossSalary > 0) {
        if (grossSalary >= 0 && grossSalary <= 5999) {
            return 150;
        }else if (grossSalary >= 6000 && grossSalary <= 7999) {
            return 300;
        }else if (grossSalary >= 8000 && grossSalary <= 11999) {
            return 400;
        }else if (grossSalary >= 12000  && grossSalary <= 14999) {
            return 500;
        }else if (grossSalary >= 15000 && grossSalary <= 19999) {
            return 600;
        }else if (grossSalary >= 20000 && grossSalary <= 24999) {
            return 750;
        }else if (grossSalary >= 25000 && grossSalary <= 29999) {
            return 850;
        }else if (grossSalary >= 30000 && grossSalary <= 34999) {
            return 900;
        }else if (grossSalary >= 35000 && grossSalary <= 39999) {
            return 950;
        }else if (grossSalary >= 40000 && grossSalary <= 44999) {
            return 1000;
        }else if (grossSalary >= 45000 && grossSalary <= 49999) {
            return 1100;
        }else if (grossSalary >= 50000 && grossSalary <= 59999) {
            return 1200;
        }else if (grossSalary >= 60000 && grossSalary <= 69999) {
            return 1300;
        }else if (grossSalary >= 70000 && grossSalary <= 79999) {
            return 1400;
        }else if (grossSalary >= 80000 && grossSalary <= 89999) {
            return 1500;
        }else if (grossSalary >= 90000 && grossSalary <= 99999) {
            return 1600;
        } else if (grossSalary >= 100000) {
            return 1700;
        } 
    } else 
        return "Invalid Gross Salary";
}

// This function calculates the Net Salary. 
//Net salary is calculated with this formula: Net salary = Gross salary - (Paye Tax + Nssf + NHIF)

function netSalaryCalculator (grossSalary,benefits) {
    if (grossSalary > 0) {
        return grossSalary - (payeCalculator (grossSalary) + nssfCalculator (grossSalary)+ nhifCalculator (grossSalary));
    } else
        return "Invalid Gross Salary";
}
