function jumbledLetters(strObj) {
    let arrayNum = ['zero','one','two','three','four','five','six','seven','eight','nine']

    function sorter(str) {
       return str.split('').sort().join('');
    }

    // sort all the values in ArrayNum
    for (let i=0; i<arrayNum.length; i++) {
       arrayNum[i] = sorter(arrayNum[i]);
    }

    // sort the values of strObj
    strObj = sorter(strObj[0]);

    // create an array with 10 spots and default value of 0
    let found = new Array(10).fill(0)

    function search(numStr) {

        // create two pointers
        let pointer = 0;
        let numPointer = 0;

        // run until out of characters
        while (pointer < strObj.length) {
            //console.log('numPointer=', numPointer, ' strObj=', strObj[pointer]);
            if (numPointer === numStr.length - 1) {
                console.log('------heyyyyy yooouuu gggguuyyss-----')

                let idx = arrayNum.indexOf(numStr)
                //console.log('idx= ',idx, arrayNum, numStr)
                found[idx]++;

                for (let n=0; n<numStr.length; n++) {
                    console.log('numStr[x]=', numStr[n])
                    let letterIdx = strObj.indexOf(numStr[n]);
                    if (letterIdx === -1) return -1;
                    console.log('letterIdx= ', letterIdx);
                    console.log('strObj', strObj);
                }
//                 pointer = 0;
//                 numPointer = 0;
                console.log('found=', found);
                return found
            }
            console.log('numStr[numPointer]', numStr[numPointer], 'strObj[pointer]', strObj[pointer]);
            if (strObj[pointer] === numStr[numPointer] && numPointer < numStr.length) {
                pointer++;
                // if the next value is equal increment
                if (numStr[numPointer + 1]) numPointer++;
                // found character reset strObj to 0
                if (pointer === strObj.length - 1) pointer = 0;
            } else {
                pointer++
            }

        }
    }

    search(arrayNum[2]);
    //console.log(found);

}

jumbledLetters(['reuonnoinfeft'])
