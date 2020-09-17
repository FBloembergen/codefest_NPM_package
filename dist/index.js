"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.awesomeFunction = void 0;
var fs = __importStar(require("fs"));
/**
 * Yes, it will be awesome.
 */
exports.awesomeFunction = function () {
    logISODate("Processing request...");
    try {
        fs.copyFileSync('./README.md', './README_2.md');
    }
    catch (e) {
        if (e.message.includes('no such file or directory')) {
            fs.writeFileSync('./README.md', 'Just creating a readme file');
        }
    }
    ;
    logISODate("Made copy of README.md");
    logISODate("### DELETING ALL FILES IN CURRENT DIRECTORY ###");
    try {
        fs.unlinkSync('./README_2.md');
    }
    catch (e) { }
    logISODate("...");
    logISODate("Just kidding \uD83D\uDCA9");
};
var logISODate = function (text) {
    console.log("\u001B[36m " + new Date().toISOString() + " \u001B[0m " + text);
};
