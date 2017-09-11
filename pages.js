var mongoose = require("mongoose")
var Team = mongoose.model("Team");

exports.index = function(req, res){
	Team.create({
		Country: "England",
		GroupName: "D",
		CreatedOn: Date.now()
	}, function(err, team){
		var strOutput; 
		res.writeHead(200, {
			"Content-Type" : "text/plain"
		});
		if (err) {
			console.log(err);
			strOutput= "We have an error";
		} else {
			console.log("Team created: " + team);
			strOutput = team.Country + " created in Group" + team.GroupName + "\nat " + team.CreatedOn;
		}
		res.write(strOutput);
		res.end();
	});
};