function anagram(text) {
    let charMap = {}

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    return charMap
}
console.log(anagram('silent','listen'))