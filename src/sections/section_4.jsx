import {parent_variant , child_variant} from './variants.jsx';
import{motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';

const Section_4 = () => {
	const {t} = useTranslation();
	return (

		<div className='main' id='section_4'>
		<motion.div
		variants={parent_variant}
		initial='init'
		exit='exit'
		whileInView='animate'
		className='container gap-2 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-3 p-2 lg:p-0'>
		<motion.video
		key='video-1'
		variants={child_variant}
		className = 'col-1 row-span-2 rounded-xl object-cover size-full' 
		src='/wave.mp4' autoPlay loop muted playsInline/>
		<motion.span
		key='span-1'
		variants={child_variant}
		className='col-2 row-1 text-xl p-2 bg-green-500/10 text-justify  rounded-xl'>
		{t('section_4_card_1')}
		</motion.span>
		<motion.video 
		key='video-2'
		variants={child_variant}
		className='col-2 row-2 row-span-2 object-cover size-full rounded-xl' 
		src='/wave_2.mp4' autoPlay loop muted playsInline/>
		<motion.span
		key='span-2'
		variants={child_variant}
		className='col-1 row-3 p-2  text-xl bg-green-500/10 text-justify  rounded-xl'>
		{t('section_4_card_2')}
		</motion.span>
		</motion.div>
		</div>
	)
}

export default Section_4;
