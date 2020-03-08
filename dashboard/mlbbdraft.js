const leftTeam = document.getElementById('leftteam');
const rightTeam = document.getElementById('rightteam');
const bestOf = document.getElementById('series');
const game = document.getElementById('game');
const round = document.getElementById('round');

function play() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('playMLBBDraft', data);
}

function stop() {
	const data = {
		leftTeam: leftTeam.value,
		rightTeam: rightTeam.value,
		bestOf: bestOf.value,
		game: game.value,
		round: round.value
	};

	nodecg.sendMessage('stopMLBBDraft', data);
}
