// Ausgangsarray
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// neues Array mit Werten die den Test bestehen
const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]