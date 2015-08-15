angular.module('resume',[])
	.factory('ResumeDetailsFactory', function() {

		var resumeDetails = {
			name: "Kenneth J. Bolico",
			address: "340 Lakas St. Bacood, Sta. Mesa, Manila",
			cellphoneNum: "09330726232",
			emailAddress: "kenneth.bolico@gmail.com",
			facebook: "facebook.com/kenneth.bolico",
			github: "github.com/kenblizzard",
			objective: "I am a Web Developer with passion in creating website using Javascript technologies and is willing to learn alot more to become a talented Full Stack Web Developer in the near future. Also, I love codes and pizzas.",
			education: {
				school: "Polytechnic University of the Philippines",
				location: "Sta. Mesa, Manila",
				course: "BS Computer Science",
				year: "2011 - 2015"
			},
			technologies: {				
				webDev: ["HTML5","CSS","Javascript","NodeJs","JQuery", "AngularJS", "BackboneJS", "Bootstrap", "momentjs", "Handlebars", "Faye", "Git"],
				packageManagers: ["NPM", "Bower"],
				taskRunner: ["Grunt"],
				withBackground: ["Java", "C_Sharp"],
				database: ["MongoDB", "PostgresSQL", "MySQL"]
			},
			experience: [
				{
					employer: "Seansoft Corporation",
					startDate: new Date(2015,3, 1),
					endDate: "Present",					
					projects: [{
						name: "Scrumonline",
						url: "http://node.Scrumonline.net",
						description: "Scrum tool for tracking of projects' status and tasks management with additional features such as time entry system, and payroll system.",
						technologies: ["NodeJs","faye", "MongoDB", "BackboneJS","JQuery", "Bootstrap", "Handlebars", "Momentjs"],
						contributions: [
							"Implemented the real time updates of views of different client browsers whenever fields were modified by a user. Used 'Faye messaging' as communication tool between client and server.",
							"Implemented the upload and download of file attachments using AJAX, and MongoDB GridFS",
							"Setup 'Strider CI', a Continous Integration system for automated build and testing of the repository.",
							"Implemented automated email notification using 'nodemailer.js'.",
							"Developed the front-end using BackboneJS, JQuery, handlebars and Bootstrap."
						]
					}]
				},
				{
					employer: "Devkinetics - Internship",
					startDate: new Date(2014, 2, 31),
					endDate: new Date(2014, 5, 1),
					projects: [{
						name: "ebayanihan.org",										
						technologies: ["Java", "AngularJS","Bootstrap", "PostgresSQL"],
						description: "An online portal where users can post projects (e.g. Feeding Program) to look for sponsors and also post the records such as budgets and expenses for transparency.",
						contributions: [
							"Implemented a RESTful website using Java EE for server-side and AngularJS for the front-end"
						]
					}]

				}
			]


		}



		return {
			getDetails: function () {
				return resumeDetails;
			}
		}
	})
	.controller('MainController', ['$scope', 'ResumeDetailsFactory', function($scope, ResumeDetailsFactory) {
		$scope.resumeDetails = ResumeDetailsFactory.getDetails();
	}]);
