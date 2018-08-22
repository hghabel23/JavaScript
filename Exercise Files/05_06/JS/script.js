
// create a figure caption for the moon image.

//create instances of the class 
const FEATURE = document.querySelector(".featured-image");
const THEIMAGE = FEATURE.querySelector("img");

//create a variable to keep the text of "alt"
var altText = THEIMAGE.getAttribute("alt");

//add figcaption element into the document
var captionElement = document.createElement("figcaption");

/* //create a variable to keep the text in a textnode. ??
var captionText = document.createTextNode(altText);

//add the caption text child into the caption element.
captionElement.appendChild(captionText);

//append caption element to the FEATURE class
FEATURE.appendChild(captionElement); */

/* use below two lines instead of the commented lines above  */
captionElement.append(altText); //here automatically put altText inside figcaption.
FEATURE.append(captionElement);


//remove content for "alt" attribute
THEIMAGE.setAttribute("alt","");