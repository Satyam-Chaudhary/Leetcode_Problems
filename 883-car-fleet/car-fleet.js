/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    let combined = sortDescending(position, speed);
    let stack = [];

    for (let i = 0; i < combined.length; i++) {
        let p = combined[i][0];
        let s = combined[i][1];
        let ttr = ((target - p) / s); // time to reach target for current car

        // console.log(combined);
        if (stack.length === 0 || ttr > stack[stack.length - 1]) {
            stack.push(ttr);
        }
    }
    return stack.length;
};

function sortDescending(position, speed) {
    let combined = position.map((item, index) => {
        return [item, speed[index]];
    })
    return combined.sort((a, b) => b[0] - a[0]);
}