import { FaHeart } from 'react-icons/fa';
import {motion} from 'framer-motion';
import {parent_variant , child_variant} from './variants.jsx';
import { useTranslation } from "react-i18next";

const Section_2 = () => {
	const {t} = useTranslation();

	return (
		<div className='main lg:h-screen' id='section_2'>
		<motion.div
		variants={parent_variant}
		initial ='init'
		exit='exit'
		whileInView='animate'
		className='container p-5 bg-white shadow-xl  flex items-center justify-start flex-col gap-5'>
		<motion.h1 key='section_2_h1' variants={child_variant}>{t('section_2_card_h1')} <FaHeart /> </motion.h1>
		<motion.h4 key='section_2_h4' variants={child_variant}>{t('section_2_card_h4')}</motion.h4>
		<motion.a key='section_2_a' variants={child_variant} className='button' href='#section_4'>{t('section_2_card_button')}</motion.a>
		</motion.div>
		</div>
	)
}

export default Section_2;
