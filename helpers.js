'use strict'

export const transformName = (name) => {
const lowerCaseArr = name.toLowerCase().split(' ')
const firstWord = lowerCaseArr[0]
const lastWord = lowerCaseArr[lowerCaseArr.length - 1]
const firstLetter = firstWord[0]
const lastLetter = lastWord[0]
const transformedName = firstLetter + lastLetter
return transformedName
}


