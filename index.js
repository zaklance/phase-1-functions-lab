function distanceFromHqInBlocks(street) {
    return Math.abs(42 - street);
}

function distanceFromHqInFeet(count) {
    let blocks = distanceFromHqInBlocks(count);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let dist = Math.abs(start - destination) * 264;
    if(dist < 400, dist <= 2000){
        let value = (dist - 400) * 0.02;
        return value = value < 0 ? 0 : value;
    } else if(dist < 2000, dist <= 2500){
        return 25;
    } else {
        return 'cannot travel that far'
    }
};