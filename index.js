// Code your solution in this file!
/* function distanceFromHqInBlocks() {
    const start = 42;
    const finish = 50;
    return finish - start;
}

function distanceFromHqInFeet(start, finish) { 
    const feetDistance = (finish-start)*264;
    return feetDistance;

These functions will output negative numbers if the value of finish is
less than start

} */

function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

// we need Math.abs() to ensure a positive number

function distanceFromHqInFeet(someValue) {
     
    return distanceFromHqInBlocks(someValue) * 264;

}

// like a boss. 6 passed, 7 left 

function distanceTravelledInFeet(start, destination) {
    return (Math.abs(destination - start)) * 264;
}

//9 down

function calculatesFarePrice(start, destination) {

    if (distanceTravelledInFeet(start,destination) <= 400) {
        return 0;
    }

    else if (distanceTravelledInFeet(start,destination) > 400 && 
    distanceTravelledInFeet(start,destination) <= 2000) {

        return (distanceTravelledInFeet(start,destination) - 400) * .02;
    }

    else if (distanceTravelledInFeet(start,destination) > 2000 &&
    distanceTravelledInFeet(start,destination) <= 2500) {

        return 25;
    }

    else {

        return 'cannot travel that far'
    }
}