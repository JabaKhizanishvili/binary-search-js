function leapYear(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}
function nextDay(day, month, year) {
  let isLeapYear = leapYear(year);
  if (month == 2) {
    if (isLeapYear) {
      if (day >= 30) return "Gadacemuli tve arasworia";
    } else {
      if (day >= 29) return "Gadacemuli tve arasworia";
    }
  }
  if (day >= 32 || day <= 0 || month >= 13 || month <= 0) {
    return "Gadacemuli mnishvnelobebi arasworia";
  }
  let Jan = 31;
  let Mar = 31;
  let Apr = 30;
  let May = 31;
  let Jun = 30;
  let Jul = 31;
  let Aug = 31;
  let Sep = 30;
  let Oct = 31;
  let Nov = 30;
  let Dec = 31;
  if (month == 2) {
    if (isLeapYear && day >= 29) return [1, month + 1, year];
    if (!isLeapYear && day >= 28) return [1, month + 1, year];
  }
  if (month == 1 && day >= Jan) return [1, month + 1, year];
  if (month == 3 && day >= Mar) return [1, month + 1, year];
  if (month == 4 && day >= Apr) return [1, month + 1, year];
  if (month == 5 && day >= May) return [1, month + 1, year];
  if (month == 6 && day >= Jun) return [1, month + 1, year];
  if (month == 7 && day >= Jul) return [1, month + 1, year];
  if (month == 8 && day >= Aug) return [1, month + 1, year];
  if (month == 9 && day >= Sep) return [1, month + 1, year];
  if (month == 10 && day >= Oct) return [1, month + 1, year];
  if (month == 11 && day >= Nov) return [1, month + 1, year];
  if (month == 12 && day >= Dec) return [1, 1, year + 1];
  return [day + 1, month, year];
}

// let date = new Date();
// date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
// console.log(date);

function count(number) {
  console.log(number);
  let newNumber = number - 1;
  if (newNumber > 0) {
    count(newNumber);
  }
}

// 5!=1*2*3*4*5 => 120

function factorial(number) {
  if (number == 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

//console.log(factorial(5));

function powLoop(number, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= number;
  }
  return result;
}
console.log(powLoop(2,2))
function powRecursion(number, n) {
  if (n == 1) {
    return number;
  } else {
    return number * powRecursion(number, n - 1);
  }
}

function powRecursion(number, n) {
  return n == 1 ? number : number * powRecursion(number, n - 1);
}

function binarySearch(array, number, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (array[mid] == number) return true;
  if (array[mid] > number) {
    return binarySearch(array, number, start, mid - 1);
  } else {
    return binarySearch(array, number, mid + 1, end);
  }
}

// let numbersArray = [
//   1, 2, 3, 4, 50, 70, 80, 100, 110, 120, 200, 205, 210, 250, 300,
// ];
// console.log(binarySearch(numbersArray, 305, 0, numbersArray.length));

function hanoiTower(length, start, destination, helper) {
  if (start == destination || start == helper || helper == destination) {
    console.log("Ar sheidzleba ertnairi dasaxelebebi");
    return;
  }
  if (length <= 0) return;
  hanoiTower(length - 1, start, helper, destination);
  console.log(`Gadavitanet rgoli ${length} ${start} dan ${destination} ze`);
  hanoiTower(length - 1, helper, destination, start);
}

//hanoiTower(10, "A", "C", "B");
