/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;

    for (let i = 0; i < boxTypes.length; i++) {
        let boxCount = boxTypes[i][0];
        let unitsPerBox = boxTypes[i][1];

        
        if (truckSize >= boxCount) {
            totalUnits += boxCount * unitsPerBox; // Add all units
            truckSize -= boxCount; 
        } else {
            totalUnits += truckSize * unitsPerBox; // Fill the remaining space
            break; 
        }
    }

    return totalUnits; 
};