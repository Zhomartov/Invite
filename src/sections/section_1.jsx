import Logo from './icon.jsx';
import {useTranslation} from 'react-i18next';
import {motion} from 'framer-motion';

const Section_1 = () => {
	const {t} = useTranslation();
	return(
		<div className='lg:max-h-[1000px] h-full p-2 flex flex-col items-center justify-start relative overflow-hidden w-full'>
		<Logo />
		<motion.span initial={{opacity: 0}} animate={{opacity:1}} transition={{delay:4 , type:'spring'}} className='text-[10em] lg:text-[15em] uppercase text-[#8B0000] font-main'>{t('logo_text')}</motion.span>
		</div>
	);
}

export default Section_1;
