function dayOfWeek(month, day, year) {
    const y0 = year - (14 - m) / 12
    const x  = y0 + y0/4 - y0/100 + y0/400
    const m0 = month + 12 * ((14 - month) / 12) - 2
    const d0 = (day + x + (31 * m0) / 12) % 7
    
    switch (d0) {
        case 1: return "SUNDAY"
        case 2: return "MONDAY"
        case 3: return "TUESDAY"
        case 4: return "WEDNESDAY"
        case 5: return "THURSDAY"
        case 6: return "FRIDAY"
        case 7: return "SATURDAY" 
    }
};

