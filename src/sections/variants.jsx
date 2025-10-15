
export const parent_variant = {
	init: {
		scale: 0,
		opacity: 0
	},
	animate : {
		scale: 1,
		opacity:1,
		transition: {
			type: 'spring',
			bounce: 0.25,
			staggerChildren: 0.3,
			when:'beforeChildren',

		}
	},
	exit: {
		scale: 0,
	}
};

export const child_variant = {
	init: {
		y:50 ,
		opacity:0,
	},
	animate: {
		y:0,
		opacity:1,
		transition: {
			type: 'spring',
			bounce: 0.2,
		}
	},
	exit: {
		opacity:0
	}
}
