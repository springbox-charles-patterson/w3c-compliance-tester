var w3cjs = require('w3cjs');

var urls = [
  "http://ffc-qa.azurewebsites.net/",
  "http://ffc-qa.azurewebsites.net/site-map",
  "http://ffc-qa.azurewebsites.net/find-local-lender",
  "http://ffc-qa.azurewebsites.net/find-rural-real-estate",
  "http://ffc-qa.azurewebsites.net/landing",
  "http://ffc-qa.azurewebsites.net/sign-up",
  "http://ffc-qa.azurewebsites.net/who-we-are",
  "http://ffc-qa.azurewebsites.net/what-we-do",
  "http://ffc-qa.azurewebsites.net/how-were-different",
  "http://ffc-qa.azurewebsites.net/faq",
  "http://ffc-qa.azurewebsites.net/glossary",
  "http://ffc-qa.azurewebsites.net/careers",
  "http://ffc-qa.azurewebsites.net/privacy-policy",
  "http://ffc-qa.azurewebsites.net/SearchResults?query=land",
  "http://ffc-qa.azurewebsites.net/property-details?propertyIDs=2696053,3827987,2596209,2696148"
];

for (var i = 0, length = urls.length; i < length; i++) {
  w3cjs.validate({
	file: urls[i], 
	output: 'html', 
	callback: function (res) {
		console.log(res);
	}
  });
}
