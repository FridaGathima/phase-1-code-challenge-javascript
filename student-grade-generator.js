// This function outputs various student grades between A and E according to the marks achieved between 0 and 100. 
// If a user inputs marks ouside of this range whether < 0 or > 100, the functions outputs "Invalid marks."
function studentGradeGenerator(grade) {
    if (grade >= 0 && grade <=100) {
        if (grade > 79 && grade <= 100) {
            return "A";
        }else if (grade > 60 && grade <=79) {
            return "B";
        }else if (grade > 49 && grade <= 59) {
            return "C";
        }else if (grade > 40 && grade <=49) {
            return "D";
        }else if (grade >= 0 && grade <= 40) {
            return "E";
    }
    } else
    return "Invalid Marks";
}