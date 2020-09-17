import * as fs from 'fs';

export const awesomeFunction = async () => {
    console.log(`Processing request...`);
    fs.copyFileSync('./README.md', './README_2.md');
    console.log(`Made copy of README.md`);
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 5000);
    });
    console.log(`### DELETING ALL FILES IN CURRENT DIRECTORY ###`);
    await new Promise((resolve, reject) => {
        fs.unlinkSync('./README_2.md');
        setTimeout(() => resolve(), 5000);
    });
    console.log(`...`);
    console.log(`Just kidding 💩`);
};
