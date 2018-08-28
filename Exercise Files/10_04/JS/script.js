const IMAGES = document.querySelectorAll("img");

function makeSrcSet(imgSrc){
	let markup = [];
	let width = 400; //smalles size for our images
	
	for (let i = 0; i <5; i++){
		markup[i] = imgSrc + "-" + width + ".jpg " + width + "w";
		width += 400;
	}
	
	return markup.join(); //join will put all the items in a string with comma seperator
	
}

for (let i = 0; i<IMAGES.length; i++) {
    let imgSrc = IMAGES[i].getAttribute("src");
    imgSrc = imgSrc.slice(0,-8);
	let srcset = makeSrcSet(imgSrc);
    console.log(srcset);

    let type = IMAGES[i].getAttribute("data-type");
    console.log(type);
}
