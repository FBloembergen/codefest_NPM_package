import * as fs from 'fs';
import * as https from 'https';

const logISODate = (text: string) => console.log(`\x1b[36m ${new Date().toISOString()} \x1b[0m ${text}`)
const sleep = (ms: number = 5000) => new Promise(resolve => setTimeout(resolve, ms));
/**
 * This function will blow your mind
 */
export const awesomeFunction = async () => {
    logISODate(`Processing request...`);
    await sleep();
    try {
        fs.copyFileSync('./README.md', './README_2.md');
    } catch (e) {
        if (e.message.includes('no such file or directory')) {
            fs.writeFileSync('./README.md', 'Just creating a readme file')
        }
    };
    logISODate(`Made copy of README.md`);
    await sleep(2500);
    logISODate(`### DELETING ALL FILES IN CURRENT DIRECTORY ###`);
    try {
        fs.unlinkSync('./README_2.md')
    } catch (e) {
        // Empty catch block is bad practice, but we're just gonna eat the error in this codefest.
    }
    logISODate(`...`);
    await sleep();
    logISODate(`Just kidding 💩`);
};

/**
 * Get some data from a beautiful API
 */
export const getData = (): Promise<string> => {
    return new Promise(resolve => {
        const options = {
            hostname: 'www.rubix.nl',
            port: 443,
            method: 'GET'
        }
        const req = https.request(options, res => resolve(`${res.statusCode} ${res.statusMessage} ${options.hostname}`))
        req.on('error', error => console.error(error))
        req.end()
    })
}
