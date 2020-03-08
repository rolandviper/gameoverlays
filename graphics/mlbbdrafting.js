import { gsap } from '../node_modules/gsap/index.js';

const baseEl = document.getElementById('base');
const nameplateEl = document.getElementById('nameplate');

const leftTeam = document.getElementById('leftteam');
const rightTeam = document.getElementById('rightteam');

const middle = document.getElementById('middle');
const series = document.getElementById('series');
const game = document.getElementById('game');
const round = document.getElementById('round');

const vs = document.getElementById('vs');

const logoEl = document.getElementById('logo');
const bgEl = document.getElementById('bg');
const sponsorEl = document.getElementById('sponsor');

nodecg.listenFor('playMLBBDraft', (data) => {
	leftTeam.innerHTML = data.leftTeam;
	rightTeam.innerHTML = data.rightTeam;
	series.innerHTML = data.bestOf;
	game.innerHTML = data.game;
	round.innerHTML = data.round;

	const tl = gsap.timeline();

	tl.from([ baseEl ], 1, { opacity: 0 });
	tl.to([ baseEl ], 1, { opacity: 1 });

	tl.from([ vs ], 1, { opacity: 0 });
	tl.to([ vs ], 1, { opacity: 1 }, '-=1');

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 1 });
});

nodecg.listenFor('stopMLBBDraft', () => {
	const tl = gsap.timeline();

	tl.to([ baseEl, vs ], 1, { opacity: 0 });

	tl.to([ logoEl, sponsorEl ], 1, { opacity: 0 });

	tl.call(() => {
		leftTeam.innerHTML = '';
		rightTeam.innerHTML = '';
		series.innerHTML = '';
		game.innerHTML = '';
		round.innerHTML = '';
	});

	tl.set([ baseEl, vs, logoEl, sponsorEl ], { opacity: '' });
});
