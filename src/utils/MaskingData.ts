export const maskAccountNumber = (accountNumber: string): string => {
    const parts = accountNumber.split('-');

    parts[0] = 'XXX';
    parts[1] = 'XXX' + parts[1].slice(-2);
  
    const maskedAccountNumber = parts.join('-');
  
    return maskedAccountNumber;

  }
  
  