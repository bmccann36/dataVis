


const data = require('./code/smallData')

console.log(data.length)


const focusData = data.map( entry => {
   return {
     id: entry[0],
     cat: entry[15],
     lat: entry[29],
     lon: entry[30]
   }
})

console.log(focusData[100])

sort function
put smallest latitude first
if lat[a] = lat[b]  && lon[a] > lon[b] switch a with b

// { id: 100,
//   cat: 'CRIMINAL TRESPASS',
//   lat: '40.686749281',
//   lon: '-73.796904574' }




