function arrayPlusArray(arr1, arr2) {
    let sumArr = 0;
    for (i = 0; i< arr1.length; i++) {
      const sum = (arr1[i] + arr2[i]);
      sumArr += sum
    }
    return sumArr;
  }