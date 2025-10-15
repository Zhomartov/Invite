import { motion, AnimatePresence } from "framer-motion";

const parent_variant = {
	animate: {
	},
};

const child_variant = {
	init: { pathLength: 0  , opacity:0},
	animate:(index) =>( {
		pathLength: 1,
		opacity:1,
		transition: {
			delay: index,
			duration: 1.5, 
			ease: "easeInOut",
		},
	}),
};

const Logo = () => {
	return (
		<AnimatePresence mode="wait">
		<motion.svg
		variants={parent_variant}
		initial="init"
		animate='animate'
		exit="exit"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		stroke="#D15FBF"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-full h-full fill-none"
		>
		<path
		stroke="none"
		d="M0 0h24v24H0z"
		fill="none"
		/>
		<motion.path
		key="path-3"
		variants={child_variant}
		d="M6 8h4l-2 8"
		custom={0.5}
		/>
		<motion.path
		key="path-2"
		variants={child_variant}
		d="M14 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0"
		custom={2}
		/>
		
		</motion.svg>
		</AnimatePresence>
	);
};

export default Logo;

