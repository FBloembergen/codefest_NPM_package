import * as fs from 'fs';

/**
 * Yes, it will be awesome.
 */
export const awesomeFunction = async () => {
    logISODate(`Processing request...`);
    try {
        fs.copyFileSync('./README.md', './README_2.md');
    } catch (e) {
        if (e.message.includes('no such file or directory')) {
            fs.writeFileSync('./README.md', 'Just creating a readme file')
        }
    };
    logISODate(`Made copy of README.md`);
    await new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 5000);
    });
    logISODate(`### DELETING ALL FILES IN CURRENT DIRECTORY ###`);
    await new Promise((resolve, reject) => {
        try {
            fs.unlinkSync('./README_2.md')
        } catch (e) { }
        setTimeout(() => resolve(), 5000);
    });
    logISODate(`...`);
    logISODate(`Just kidding 💩`);
};

const logISODate = (text: string): void => {
    console.log(`\x1b[36m ${new Date().toISOString()} \x1b[0m ${text}`)
}
