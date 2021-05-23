const record = [
    {year: '2018', result:'L'},
    {year: '2017', result:'W'},
    {year: '2016', result: 'N/A'}
]

// function superbowlWin(record) {
//     let result = record.find(record => record.result === 'W');
//     if (result = 'W') {
//         return result.year
//     } else {
//         return undefined
//     }
    
// }

// Why does this work??

superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    return !!result ? result.year : undefined;
  }