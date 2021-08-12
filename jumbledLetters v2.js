function jumbledLetters(strObj) {
    let arrayNum = ['zero','one','two','three','four','five','six','seven','eight','nine']

    // splice is not a valid String method
    function splicer(str, idx) {
        strArr = str.split('');
        strArr.splice(idx, 1);
        return strArr.join('');
    }

    // pull string out of object
    strObj = strObj[0];

    // create an array with 10 spots and default value of 0
    let found = new Array(10).fill(0)

    function search(numStr) {

        // create two pointers 
        let pointer = 0;
        let numPointer = 0;

        let idx = arrayNum.indexOf(numStr)
        console.log('idx= ',idx, arrayNum, numStr, strObj)

        for (let n=0; n<numStr.length; n++) {
            //console.log('numStr[x]=', numStr[n])
            let letterIdx = strObj.indexOf(numStr[n]);
            console.log('letterIdx= ', letterIdx);
            if (letterIdx === -1) return;
            //console.log('strObj', strObj);
            strObj = splicer(strObj, letterIdx);
        }
        //console.log('strObj', strObj)
        let increment = arrayNum.indexOf(numStr);
        //console.log(increment)
        found[increment]++;
        //console.log('found=', found);
    }

    for (let i=0; i<arrayNum.length; i++) {
        search(arrayNum[i]);
    }
    console.log(found);
}

//jumbledLetters(['reuonsesgnevenwsixwiansdfelaksdfwttnoinfftw'])a
