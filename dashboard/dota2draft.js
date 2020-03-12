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

	nodecg.sendMessage('playdota2draft', data);
}

function stopA() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('stopdota2draft', data);
}

function playB() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('playdota2ingame', data);
}

function stopB() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('stopdota2ingame', data);
}
