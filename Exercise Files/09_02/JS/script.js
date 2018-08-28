// the ^ means any object that has the href attribute which starts with the value "http".
var extLinks = document.querySelectorAll('a[href^="http"]');

for (var i = 0; i < extLinks.length; i++){
	console.log(extLinks[i]);
	if (!extLinks[i].hasAttribute("target")){
		extLinks[i].setAttribute("target","_blank");
	}
}