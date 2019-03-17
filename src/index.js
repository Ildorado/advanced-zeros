function getZerosCount(number, base) {
  // your implementation
  /*let count = 0;
  let value = 1;
   if (number < 1 || number > Math.pow(10, 7)) {
     throw Error("doesnt follow requirements '1 <= number <= 10^7'");
   } 
   if (base < 2 || base > 256) {
     throw Error("doesnt follow requirements '2 <= base <= 256'");
   } */
  /*if (number == 1) {
    return 0;
  }
  for (let i = 2; i <= number; i++) {
    value = value * i;
    while (value % base == 0) {
      value = value / base;
      count++;
    }
    value = value % base;
  }
  return count; */
  //
  // we have array [prime number, power of this prime number in base,
  // power of this prime number in factorial]
  let arr_of_primes = break_base_as_product_of_primes(base);
  let arr_of_coefficients = [];
  arr_of_primes = number_of_prime_occurences_in_factorial(arr_of_primes,number);
  arr_of_primes.forEach(element => {
    arr_of_coefficients.push(Math.floor(element[2]/element[1]));
  });
  return Math.min(...arr_of_coefficients);

}

module.exports = getZerosCount;

function number_of_prime_occurences_in_factorial(prime_numbers, number) {
  let prime;
  prime_numbers.forEach(element => {
    prime = element[0];
    while(prime <= number) {
      element[2] += Math.floor(number/prime);
      prime *= element[0];
    }
  });
  return prime_numbers;
}
function break_base_as_product_of_primes( num) {
  let prime_numbers = [
    [2, 0, 0],[3, 0, 0],[5, 0, 0],[7, 0, 0],[11, 0, 0],[13, 0, 0],[17, 0, 0],[19, 0, 0],[23,0, 0],[29, 0, 0],
    [31, 0, 0],[37, 0, 0],[41, 0, 0],[43, 0, 0],[47, 0, 0],[53, 0, 0],[59, 0, 0],[61, 0, 0],[67, 0, 0],[71, 0, 0],
    [73, 0, 0],[79, 0, 0],[83, 0, 0],[89, 0, 0],[97, 0, 0],[101, 0, 0],[103, 0, 0],[107, 0, 0],[109, 0, 0],[113, 0, 0],
    [127, 0, 0],[131, 0, 0],[137, 0, 0],[139, 0, 0],[149, 0, 0],[151, 0, 0],[157, 0, 0],[163, 0, 0],[167, 0, 0],[173, 0, 0],
    [179, 0, 0],[181, 0, 0],[191, 0, 0],[193, 0, 0],[197, 0, 0],[199, 0, 0],[211, 0, 0],[223, 0, 0],[227, 0, 0],[229, 0, 0],
    [233, 0, 0],[239, 0, 0],[241, 0, 0],[251, 0, 0]
  ];
  for (let i = 0; i < prime_numbers.length; i++) {
    while (num % prime_numbers[i][0] == 0) {
      prime_numbers[i][1]++;
      num = num / prime_numbers[i][0];
    }
  }
  return prime_numbers.filter(element => {
    return element[1]!=0;
  })
} 