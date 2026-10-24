//#region node_modules/.nitro/vite/services/ssr/assets/temple-D2raIs_f.js
/**
* All temple facts live here so administrators can replace placeholders
* with verified information. Anything marked PENDING must be confirmed
* by the temple administration before publishing.
*/
var PENDING = "To be confirmed by temple administration";
var temple = {
	name: "Sri Veerabhadrakali Temple",
	shortName: "Sri Veerabhadrakali",
	address: null,
	phone: null,
	email: null,
	mapsQuery: null,
	timings: [
		{
			label: "Morning Darshan",
			value: null
		},
		{
			label: "Evening Darshan",
			value: null
		},
		{
			label: "Special Days",
			value: null
		}
	],
	facilities: [
		"Parking",
		"Footwear stand",
		"Drinking water",
		"Prasadam counter"
	].map((f) => ({
		name: f,
		confirmed: false
	})),
	social: []
};
var news = [
	{
		slug: "festival-announcement",
		body: ["This is an administrator-confirmation placeholder, not a confirmed festival announcement.", "Dates, programme details and visitor arrangements will be published after approval by the temple administration."],
		category: "Festival Announcements",
		title: "Upcoming festival announcement",
		excerpt: "Placeholder — the temple office will publish confirmed festival dates and programme details here.",
		date: null
	},
	{
		slug: "special-darshan-update",
		body: ["No special darshan schedule has been confirmed for this website.", "Confirmed timing changes and visitor arrangements will be published here by the temple administration."],
		category: "Special Darshan Updates",
		title: "Special darshan update",
		excerpt: "Placeholder — changes to darshan timings or special darshan arrangements will appear here.",
		date: null
	},
	{
		slug: "community-activities",
		body: ["Community activity details are awaiting confirmation from the temple administration.", "Approved seva activities, volunteer opportunities and community programmes will be announced here."],
		category: "Community Activities",
		title: "Temple news and community activities",
		excerpt: "Placeholder — news about seva activities, volunteer drives and community programmes.",
		date: null
	}
];
var testimonials = [
	{
		quote: "Placeholder testimonial — awaiting a permission-approved message from a devotee.",
		name: "Devotee (placeholder)",
		location: null
	},
	{
		quote: "Placeholder testimonial — awaiting a permission-approved message from a devotee.",
		name: "Devotee (placeholder)",
		location: null
	},
	{
		quote: "Placeholder testimonial — awaiting a permission-approved message from a devotee.",
		name: "Devotee (placeholder)",
		location: null
	}
];
var faqs = [
	{
		q: "What are the temple darshan timings?",
		a: `Darshan timings will be listed here once verified. ${PENDING}.`
	},
	{
		q: "Where is Sri Veerabhadrakali Temple located?",
		a: `The verified temple address will be published here. ${PENDING}.`
	},
	{
		q: "Are special sevas available?",
		a: `Archana, special puja, abhishekam and other sevas are listed on this page; availability and offerings are ${PENDING.toLowerCase()}.`
	},
	{
		q: "Which festivals are celebrated?",
		a: `The temple's festival calendar will be shared here. ${PENDING}.`
	},
	{
		q: "Is there parking near the temple?",
		a: `Parking information will be added once verified. ${PENDING}.`
	},
	{
		q: "How can devotees contact the temple?",
		a: `Official contact details will be published here. ${PENDING}.`
	}
];
//#endregion
export { testimonials as a, temple as i, faqs as n, news as r, PENDING as t };
