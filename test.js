//
// const boysDir = path.join(__dirname, 'boys');
// const girlsDir = path.join(__dirname, 'girls');
//
//
//
//
// const sortUsersByGender = (pathDir, gender, bOrG, wherePath) => {
//     fs.readdir(pathDir, (err, files) => {
//         files.forEach(file => {
//             const listOfPeople = path.join(__dirname, bOrG, file);
//             const readListOfPeople = require(listOfPeople);
//
//             for (const listOfPerson of readListOfPeople) {
//                 if (listOfPerson.gender === gender) {
//                     fs.rename(pathDir, wherePath, err => {
//                         if (err) {
//                             console.log(err)
//                             return;
//                         }
//                         console.log('Good')
//                     })
//                 }
//             }
//         });
//     });
// }