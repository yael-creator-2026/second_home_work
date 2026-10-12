const fs = require('fs');

try{
fs.writeFileSync('long1.txt','קובץ טקסט ארוך מספר 1');
fs.writeFileSync('long2.txt','קובץ טקסט ארוך  מספר 2');
fs.writeFileSync('short.txt','קובץ טקסט קצ1');
console.time('ריצה סינכורונית');
// קריאה בצורה סינכורונית
const contect1=fs.readFileSync('long1.txt','utf8');
console.log(`file name: long1 || lengh: ${contect1.length}`);
const content2=fs.readFileSync('long2.txt','utf8');
console.log(`file name: long2 || lengh: ${content2.length}`);
const content3=fs.readFileSync('short.txt','utf8');
console.log(`file name: short || lengh: ${content3.length}`);
}
catch (err) {
  console.error(' שגיאה:', err);
}
console.timeEnd('זמן ריצה סינכרוני');




