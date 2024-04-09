import React from "react";

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myVehicles = { ...myVehicle, ...updateMyVehicle };

const SpreadOperator = () => {

    return console.log(myVehicles);
}


export default SpreadOperator
