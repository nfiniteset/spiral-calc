function getSpiralPoints(arc = 1, separation = 1, numPoints) {
    function polarToCartesian(radius, angle) {
        return [radius * Math.cos(angle), radius * Math.sin(angle)];
    }

    let result = [[0, 0]];

    let radius = arc;
    const distancePerRotation = separation / (2 * Math.PI);
    let angle = radius / distancePerRotation;

    let remaining = numPoints;
    while (remaining > 0) {
        result.push(polarToCartesian(radius, angle));
        angle += arc / radius;
        radius = distancePerRotation * angle;
        remaining -= 1;
    }
    return result;
}

export default getSpiralPoints;