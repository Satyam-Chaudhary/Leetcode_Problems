/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (t.length > s.length) return '';
    let [countT, window] = [{}, {}];

    for (let ele of t) {
        countT[ele] = 1 + (countT[ele] || 0);
    };

    let have = 0;
    let need = Object.keys(countT).length;

    let l = 0;
    let res = [-1, -1];
    let resLen = Infinity;
    for (let r = 0; r < s.length; r++) {
        let c = s[r];
        window[c] = 1 + (window[c] || 0);

        if (countT[c] && window[c] === countT[c]) {
            have += 1;
        }

        while (have === need) {
            //Update our result
            if ((r - l + 1) < resLen) { // currrentWinLen < previous WinLen
                res = [l, r];
                resLen = r - l + 1
            }

            //pop from left
            window[s[l]] -= 1;
            if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                have -= 1;
            }
            l += 1;
        }
    }

        [l, r] = res;

        let finalString = s.substring(l, r + 1);

        if (resLen !== Infinity) {
            return finalString
        } else {
            return '';
        }
};