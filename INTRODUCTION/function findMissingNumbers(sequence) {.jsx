function findMissingNumbers(sequence) {
    const numbers = sequence.split('').map(Number);
    const maxNum = Math.max(...numbers);
    const minNum = Math.min(...numbers);
    const fullRange = Array.from({ length: maxNum - minNum + 1 }, (_, i) => i + minNum);
    return fullRange.filter(num => !numbers.includes(num));
  }
  
  // // Example usage:
  // const inputSequence = '2345789';
  // const inputSequence = '234579';
  // const missingNumbers = findMissingNumbers(inputSequence);
  // console.log('Missing numbers:', missingNumbers);
  