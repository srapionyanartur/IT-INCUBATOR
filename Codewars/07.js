function findAverage(array) {
    if (array.length === 0) return 0;
    let sum = array.reduce((sum, n) => {
      return sum + n ;
    }, 0)
    
      return sum / array.length ;
  }