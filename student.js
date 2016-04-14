


var student = function (name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase) {
	this.name = "";
	this.gender = "";
	this.grade = "";
	this.GPA = "";
	this.detentions = "";
	this.sleepingInClass = "";
	this.catchPhrase = "";

	this.canStudentHaveFun = function () {
		if ((this.detentions < 10) && (this.GPA > 2)){
			console.log ("the students can have fun");
		}
	}


};

module.exports = student;