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
		window.location.href = "consent.html"
	}
} else {
	Profile = JSON.parse(Profile)
}