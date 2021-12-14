const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInLeft = {
	initial: { x: 48, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: {
		duration: 0.6,
		ease: easing,
		type: "spring",
		bounce: 0.25,
	},
};

const fadeInUp = {
	initial: { y: 84, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: {
		duration: 0.6,
		ease: easing,
	},
};

const stagger = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
		},
	},
};
const fastStagger = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const pageLoad = {
	exit: { opacity: 0 },
	animate: { opacity: 1 },
	initial: { opacity: 0 },
	transition: {
		duration: 0.6,
		ease: easing,
	},
};
const fadeIn = {
	animate: { opacity: 1 },
	initial: { opacity: 0 },
	exit: { opacity: 0 },
	transition: {
		duration: 0.6,
		delay: 0.2,
		ease: easing,
	},
};
const fadeInDelay = {
	animate: { opacity: 1 },
	initial: { opacity: 0 },
	exit: { opacity: 0 },
	transition: {
		duration: 0.6,
		delay: 0.3,
		ease: easing,
	},
};
const hover = {
	scale: 1.08,

	transition: {
		duration: 0.333,
		delay: 0,
		ease: easing,
	},
};
const smallHover = {
	scale: 1.02,
};
const tap = { scale: 0.84 };
export {
	stagger,
	fadeInUp,
	fadeInLeft,
	easing,
	pageLoad,
	fadeIn,
	hover,
	tap,
	fadeInDelay,
	smallHover,
	fastStagger,
};
