function quadratic(b, c) {
    const discriminant = b*b - 4.0 * c
    const sqroot = Math.sqrt(discriminant)
    const root1 = (-b + sqroot) / 2.0
    const root2 = (-b - sqroot) / 2.0

    return `${root1}\n${root2}`
};