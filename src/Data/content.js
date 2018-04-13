import { Replay, Stats, Tactical } from '../components/assets/images/icons-home'; //Import png icons.
const contentData = [{
	Components: [{
		name: 'Nav.js',
		navNames: ['Research', 'Services', 'Games', 'About', 'Sign Up'],
		navLinks: ['#Research', '#Services', '#Games', '#About', '#SignUp'],
	}, {
		name: 'Home.js',
		title: 'ANALYTICS ',
		titleTopColored: 'FOR ESPORT & GAME ',
		titleTopAfter: 'DEVELOPMENT',
		titleTag: 'THE FUTURE OF ',
		titleTagColored: 'GAMING INTELLIGENCE',
		titleTagAfter: ' IS COMING SOON',
		replayService: 'Replay Analysis',
		overallService: 'Overall Stats',
		tacticalService: 'Tactical Analysis',
		betaTag: 'Beta',
		figcaption: ["Replay Analysis", "Overall Stats", "Tactical Analysis"], // Figcaption text.
		// svgs: [
		// 	// Svg file src path.
		// 	Twitter,
		// 	Instagram,
		// 	GooglePlus,
		// 	Facebook
		// ],
		pngs: [
			// Png file src path.
			Replay,
			Stats,
			Tactical
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