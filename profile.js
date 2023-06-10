// PROFILE

let ProfileTemplate = {
	"LastSave": 0,
	"Score": 0,
	"Saves": [0],
	"Rounds": 10
}


function createProfile() {
	localStorage.clear()
	localStorage.setItem("Profile_2", JSON.stringify(ProfileTemplate))
	Profile = ProfileTemplate
}

let Profile = localStorage.getItem("Profile_2")
if(!Profile) {
	// CONSENT
	if(!window.location.href.includes("consent.html")) {
		let PAGENAME = window.location.href.split("/")
		PAGENAME = PAGENAME[PAGENAME.length-1]
		window.location.href = "consent.html?redirect="+PAGENAME;
	}
} else {
	Profile = JSON.parse(Profile)
}