// PROFILE

let ProfileTemplate = {
	"LastSave": 0,
	"Score": 0,
	"Saves": [0],
	"Rounds": 10
}

let Profile = localStorage.getItem("Profile_2")
if(!Profile) {
	localStorage.clear()
	localStorage.setItem("Profile_2", JSON.stringify(ProfileTemplate))
	Profile = ProfileTemplate
} else {
	Profile = JSON.parse(Profile)
}