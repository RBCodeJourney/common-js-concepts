/* 
Truthy;
1. true
2. any number (+ve, -ve) will be truthy other than 0
3. any string
4. '0'
5. {}
6. []

Falsy:
1. false
2. 0
3. ''   (empty string)
4. undefined
5. null
*/

let x = [];
if (x) {
    console.log('value of x is truthy');

}
else {
    console.log('value of x is falsy');
}

// optional
// check falsy
const y = '';
if (!x){
    console.log('value is falsy')
}

const z = {class: 9};
// check ture
if(!!x){
    console.log('value is truthy');
}