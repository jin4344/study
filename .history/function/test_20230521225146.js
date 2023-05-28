function average(num1, num2) {
    return (num1 + num2) / 2;
  }
  
  let total = getTotal(1, 2, function (total) {
    return total / 2;
  });
  console.log(total);
  
  function getTotal(num1, num2, callback) {
    if (callback) {
      console.log(callback(num1 + num2));
    }
    return num1 + num2;
  }