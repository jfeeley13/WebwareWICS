function addMember() {
	var name = document.getElementById("name").value
	var email = document.getElementById("email").value
	var oReq = new XMLHttpRequest()
	
	function reqListener() {
		console.log("calledback")
		listMembers()
  }
	oReq.addEventListener("load", reqListener)
  oReq.open("PUT", "/addMember", true)
  oReq.send('name=' + name + '&email=' + email)
}

function listMembers() {
	var oReq = new XMLHttpRequest()
	function reqListener() {
		console.log("listed")
		writeFromDB(JSON.parse(this.responseText))
	}
	oReq.addEventListener("load", reqListener)
  oReq.open("POST", "/listMembers", true)
  oReq.send()
}

function writeFromDB(members) {
	var mList = document.getElementById("mlist")
	mList.innerHTML = "<th>Name</th><th>Email</th>"
	members.forEach(function(t) {
			mList.innerHTML += "<tr><td>" + t.name + "</td>" + "<td>" + t.email + "</td></tr>"
	})
}

document.addEventListener("DOMContentLoaded", function(){
	listMembers()
})