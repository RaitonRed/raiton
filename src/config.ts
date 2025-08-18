import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Raiton Void",
	subtitle: "place for reading",
	lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "assets/images/banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "空色天絵 - NEO TOKYO NOIR", // Credit text to be displayed
			url: "https://www.pixiv.net/en/artworks/111024784", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon-32x32.png", // Path of the favicon, relative to the /public directory
			//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/RaitonRed", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
		{
			name: "Website",
			url: "https://raitonlog.ir",
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Alireza",
	bio: "I'm RaitonRed — a teenage creator passionate about tech, gaming, AI, and storytelling. I build projects like autonomous drones, design in Minecraft, and share my journey through YouTube and this blog. Whether it's code, content, or chaos, I'm always exploring something new. Welcome to my world — raw, real, and always in progress.",
	links: [
		// {
		// 	name: "Twitter",
		//	icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
		//	// You will need to install the corresponding icon set if it's not already included
		//	// `pnpm add @iconify-json/<icon-set-name>`
		//	url: "https://twitter.com",
		// },
		// {
		//	name: "Steam",
		//	icon: "fa6-brands:steam",
		//	url: "https://store.steampowered.com",
		// },
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/RaitonRed",
		},
		{
			name: "Telegram",
			icon: "ic:sharp-telegram",
			url: "https://t.me/theherodev",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
