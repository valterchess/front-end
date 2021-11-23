function cartesianToPolar(x, y) {
    const r = Math.sqrt((x*x) + (y+y))
    const theta = Math.atan2(y,x);
    //this return is just to example.
    // return just the results is ok.
    return `r = ${r}\ntheta = " ${x}`;
};