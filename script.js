function add() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const principle = parseFloat(prompt("Enter the principle:"));
  const interest = parseFloat(prompt("Enter the annual rate of interest in %:"));
  const year = parseFloat(prompt("Enter the year(s):"));
  const result = (principle * interest * year) / 100;
  alert(`The Simple Interest for ${interest}% of $${principle} for ${year} year(s) is $${result.toFixed(2)} `); //decimal limited to 2 digits
}

function compoundInterest() {
  const principle = parseFloat(prompt("Enter the principle:"));
  const interest = parseFloat(prompt("Enter the annual rate of interest in %:"));
  const year = parseFloat(prompt("Enter the year(s):"));
  const compoundedTimes = parseFloat(prompt("Enter the compounded time(s) per year:"));
  const p = principle;
  const r = interest / 100; // Convert percentage to decimal
  const t = year;
  const n = compoundedTimes;
  const result = (p * ((1 + (r / n)) ** (n * t))) - p;
  alert(`The ${compoundedTimes} time(s) per year Compound Interest for ${interest}% of $${principle} for ${year} year(s) is $${result.toFixed(2)} `); //decimal limited to 2 digits
}
