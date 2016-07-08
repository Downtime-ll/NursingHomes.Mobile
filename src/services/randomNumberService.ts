/// <reference path="../../typings/index.d.ts" />

export function generateRandomNumber() {
    // await delay(1000);
    return Math.floor(Math.random() * 100);
}

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
