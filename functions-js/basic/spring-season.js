function springSeason(){
    let day = parseInt(Math.random() * 30)
    let month = parseInt(Math.random() * 12)
    if (day === 0) day += 1
    if (month === 0) month += 1

    const spring = (day === 20 && month === 3 
        || day === 20 && month === 6)

    return `${day}/${month}/n${spring}`
};
console.log(springSeason())