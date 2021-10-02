const fs = require('fs');
const path = require('path');

const boysDir = path.join(__dirname, 'boys');
const girlsDir = path.join(__dirname, 'girls');

fs.readdir(girlsDir, (err, files) => {
    files.forEach(file => {
        const listOfPeopleFileBoys = path.join(__dirname, 'boys', file);
        const listOfPeopleFileGirls = path.join(__dirname, 'girls', file);
        const listOfGirls = require(listOfPeopleFileGirls);

        for (const listOfPerson of listOfGirls) {

            if (listOfPerson.gender === 'Male') {
                fs.rename(listOfPeopleFileGirls, listOfPeopleFileBoys, err=>{
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Good');
                });
            }

        }
    });
});

fs.readdir(boysDir, (err, files) => {
    files.forEach(file => {
        const listOfPeopleFileBoys = path.join(__dirname, 'boys', file);
        const listOfPeopleFileGirls = path.join(__dirname, 'girls', file);
        const listOfBoys = require(listOfPeopleFileBoys);

        for (const listOfPerson of listOfBoys) {

            if (listOfPerson.gender === 'Female') {
                fs.rename(listOfPeopleFileBoys, listOfPeopleFileGirls, err=>{
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log('Good');
                });
            }

        }
    });
});