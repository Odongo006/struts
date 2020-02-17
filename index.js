// // // paliandrome("abba") true

// function palindrome(str) {
//      return false;
//    }
//    palindrome("eye2");
//     console.log(palindrome())

// // function reverse(str){
// //     const data = str.split('').reverse().join('')
// //     return str === data;
// // }
// // console.log(reverse('noon2'))

function palindrome (str){
    return str.split('').every((char, i)=>{
        return char === str[str.length -i -1]
    })
}
console.log(palindrome('noon2'))

