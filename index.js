/**
 * String To Paragraphs.
 *
 * Convert a large raw string to paragraphs of n sentences
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
module.exports = (stringData, options) => {
	const defaultOptions = {sentencesPerPara: 3};
	const opts = {...defaultOptions, ...options};
	const {sentencesPerPara} = opts;

	// Hold them paras.
	let paras = [];

	// Convert string to array of sentences.
	let raw = stringData.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
	console.log('raw: ', raw);

	// Create paras of sentencesPerPara sentences.
	let count = sentencesPerPara;
	while (count < 1) {
		count--;
		raw.map(sentence => paras.push(raw.splice(0, sentencesPerPara)));
	}
	paras.push([raw.join(' ')]);
	console.log('paras: ', paras);

	// Join sentences with a space if more than 1 per para.
	if (sentencesPerPara !== 1) {
		paras = paras.map(para => para.join(` `));
		console.log('paras: ', paras);
	}

	// Create <p></p> HTML for paras.
	paras = paras.map(para => (para = `<p>${para}</p>`));
	console.log('paras: ', paras);
	paras = paras.join('');
	console.log('paras: ', paras);

	return paras;
};
