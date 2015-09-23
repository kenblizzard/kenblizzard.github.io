"use strict";

angular.module('resume', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: "src/views/welcome.html",
        })
        .when('/me', {
            templateUrl: "src/views/main.html",
            controller: "MainController"
        })
        .when('/connect', {
            templateUrl: "src/views/connect.html"
        })
        .when('/works', {
            templateUrl: "src/views/works.html"
        });

    }])
	.factory('ResumeDetailsFactory', function () {

	    var resumeDetails = {
	        name: "Kenneth J. Bolico",
	        address: "Manila",
	        occupation: "Software/Web Developer",
            website: "kenblizzard.github.io",
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
	        skills: {
	            mostExperienced: ["HTML5", "CSS", "Javascript", "NodeJs", "JQuery", "AngularJS", "BackboneJS", "Bootstrap", "C#", "SQL", "Java"],
	            basicKnowledge: ["PHP", "Laravel", "Python", "Ruby"],
	            tools: ["Git", "NPM", "Bower", "Grunt", "Visual Studio"],	            
	        },
	        experience: [
                {
                    employer: "Pinoy Programmers League - Non-profit Organization",
                    startDate: new Date(2015, 7, 14),
                    endDate: "Present",
                    position: "Front-End Developer",
                    projects: [{
                        name: "PPL Main Site",
                        url: "http://main.pinoyprogleague.eu.org",
                        description: "The home site of the organization",
                        technologies: ["AngularJS", "Bootstrap", "HTML5", "CSS", "Javascript"],
                        contributions: [
                            "Implemented in html/css/javascript the web design made by our Graphics Designer",
                            "Implemented the site using AngularJS Framework",
                            "Implemented the responsive view using Bootstrap"
                        ]
                    }]
                },
				{
				    employer: "Seansoft Corporation",
				    startDate: new Date(2015, 3, 1),
				    endDate: "Present",
                    position: "Software Developer",
				    projects: [{
				        name: "Scrumonline",
				        url: "http://node.Scrumonline.net",
				        description: "Scrum tool for tracking of projects' status and tasks management with additional features such as time entry system, and payroll system.",
				        technologies: ["NodeJs", "Faye", "MongoDB", "BackboneJS", "JQuery", "Bootstrap", "Handlebars", "momentjs"],
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
                    position: "Java/ AngularJS Developer",
				    projects: [{
				        name: "ebayanihan.org",
				        technologies: ["Java", "AngularJS", "Bootstrap", "PostgresSQL"],
				        description: "An online portal where users can post projects (e.g. Feeding Program) to look for sponsors and also post the records such as budgets and expenses for transparency.",
				        contributions: [
							"Implemented a RESTful website using Java EE for server-side and AngularJS for the front-end"
				        ]
				    }]

				}
	        ]


	    }


	    var works = [{
	        title: "Pinoy Programmers League Main Site",
	        description: "The Home site of the Pinoy Programmers League.",
	        url: "http://main.pinoyprogleague.eu.org/",
	        screenshots: [{
	        }],
	        highlight: "I was responsible in scaffolding and structuring this web application using AngularJS. The main goal is to ensure that the adding new modules such as content-editor, and log-in page is easy and the web application is easy to maintain"
                + '\nI also helped converting Web Design into "responsive" HTML and CSS including the effecs and animations.',
	        technologies: ["AngularJS", "Bootstrap", "HTML5","CSS3","JQuery"]
	    },
	    {
	        title: "Scrumonline",
	        description: "A scrum tool tailored with features that suits our company's (Seansoft) development process plus employee's time and work entries, and project status reports",
	        screenshots: [{
	        }],
            //highlight: "
	    }]


	    return {
	        getDetails: function () {
	            return resumeDetails;
	        }
	    }
	})
	.controller('MainController', ['$scope', 'ResumeDetailsFactory', function ($scope, ResumeDetailsFactory) {
	    $scope.resumeDetails = ResumeDetailsFactory.getDetails();
	    $scope.pageClass = "page-home";
	}]);
