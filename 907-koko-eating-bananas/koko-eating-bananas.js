/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {

    return optimal(piles, h);

};

function brute(piles, h) {

    let max = Math.max(...piles);
    let k = max;

    for (let i = max; i >= 1; i--) {
        let hrs = getTotalHours(piles, i);
        if (hrs <= h) {
            k = Math.min(i, k);
        }
    }

    return k;

}

function optimal(piles, h) {
    let l = 1;
    let r = Math.max(...piles);

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let hrs = getTotalHours(piles, mid); // hrs for this k
        if (hrs <= h) { // koko eating fast slow koko
            r = mid - 1; // not mid - 1 as no case for mid when hrs === h
        }
        else { // koko slow fasten her
            l = mid + 1;
        }
    }

    return l;
}

function getTotalHours(piles, k) {
    let hrs = 0;
    for (let i = 0; i < piles.length; i++) {
        if (piles[i] >= k) {
            hrs += Math.ceil(piles[i] / k);
        } else {
            hrs += 1;
        }
    }
    return hrs;
}

