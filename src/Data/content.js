import { Replay, Stats, Tactical } from '../components/assets/images/icons-home'; //Import png icons.
import { HeaderRL } from '../components/assets/images/game-headers'; //Import png game headers
const contentData = [{
	Components: [{
		name: 'Nav.js',
		navNames: ['Login / Signup'],
		navLinks: ['#Login/Signup'],
	}, {
		name: 'Home.js',
		title: 'Esports ',
		titleTopColored: 'Analytics ',
		titleTopAfter: 'and Research',
		titleTag: 'Lorem ipsum dolor sit amet, et has eros atqui abhorreant ',
		titleTagColored: 'Lorem ipsum dolor sit amet ',
		titleTagAfter: 'Lorem ipsum dolor sit amet',
		betaTag: 'Beta',
		figcaption: ["Replay Analysis", "Overall Stats", "Tactical Analysis"], // Figcaption text.
		svgs: [
			// Svg file src path.
			'fa fa-twitter fa-1x',
			'fa fa-facebook-square fa-1x',
			'fa fa-google-plus fa-1x',
			'fa fa-instagram fa-1x'
		],
		pngs: [
			// Png file src path.
			Replay,
			Stats,
			Tactical
		],
		figureImages: [
			HeaderRL,
		]
	}],
	// 	name: '',
	// 	navNames: ['Team', 'Services', 'Showcase', 'Blog', 'SignUp'],
	// 	navLinks: ['#Team', '#Services', '#Showcase', '#Blog', '#SignUp'],
	// },
	// {
	// 	name: 'last',
	// 	title: 'The Future',
	// 	titleTag: 'of gaming intelligence is coming soon',
}, ];
export default contentData;
