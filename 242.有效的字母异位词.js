/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let arr = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    for(let i = 0;i<s.length;i++) {
        arr[s[i].charCodeAt() - base]++;
    }
      for(let i = 0;i<t.length;i++) {
        arr[t[i].charCodeAt() - base]--;
    }

    for(let i = 0;i<arr.length;i++) {
        if(arr[i] !== 0) {
            return false;
        }
    }
    return true;
};