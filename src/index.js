function transformOne (param) {
    switch(param) {
      case 1:
        return 'one'
        break
      case 2:
        return 'two'
        break
      case 3:
        return 'three'
        break
      case 4:
        return 'four'
        break
      case 5:
        return 'five'
        break
      case 6:
        return 'six'
        break
      case 7:
        return 'seven'
        break
      case 8:
        return 'eight'
        break
      case 9:
        return 'nine'
        break
      case 0:
        return 'zero'
        break
      }
    }
    
  function transformTwo (param) {
    switch(param) {
      case 1:
        return 'eleven'
        break
      case 2:
        return 'twelve'
        break
      case 3:
        return 'thirteen'
        break
      case 4:
        return 'fourteen'
        break
      case 5:
        return 'fifteen'
        break
      case 6:
        return 'sixteen'
        break
      case 7:
        return 'seventeen'
        break
      case 8:
        return 'eighteen'
        break
      case 9:
        return 'nineteen'
        break
      case 0:
        return 'ten'
        break
    }
  }
  function transformThree (param) {
    switch(param) {
      case 2:
        return 'twenty'
        break
      case 3:
        return 'thirty'
        break
      case 4:
        return 'forty'
        break
      case 5:
        return 'fifty'
        break
      case 6:
        return 'sixty'
        break
      case 7:
        return 'seventy'
        break
      case 8:
        return 'eighty'
        break
      case 9:
        return 'ninety'
        break
    }
  }
  
  
module.exports = function toReadable (number) {
    let str = number + ''
    if (str.length == 1) {
        return  transformOne(number)
    } else if (str.length == 2) {
        if (str[0] < 2 && str[0] != 0) {
            return transformTwo(+str[1])
        } else if (str[1] == 0) {
            return `${transformThree(+str[0])}`
        } else {
            return `${transformThree(+str[0])} ${transformOne(+str[1])}`
        }
    } else {
        if (str[1] == 1) {
            return `${transformOne(+str[0])} hundred ${transformTwo(+str[2])}`
        } else if (str[1] == 0 && str[2] != 0) {
            return `${transformOne(+str[0])} hundred ${transformOne(+str[2])}`
        } else if (str[2] == 0 && str[1] != 0) {
            return `${transformOne(+str[0])} hundred ${transformThree(+str[1])}`
        } else if (str[1] == 0 && str[2] == 0) {
            return `${transformOne(+str[0])} hundred`
        } else {
            return `${transformOne(+str[0])} hundred ${transformThree(+str[1])} ${transformOne(+str[2])}`
        }
    }
}

