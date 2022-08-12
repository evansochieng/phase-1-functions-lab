// Code your solution in this file!

// Distance from HQ in blocks
const scuberHQ = 42; 
function distanceFromHqInBlocks(pickup){
    if (pickup < scuberHQ) {
        return (scuberHQ - pickup);
    } else {
        return (pickup - scuberHQ);
    }
    // OR
    //(pickup < scuberHQ) ? (scuberHQ - pickup) : (pickup - scuberHQ)
}

// Distance from HQ in feet
function distanceFromHqInFeet(pickup){
    let distance = distanceFromHqInBlocks(pickup);

    // Convert blocks to feet
    return (distance * 264);
}

// Distance travelled in feet
function distanceTravelledInFeet(pickup, destination){
    if (pickup < destination){
        return (destination - pickup) * 264;
    } else {
        return (pickup - destination) * 264;
    }
}

// Calculate fare
function calculatesFarePrice(pickup, destination){

    // Get distance travelled
    let distance = distanceTravelledInFeet(pickup, destination);
    let fare;

    // Calculate the fare
    switch (true) {
        case (distance <= 400): //free ride
            return fare = 0;
            break;
        case (distance > 400 && distance <= 2000): //
            return fare = (distance - 400) * (2/100);
            break;
        case (distance > 2000 && distance <= 2500): //flat charge
            return fare = 25
            break;
        case (distance > 2500): //distance over 2500
            return 'cannot travel that far'
            break;
    }
}