export function generateRandomFiveDigitNumber(): number {
    return Math.floor(10000 + Math.random() * 90000);
}