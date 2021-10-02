const fs = require('fs');
const path = require('path');

const sortUsersByGender = (pathDir, gender, bOrG,where) => {
    fs.readdir(pathDir, (err, files) => {
        files.forEach(file => {
            const listOfPeople = path.join(__dirname, bOrG, file);
            const readListOfPeople = require(listOfPeople);

            for (const listOfPerson of readListOfPeople) {
                if (listOfPerson.gender === gender) {
                    fs.rename(listOfPeople, where, err => {
                        if (err) {
                            console.log(err)
                            return;
                        }
                        console.log('Good')
                    })
                }
            }
        });
    });
}

const girlsFiles = () => {

}

module.exports = {sortUsersByGender, girlsFiles}