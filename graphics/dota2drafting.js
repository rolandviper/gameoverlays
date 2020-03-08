import { gsap } from '../node_modules/gsap/index.js';

const baseEl = document.getElementById('base');
const nameplateEl = document.getElementById('nameplate');

//The information of the teams playing
const leftTeam = document.getElementById('leftteam');
const rightTeam = document.getElementById('rightteam');

//The information ingame on the top right
const series = document.getElementById('series');
const game = document.getElementById('game');
const round = document.getElementById('round');

const vs = document.getElementById('vs');
const middle = document.getElementById('versus'); //VERSUS word

const logoEl = document.getElementById('logo');
const bgEl = document.getElementById('bg');
const sponsorEl = document.getElementById('sponsor');

nodecg.listenFor('playdota2draft', (data) => {
	leftTeam.innerHTML = data.leftTeam;
	rightTeam.innerHTML = data.rightTeam;
	series.innerHTML = data.bestOf;
	game.innerHTML = data.game;
	round.innerHTML = data.round;

	const tl = gsap.timeline();

	tl.from([ baseEl ], 1, { opacity: 0 });
	tl.to([ baseEl ], 1, { opacity: 1 });

	tl.from([ middle ], 1, { opacity: 0, width: 0 });
	tl.from([ nameplateEl ], 1, { opacity: 0 });

	tl.from([ series ], 1, { opacity: 0, width: 0 });
	tl.from([ game ], 1, { opacity: 0, width: 0 });
	tl.from([ round ], 1, { opacity: 0, width: 0 });

	tl.from([ bgEl ], 1, { opacity: 0, width: 0 });

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 1 });
});

nodecg.listenFor('stopdota2draft', () => {
	const tl = gsap.timeline();

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 0 });
	tl.to([ bgEl, vs ], 1, { opacity: 0, width: 0 });

	tl.to([ baseEl ], 1, { opacity: 0 });

	tl.call(() => {
		leftTeam.innerHTML = '';
		rightTeam.innerHTML = '';
		series.innerHTML = '';
		game.innerHTML = '';
		round.innerHTML = '';
	});

	tl.set([ baseEl, vs, logoEl, sponsorEl, bgEl ], { opacity: '', width: '' });
});
