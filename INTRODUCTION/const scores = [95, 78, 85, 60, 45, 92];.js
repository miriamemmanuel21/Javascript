const scores = [95, 78, 85, 60, 45, 92];

const convertToGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F'; 
};

const letterGrades = scores.map(convertToGrade);

console.log(letterGrades);
