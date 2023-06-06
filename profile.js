// PROFILE

let ProfileTemplate = {
	"LastSave": 0,
	"Score": 0,
	"Saves": [0]
}

let Profile = localStorage.getItem("Profile")
if(!Profile) {
	localStorage.setItem("Profile", JSON.stringify(ProfileTemplate))
	Profile = ProfileTemplate
} else {
	Profile = JSON.parse(Profile)
}