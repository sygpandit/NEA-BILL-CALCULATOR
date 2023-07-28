let displayBox = document.getElementById('info')
let loading = document.getElementById('loading')
let displaymsg = document.getElementById('displaymsg')


let submitButton = document.getElementById('btn')
submitButton.addEventListener('click', delay)

let fetchElementAmpere = document.getElementById('ampere')
fetchElementAmpere.onblur = delay()
//let currentUnit = document.getElementById('currentUnit').value

//let previousUnit = document.getElementById('previousUnit').value


function delay() {
	loading.style.display = "inline"
	displaymsg.style.display = "inline"
	displayBox.innerText = "Calculating..."
	if (loading.style.display = "inline") {
		setTimeout(OkMain, 1000)
	}

}

function OkMain() {
	//	let unit = currentUnit - previousUnit
	ampere = document.getElementById('ampere').value
	let unit = document.getElementById('unit').value
	// This is for 5 ampere
	if (ampere == 5) {
		if (unit <= 20 && unit >= 0) {
			displayBox.innerText = (30)
		}
		else if (unit <= 30 && unit > 20) {
			let cost = unit * 7
			displayBox.innerText = (50 + cost)
		}
		else if (unit <= 50 && unit > 30) {
			let cost = unit * 8.5
			displayBox.innerText = (75 + cost)
		}
		else if (unit <= 150 && unit > 50) {
			let cost = unit * 10
			displayBox.innerText = (100 + cost)
		}
		else if (unit <= 250 && unit > 150) {
			let cost = unit * 11
			displayBox.innerText = (125 + cost)
		}
		else if (unit <= 400 && unit > 250) {
			let cost = unit * 12
			displayBox.innerText = (150 + cost)
		}
		else if (unit > 400) {
			let cost = unit * 13
			displayBox.innerText = (175 + cost)
		}
		else {
			displayBox.innerText = "Oops, Something went wrong!"

		}
	}
	// 5 ampere is finished
	//15 ampere starts
	else if (ampere == 15) {
		if (unit <= 20 && unit >= 0) {
			let cost = unit * 4
			displayBox.innerText = (50 + cost)
		}
		else if (unit <= 30 && unit > 20) {
			let cost = unit * 7
			displayBox.innerText = (75 + cost)
		}
		else if (unit <= 50 && unit > 30) {
			let cost = unit * 8.5
			displayBox.innerText = (100 + cost)
		}
		else if (unit <= 150 && unit > 50) {
			let cost = unit * 10
			displayBox.innerText = (125 + cost)
		}
		else if (unit <= 250 && unit > 150) {
			let cost = unit * 11
			displayBox.innerText = (150 + cost)
		}
		else if (unit <= 400 && unit > 250) {
			let cost = unit * 12
			displayBox.innerText = (175 + cost)
		}
		else if (unit > 400) {
			let cost = unit * 13
			displayBox.innerText = (200 + cost)
		}
		else {
			displayBox.innerText = "Oops, Something went wrong!"
		}

	}
	//15 ampere is finished
	//30 ampere starts
	else if (ampere == 30) {
		if (unit <= 20 && unit >= 0) {
			let cost = unit * 5
			displayBox.innerText = (75 + cost)
		}
		else if (unit <= 30 && unit > 20) {
			let cost = unit * 7
			displayBox.innerText = (100 + cost)
		}
		else if (unit <= 50 && unit > 30) {
			let cost = unit * 8.5
			displayBox.innerText = (125 + cost)
		}
		else if (unit <= 150 && unit > 50) {
			let cost = unit * 10
			displayBox.innerText = (150 + cost)
		}
		else if (unit <= 250 && unit > 150) {
			let cost = unit * 11
			displayBox.innerText = (175 + cost)
		}
		else if (unit <= 400 && unit > 250) {
			let cost = unit * 12
			displayBox.innerText = (200 + cost)
		}
		else if (unit > 400) {
			let cost = unit * 13
			displayBox.innerText = (225 + cost)
		}
		else {
			displayBox.innerText = "Oops, Something went wrong!"
		}
	}
	//60 ampere starts
	else if (ampere == 60) {
		if (unit <= 20 && unit >= 0) {
			let cost = unit * 6
			displayBox.innerText = (125 + cost)
		}
		else if (unit <= 30 && unit > 20) {
			let cost = unit * 7
			displayBox.innerText = (150 + cost)
		}
		else if (unit <= 50 && unit > 30) {
			let cost = unit * 8.5
			displayBox.innerText = (175 + cost)
		}
		else if (unit <= 150 && unit > 50) {
			let cost = unit * 10
			displayBox.innerText = (200 + cost)
		}
		else if (unit <= 250 && unit > 150) {
			let cost = unit * 11
			displayBox.innerText = (225 + cost)
		}
		else if (unit <= 400 && unit > 250) {
			let cost = unit * 12
			displayBox.innerText = (250 + cost)
		}
		else if (unit > 400) {
			let cost = unit * 13
			displayBox.innerText = (275 + cost)
		}
		else {
			displayBox.innerText = "Oops, Something went wrong!"
		}
	}
	else {
		displayBox.innerText = "Oops, Something went wrong!"

	}

	if (displayBox.innerText == "Oops, Something went wrong!") {
		loading.style.display = 'none'
		displaymsg.style.display = "none"
	}
	loading.style.display = 'none'
}
