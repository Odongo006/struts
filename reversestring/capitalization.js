// function capitalize(str){
//     str = str.split(' ')
//     for(var i = 0; i<str.length; i++){
//         str[i] = str[i][0].toUpperCase()+str[i].substr(1)
//     }
//     return str.join(' ')
// }
// console.log(capitalize('my wild dog is called a beast'))

function capitalize(str){
    const words = []

    for(let word of str.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}
console.log(capitalize('my wild dog is called a beast'))