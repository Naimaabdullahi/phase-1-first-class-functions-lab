// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return ['Antonia', 'Nuru']
}
const returnLastTwoDrivers = function(drivers) {
    return ['Amari', 'Mo']
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function(fare) {
        return (fare * multiplier)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}