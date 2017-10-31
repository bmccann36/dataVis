
// { id: 100,
//   cat: 'CRIMINAL TRESPASS',
//   lat: '40.686749281',
//   lon: '-73.796904574' }

const testArr = []



for (let i = 0; i <= 10; i++) {
  const obj = {
    id: i,
    lat: newNum(),
    lon: newNum()
  }
  // console.log(obj)
  testArr.push(obj)
}

console.log(testArr)
console.log('*********')
testArr.sort(sortLat)
console.log(testArr)
console.log('*********')
// console.log(testArr.sort(sortLon))




//UTILITIES

function sortLon(a, b) {
  if (a.lat == b.lat) {
    if (a.lon < b.lon) return 1
    if (a.lon > b.lon) return -1
    if (a.lon == b.lon) return 0
  }
}


function sortLat(a, b) {
  if (a.lat < b.lat) return -1
  if (a.lat > b.lat) return 1
  if (a.lat == b.lat) return 0
}


// creates random numbers - - can change how many digits
function newNum() {
  return Math.ceil(Math.random() * 10)
}
