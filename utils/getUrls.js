const urls = [
	{ name: "Home", url: `/` },
	// { name: "About", url: `/about` },
	// { name: "Coding4Cauvery", url: `/coding4cauvery` },
	{ name: "Projects", url: `/projects` },
];
const mobileUrls = [...urls, { name: "Services - Hire Us", url: "/services" }];
export default function getUrls(type) {
	if (type === "urls") return urls;
	if (type === "mobileUrls") return mobileUrls;
}
