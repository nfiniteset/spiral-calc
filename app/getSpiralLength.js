function getSpiralLength(diameter, spacing) {
    // Assuming the spiral starts at the center and expands outward
    const radius = diameter / 2;
    // Calculate the number of turns in the spiral
    const numTurns = radius / spacing;
    // Calculate the total angle covered by the spiral in radians
    // 2 * PI radians for each turn
    const thetaMax = 2 * Math.PI * numTurns;
    const numSteps = 10000; // Increase for more accuracy
    const deltaTheta = thetaMax / numSteps;
    let length = 0;

    for (let i = 0; i < numSteps; i++) {
        let theta1 = i * deltaTheta;
        let theta2 = (i + 1) * deltaTheta;
        let r1 = spacing * theta1 / (2 * Math.PI); // Convert angle back to linear distance
        let r2 = spacing * theta2 / (2 * Math.PI); // Convert angle back to linear distance
        let f1 = Math.sqrt(r1 * r1 + spacing * spacing);
        let f2 = Math.sqrt(r2 * r2 + spacing * spacing);
        // Trapezoidal sum
        length += (f1 + f2) * deltaTheta / 2;
    }

    return length;
}

export default getSpiralLength;