const NUMBER = 100;

for (let index = 1; index <= NUMBER; index++) {
  if (index % 15 === 0) console.log('FizzBuzz');
  else if (index % 3 === 0) console.log('Fizz');
  else if (index % 5 === 0) console.log('Buzz');
  else console.log(index);
}
