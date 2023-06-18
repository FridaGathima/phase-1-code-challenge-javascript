// This function outputs various student grades between A and E according to the marks achieved between 0 and 100. 
// If a user inputs marks ouside of this range whether < 0 or > 100, the function outputs "Invalid marks."
function studentGradeGenerator(marks) {
    if (marks >= 0 && marks <=100) {
        if (marks > 79 && marks <= 100) {
            return "A";
        }else if (marks > 60 && marks <=79) {
            return "B";
        }else if (marks > 49 && marks <= 59) {
            return "C";
        }else if (marks > 40 && marks <=49) {
            return "D";
        }else if (marks >= 0 && marks <= 40) {
            return "E";
        }
    } else
    return "Invalid Marks";
}