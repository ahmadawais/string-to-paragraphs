const assert = require('assert').strict;
const stringToParagraphs = require('./index.js');

const stringData = `Sentence #1. Sentence #2. Sentence #3. Sentence #4. Sentence #5. Sentence #6. Sentence #7.`;

// const parasWithThreeSentences = stringToParagraphs(stringData);
// console.log('parasWithThreeSentences: ', parasWithThreeSentences);

// assert.strictEqual(
// 	parasWithThreeSentences,
// 	`<p>Sentence #1. Sentence #2. Sentence #3.</p><p>Sentence #4. Sentence #5. Sentence #6. Sentence #7.</p>`,
// 	`Failed test #1`
// );

const parasWithOneSentences = stringToParagraphs(stringData, {
	sentencesPerPara: 2
});

console.log('parasWithOneSentences: ', parasWithOneSentences);
// assert.strictEqual(
// 	parasWithOneSentences,
// 	`<p>Sentexnce #1. Sentence #2. Sentence #3.</p> <p>Sentence #4. Sentence #5. Sentence #6.</p>`,
// 	`Failed test #2`
// );
