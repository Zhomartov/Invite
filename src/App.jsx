import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import{ motion} from 'framer-motion';

import Section_1 from './sections/section_1.jsx';
import Section_2 from './sections/section_2.jsx';
import Section_3 from './sections/section_3.jsx';
import Section_4 from './sections/section_4.jsx';
import { useTranslation } from "react-i18next";

//Icons

const variant = {
	init: {opacity:0},
	animate: {opacity:1 , transition: { duration: 3}},
}

function App() {
	const { t, i18n } = useTranslation();
	const [selected , setSelected] = useState('kz');

	const changeLang = (lang) => {
		i18n.changeLanguage(lang);
		localStorage.setItem("lang", lang);
		setSelected(lang);
	};

	return (
		<section>
		<div className='fixed right-5 top-5 flex gap-2 text-2xl z-1'>
		 <button onClick={()=> changeLang('kz')} className={`flex gap-2 cursor-pointer rounded-xl p-2 ${selected === 'kz' ? 'bg-blue-500': 'bg-blue-500/30'}` }>
		kz 
		<img className='size-7 rounded-full object-fill' src='/kz.jpg'/></button>
		 <button onClick={()=> changeLang('ru')} className={`flex gap-2 cursor-pointer rounded-xl p-2 ${selected === 'ru' ? 'bg-blue-500': 'bg-blue-500/30'}` }>ru <img className='size-7 rounded-full' src='/ru.jpg'/></button>
		</div>

		<Section_1 />

		<motion.div key='divider-1' variants={variant} initial='init' animate='animate' className='divider bg-[url(/divider_5.png)] bg-contain bg-repeat-round bg-center'> 
		</motion.div>

		<Section_2 />

		<motion.div variants={variant} initial='init' whileInView='animate' className='divider bg-[url(/divider_1.png)] bg-contain bg-repeat-round bg-center'> 
		</motion.div>

		<Section_3 />

		<motion.div variants={variant} initial='init' whileInView='animate' className='divider bg-[url(/divider_2.png)] bg-contain bg-repeat-round bg-center'> 
		</motion.div>

		<Section_4 />

		<motion.div variants={variant} initial='init' whileInView='animate' className='divider bg-[url(/divider_5.png)] bg-contain bg-repeat-round bg-right'> 
		</motion.div>

		</section>
	)
}

export default App
