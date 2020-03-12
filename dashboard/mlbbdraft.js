const leftTeam = document.getElementById('leftteam');
const rightTeam = document.getElementById('rightteam');
const bestOf = document.getElementById('series');
const game = document.getElementById('game');
const round = document.getElementById('round');

function playA() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('playMLBBDraft', data);
}

function stopA() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('stopMLBBDraft', data);
}

function playB() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('playInGameMLBB', data);
}

function stopB() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('stopMLBBInGame', data);
}
