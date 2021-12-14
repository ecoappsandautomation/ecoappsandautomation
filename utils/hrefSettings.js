export default function hrefSettings(source, medium, content, url) {
	const hrefData = {
		pathname: url,
		query: {
			utm_source: source,
			utm_medium: medium,
			utm_content: content,
		},
	};
	return hrefData;
}
