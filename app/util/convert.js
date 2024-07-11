function mmToFt(mm) {
return (mm / 304.8).toFixed(2);
}

function mmToIn(mm) {
return (mm / 25.4).toFixed(2);
}

function mmToM(mm) {
    return (mm / 1000).toFixed(2);
}

const outs = {
    mmToFt,
    mmToIn,
    mmToM
}

export default outs;
export {
    mmToFt,
    mmToIn,
    mmToM
}