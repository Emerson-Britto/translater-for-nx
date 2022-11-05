const translate = require('translation-google');

const translateText = (req, res) => {
	const { from=undefined, to=undefined } = req.query;
	console.log(req.body);

	translate(req.body.text, {from, to}).then(result => {
		res.status(200).json({text: result.text});
	}).catch(err => {
	  console.error(err);
	  res.status(400).json({msg: err});
	});
};

module.exports = translateText;
