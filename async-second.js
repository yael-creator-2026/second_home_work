const fs = require('fs');



fs.readFile('long1.txt','utf8',(err,data) => {
  if(err){
    console.error('שגיאה בקריאת הקובץ',err);
    return;
  }
  console.log(`אורך הקובץ long1 הוא: ${data.length}`);
  })
fs.readFile('long2.txt','utf8',(err,data) => {
  if(err){
    console.error('שגיאה בקריאת הקובץ',err);
    return;
  }
  console.log(`אורך הקובץ long2 הוא: ${data.length}`);
  })
fs.readFile('short.txt','utf8',(err,data) => {
  if(err){
    console.error('שגיאה בקריאת הקובץ',err);
    return;
  }
  console.log(`אורך הקובץ short הוא: ${data.length}`);
  })

fs.readFile('not-exist.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('הקובץ לא קיים', err.message);
    return;
  }
  console.log('תוכן:', data);
});