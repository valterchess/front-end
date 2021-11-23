function dragon() {
    const dragon0 = "F"
    const nogard0 = "F"

    //then try aply a for loop
    const dragon1 = `${dragon0} L ${nogard0}`
    const nogard1 = `${dragon0} R ${nogard0}`
    const dragon2 = `${dragon1} L ${nogard1}`
    const nogard2 = `${dragon1} R ${nogard1}`
    const dragon3 = `${dragon2} L ${nogard2}`
    const nogard3 = `${dragon2} R ${nogard2}`
    const dragon4 = `${dragon3} L ${nogard3}`
    const nogard4 = `${dragon3} R ${nogard3}`
    const dragon5 = `${dragon4} L ${nogard4}`

    return `${dragon0}\n ${dragon1}\n
            ${dragon2}\n ${dragon3}\n
            ${dragon4}\n ${dragon5}`
};