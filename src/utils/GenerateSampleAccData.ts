const generateAccountNumber = (): string => {
  const part1: number = Math.floor(Math.random() * 1000); // Generate a random 3-digit number
  const part2: number = Math.floor(Math.random() * 100000); // Generate a random 5-digit number
  const part3: number = Math.floor(Math.random() * 10); // Generate a random single digit

  // Format the account number
  const accountNumber: string = `${part1.toString().padStart(3, '0')}-${part2
    .toString()
    .padStart(5, '0')}-${part3}`;

  return accountNumber;
}

const accNumber = generateAccountNumber();

export default accNumber;