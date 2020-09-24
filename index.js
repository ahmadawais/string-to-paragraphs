/**
 * String To Paragraphs.
 *
 * Convert a large raw string to paragraphs of n sentences
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
module.exports = (stringData, {sentencesPerPara = 3}) => {
	let paras = [];

	// Convert string to array of sentences.
	let raw = stringData.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');

	// Create paras of sentencesPerPara sentences.
	raw.map(sentence => paras.push(raw.splice(0, sentencesPerPara)));

	// Join sentences with a space if more than 1 per para.
	if (!sentencesPerPara === 1) {
		paras = paras.map(para => para.join(` `));
	}

	// Create <p></p> HTML for paras.
	paras = paras.map(para => (para = `<p>${para}</p>`));
	paras = paras.join(' ');

	return paras;
};
