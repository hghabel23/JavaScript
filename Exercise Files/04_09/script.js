
// var course = new Object();

// // course.title = "Essential Training";
// // course.instructor = "Morten Handerick";
// // course.level = 6053;
// // course.published = true;

// var course = {
	// title : "Essential Training",
    // instructor : "Morten Handerick",
	// level : 6053,
	// published : true,
	// views : 0,
	// updateViews : function(){
		// return ++course.views;
	// },
// }


/* Create an instructor of an object */
function Course(title, instructor, level, published, views){
	this.title = title;
	this.instructor = instructor;
	this.level = level;
	this.published = published;
	this.views = views;
	this.updateViews = function(){
		return ++this.views;
	}
}


var course01 = new Course("JavaScript","Me",1,true,12);
var course02 = new Course("C#","Me",2, false, 100);

var courseList = [
	new Course("JavaScript","Me",1,true,12),
	new Course("C#","Me",2, false, 100)
];