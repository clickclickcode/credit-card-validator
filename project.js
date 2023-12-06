// This is a project from Codecademy's Full-Stack Engineer Career Path


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
// invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
// valid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
// invalid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
// invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
// valid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// Task 3
// handling ONE credit card
const validateCred = (arr) => {
  
  // Keeping track of the sum
  let sum = 0

  // even or uneven
  let length = arr.length
  // console.log(length)

    if (length % 2 == 0) {
      // console.log('even')
      // if even...
      for (let i = length-1; i > -1; i--) {
        if (i % 2 != 0) {        
          sum += arr[i]
        } else {
          if (arr[i] * 2 >= 10) {
            calc = arr[i] * 2 - 9
            sum += calc
          } else {
            sum += arr[i] * 2
          }
        }
      }
    } else {
      // console.log('uneven')
      // if uneven...
      for (let i = length-1; i > -1; i--) {
        if (i % 2 != 0) {
          if (arr[i] * 2 >= 10) {
            calc = arr[i] * 2 - 9
            sum += calc
          } else {
            sum += arr[i] * 2
          }
        } else {
          sum += arr[i]
        }
      }
    }
  let check = sum % 10
  // console.log(sum + ' ' + check)
  return check
}

// validateCred(mystery5)


// Task 4
// finding and returning invalid numbers from nested array
const findInvalidCards = (arr) => {
  let invalidCards = []

  // for the card in batch
  for (let item in arr) {
    // validateCred returns a number
    // if 0 it's valid else it is invalid
    let validator = validateCred(arr[item])
    // console.log(validator)
    // if validator is not 0
    if (validator != 0) {
      // push the invalid card to invalidCards
      invalidCards.push(arr[item])
    }
  }
  // log the array of invalid cards
  // console.log(invalidCards)
  return invalidCards
}
findInvalidCards(batch)



// Task 5
// finding the companies that have issued faulty numbers
const idInvalidCardCompanies = (arr) => {
  // companies
  const companies = [
    'Amex (American Express)',
    'Visa',
    'Mastercard',
    'Discover',
  ]

  let faultyComp = []

  for (let item of arr) {
    let len = item.length-1

    if (item[len] == 3 && !faultyComp.includes(companies[0])) {
      faultyComp.push(companies[0])
    //   console.log(companies[0] + ' first digit: ' + item[len])
    } else if (item[len] == 4 && !faultyComp.includes(companies[1])) {
      faultyComp.push(companies[1])
    //   console.log(companies[1] + ' first digit: ' + item[len])
    } else if (item[len] == 5 && !faultyComp.includes(companies[2])) {
      faultyComp.push(companies[2])
    //   console.log(companies[2] + ' first digit: ' + item[len])
    } else if (item[len] == 6 && !faultyComp.includes(companies[3])) {
      faultyComp.push(companies[3])
    //   console.log(companies[3] + ' first digit: ' + item[len])
    } else {
    //   console.log('Company not found. First digit: ' + item[len])
    }
  }

  console.log(faultyComp)

}

const badCards = findInvalidCards(batch)

idInvalidCardCompanies(badCards)