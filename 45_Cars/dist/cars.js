"use strict";
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarsInfo(manufacturer, modelName, ...extraOptions) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOptions));
    return carInfo;
}
let answer = storeCarsInfo('honda', 'civic', { color: 'white' }, { features: ['Navigation', 'Power window'] });
console.log(answer);
