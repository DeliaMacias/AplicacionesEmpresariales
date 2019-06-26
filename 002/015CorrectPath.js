function CorrectPath(str) {
    // code goes here  
    let r, c = 0;
    let result = '';
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'l') r -= 1;
        if (str[i] == 'r') r += 1;
        if (str[i] == 'u') c += 1;
        if (str[i] == 'd') c -= 1;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '?') {
            if (r > 0) {
                result += 'r';
            } else {
                result += 'd';
            }
        } else {
            result += str[i];
        }
    }
    return result;
}

console.log(CorrectPath('drdr??rrddd?'));