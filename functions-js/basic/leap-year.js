/**
 * is just a leap year if is divisible for 4 
 * && not divisible for 100 ||
 * if is divisible for 4 and divisible for 400
 */
function leapYear(year) {
    if (year % 4 === 0 && !year % 100 === 0){
        return "leap year!"
    } else if (year % 4 === 0 && year % 100 === 0) {
        if (year % 400 === 0){
            return "leap year!"
        }
    }
    return "is not a leap year"
};