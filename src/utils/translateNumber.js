

export default function translateNumbers(num) {
    const numXroman = {
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNum = '';

    for (let i of Object.keys(numXroman)) {
        let q = Math.floor(num / numXroman[i]);
        num -= q * numXroman[i];
        romanNum += i.repeat(q);
    }
    return romanNum;
}