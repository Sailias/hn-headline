function getHeadline() {
	var hsh = {
		tech: ["Ruby", "Rails", "Javascript", "Coffeescript", "Sass", "Less", "Grunt", "Gulp", "Npm", "Make", "Ubuntu", "Linux", "Unix", "Apache", "Tomcat", "Nginx", "Puma", "R", "Go", "Objective-c", "Swift", "Java", "AWS", "Twitter", "Facebook", "Instagram", "Python", "Laravel", "Cold Fusion", "Django", "Cake", "OSX", "Oauth", "ElasticSearch", "Redis", "Php", "Node", "Meteor", "Sails.js", "Angular", "Ember", "Backbone", "CGI", "Perl"],
		statement: ["Why I stopped using", "Why you shouldn't use", "Stop using", "Don't use", "We stopped using", "Why we stopped using", "Why we don't like", "Why we don't use", "We don't use", "When you shouldn't use", "The problem with", "The end of", "It's over for"],
		questionOne: ["Is it time to ditch", "Should you stop using", "Should we stop using", "When will you stop using", "When shouldn't you use", "How do you stop using", "How do you ditch"],
		questionTwo: ["Why"],
		questionThree: ["Is"],
		questionFour: ["Where"],
		terminate: ["dead", "outdated", "too slow", "deprecated", "a thing of the past", "obsolete", "ancient", "out of date", "dated", "behind the times"],
		bridge: ["is", "was", "isn't"],
		puncuation: [".", "!"],
		questionMark: ["?"]
	}

	var arr = [
		["statement", "tech", "puncuation"],
		["questionOne", "tech", "questionMark"],
		["questionTwo", "bridge", "tech", "terminate", "questionMark"],
		["questionTwo", "tech", "questionMark"],
		["tech", "bridge", "terminate", "puncuation"],
		["questionThree", "tech", "terminate", "questionMark"],
		["questionFour", "bridge", "tech", "questionMark"]		

	]

	var item = arr[Math.floor(Math.random()*arr.length)];
	var sentenceArr = []

	for (x=0; x < item.length; x++) {
		var ele = hsh[item[x]]
		var word = ele[Math.floor(Math.random()*ele.length)];

		if (item[x] === "tech")
			word = "<em>" + word + "</em>"
		sentenceArr.push(word)
	}

	var end = sentenceArr.pop();
	document.getElementById('headline').innerHTML = sentenceArr.join(" ") + end;

}

getHeadline();