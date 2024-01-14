import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { PropsWithChildren, useRef } from 'react';

export default function TextGradientOpacity() {
	return (
		<div className='font-lexend text-left text-white text-8xl font-semibold '>
			<div className='w-full h-screen flex justify-center items-center bg-[#355C7D]'>
				<div className='max-w-5xl mx-auto w-full px-4'>
					<p className=''>Seamless animations & interactions that wow.</p>
				</div>
			</div>
			<div className='w-full h-screen text-center flex justify-center items-center bg-[#725A7A] '>
				<div className='max-w-5xl mx-auto w-full px-4'>
					<Words value='Butter-smooth, 60fps animations leaving lag in the dust.' />
				</div>
			</div>
			<div className='w-full h-screen text-center flex justify-center items-center bg-[#C56C86]'>
				<div className='max-w-5xl mx-auto w-full px-4'>
					<Words value='Unleash creativity with playful effects & physics.' />
				</div>
			</div>
			<div className='w-full h-screen text-center flex justify-center items-center bg-[#FF7582]'>
				<div className='max-w-5xl mx-auto w-full px-4'>
					<Words value='Effortless React integration, plays nice with everyone.' />
				</div>
			</div>
		</div>
	);
}

function Paragraph({ value }: { value: string }) {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start 0.9', 'start 0.25'],
	});
	return (
		<motion.p style={{ opacity: scrollYProgress }} ref={element} className=''>
			{value}
		</motion.p>
	);
}

function Words({ value }: { value: string }) {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start 0.9', 'start 0.25'],
	});
	const words = value.split(' ');
	return (
		<p ref={element} className='flex flex-wrap '>
			{words.map((word, index) => {
				const start = index / words.length;
				const end = start + 1 / words.length;

				return (
					<Word key={index} range={[start, end]} progress={scrollYProgress}>
						{word}
					</Word>
				);
			})}
		</p>
	);
}

function Word({
	children,
	range,
	progress,
}: PropsWithChildren<{ range: Array<number>; progress: MotionValue<number> }>) {
	const characters: string[] = children?.split('');
	const amount = range[1] - range[0];
	const step = amount / children?.length;
	return (
		<span className='ml-3 relative'>
			{characters.map((character, index) => {
				const start = range[0] + step * index;
				const end = range[0] + step * (index + 1);
				return (
					<Character key={index} range={[start, end]} progress={progress}>
						{character}
					</Character>
				);
			})}
		</span>
	);
}

function Character({
	children,
	range,
	progress,
}: PropsWithChildren<{ range: Array<number>; progress: MotionValue<number> }>) {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className=''>
			<span className='text-white/20 absolute'>{children}</span>
			<motion.span style={{ opacity }}>{children}</motion.span>
		</span>
	);
}
