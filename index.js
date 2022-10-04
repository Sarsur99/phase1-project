document.addEventListener('DOMContentLoaded', fetcher)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '95f070c36cmsh0f4696c3c3adb22p1ac720jsn60ec90ae2c5f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

let globalArray = [];

function fetcher(){
fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=browser&sort-by=release-date', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		globalArray = response
		renderGame(globalArray)
		// console.log(globalArray)
	})
	.catch(err => console.error(err));

}


function renderGame(globalArray){
	for(let i = 0; i < 13; i++){
		// console.log('game ' + i)
		const gameBar = document.getElementById('game-bar')
		const newImg = document.createElement('img')
		newImg.src = globalArray[i].thumbnail
		newImg.setAttribute('name', globalArray[i].title)
		newImg.setAttribute('genre', globalArray[i].genre)
		gameBar.append(newImg)
		// const gameName = document.getElementById('name')
		const gameName = document.getElementById('name')

		newImg.addEventListener('click', showInfo)
}

function showInfo(e){
	const gameName = document.getElementById('name')
	const displayImg = document.getElementById('displayImg')
	const genreTag = document.getElementById('genreTag')
	// displayImg.src = e.target.thumbnail
	gameName.textContent = e.target.name
	displayImg.src = e.target.src
	// genreTag.textContent = e.target.genre
	genreTag.innerText = `Genre: ${e.target.getAttribute('genre')}`
	console.log(genreTag)

	

}

	// gameData.forEach(game =>{
	// 	const gameBar = document.getElementById('game-bar')
	// 	const newImg = document.createElement('img')
	// 	newImg.src = game.thumbnail
	// 	gameBar.append(newImg)
		
	// })
} 

// h4.textContent = `"Publisher:" ${e.target.genre}`