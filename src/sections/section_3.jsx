import { TimeClock } from '@mui/x-date-pickers/TimeClock';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MdAccessTimeFilled } from 'react-icons/md';
import {motion} from 'framer-motion';
import {parent_variant , child_variant} from './variants.jsx';
import { useTranslation } from "react-i18next";

function fill () {
	const days = []
	for(let i = 2 ; i <=30 ; i++){
		days.push(<span key={`day-${i}`} className={ i === 22 ? 'bg-primary rounded-full p-1' : 'p-1 text-black/50'}>{i}</span>);
	}
	return days;
}


const Section_3 = () => {
	const days = fill(); 
	const {t} = useTranslation();

	const handleMap = () => {
		window.open(
			"https://www.google.com/maps/place/@46.838918,74.971360,17z",
			"_blank"
		);};

	return (
		<div className='main'>
		<motion.div 
		variants={parent_variant}
		initial='init'
		exit='exit'
		animate='animate'
		whileInView='animate'
		className='container p-5 flex items-center justify-start flex-col gap-5'>
			<motion.h1 key='section_3_h1' className='font-main !text-5xl' variants={child_variant}>{t('section_3_card_h1')}</motion.h1>
			<motion.h4 key='section_3_h4' variants={child_variant}>
				{t('section_3_card_h4')}
			</motion.h4>
		<motion.div className='date' key='section_3_date_1' variants={child_variant}>
			<span className='text-7xl text-primary'>{t('section_3_date_1_title')}</span>
			<h2 className='text-black/50 italic mb-5 text-5xl'>2025</h2>
			<div className='grid grid-cols-7 grid-rows-7 text-base lg:text-lg gap-3 lg:gap-5 text-center border rounded-xl p-1 border-black/50'>
			<span className='font-bold uppercase'>sun</span>
			<span className='font-bold uppercase'>MoN</span>
			<span className='font-bold uppercase'>tue</span>
			<span className='font-bold uppercase'>wen</span>
			<span className='font-bold uppercase'>thu</span>
			<span className='font-bold uppercase'>fri</span>
			<span className='font-bold uppercase'>sat</span>
			<span key='day-1' className='col-span-7 ml-auto mr-3 row-2 p-1 text-black/50'>1</span>
			{days}
			</div>
		</motion.div>
		<motion.div className='date' key='section_3_date_2' variants={child_variant}>
			<span className='text-7xl text-primary'>{t('section_3_date_2_title')}</span>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
			<TimeClock 
			defaultValue={dayjs('2022-04-17T13:00')} 
			readOnly 
			sx ={{
			'& .MuiClock-pin': {
				backgroundColor: '#D15FBF',
			},
			'& .MuiClockPointer-root': {
				backgroundColor: '#D15FBF',
			},
			'& .MuiClockPointer-thumb': {
				border: '16px solid #D15FBF',
				backgroundColor: '#D15FBF',
			}
			}}/>
			</LocalizationProvider>
		</motion.div>
		
		<motion.div 
		key='section_3_card' 
		onClick={handleMap} 
		variants={child_variant} 
		className='w-full h-[400px] bg-[url(/table.jpg)] bg-center overflow-hidden bg-no-repeat bg-cover rounded-lg p-2 relative cursor-pointer group'>
		
		<span className='w-full h-full bg-black/30 absolute top-0 left-0'></span>
		<h2 className ='absolute top-0 left-0 p-1 text-3xl lg:text-5xl font-bold text-white/70 group-hover:text-white'>{t('section_3_place_title')}</h2>
		<span
		className='absolute bottom-5 right-5 lg:right-0 text-white/70 text-3xl lg:text-6xl font-bold  p-1 rounded group-hover:text-white'>{t('section_3_place_button')}</span>
		</motion.div>
		</motion.div>
		</div>
	)
}

export default Section_3;
