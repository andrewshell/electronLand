const shell = require ("electronland").shell; 

function showHelloWorldMessage () {
	if (twIsTwitterConnected ()) {
		$("#idLoggedonMessage").css ("display", "block");
		$("#idNotLoggedonMessage").css ("display", "none");
		}
	else {
		$("#idLoggedonMessage").css ("display", "none");
		$("#idNotLoggedonMessage").css ("display", "block");
		}
	}
function everySecond () {
	initTwitterMenuItems ();
	showHelloWorldMessage ();
	}
function startup () {
	var options = {
		};
	shell.init (options, function (appPrefsFromStorage) {
		initTwitterMenuItems ();
		self.setInterval (everySecond, 1000); 
		if (twIsTwitterConnected ()) {
			twGetUserInfo (twGetScreenName (), function (userinfo) {
				console.log ("startup: userinfo == " + jsonStringify (userinfo));
				$("#idUserName").text (userinfo.name);
				showHelloWorldMessage ();
				});
			}
		});
	}
