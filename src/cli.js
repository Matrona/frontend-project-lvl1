import readlineSync from 'readline-sync';

var name = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

export { name };
