import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';

export default function TextGradientOpacity() {
	const element = useRef(null);
	const { scrollYProgress } = useScroll({
		target: element,
		offset: ['start 0.9', 'start 0.25'],
	});
	return (
		<div className='bg-slate-800'>
			<div className='w-full h-screen text-center flex justify-center items-center'>
				<p className='text-7xl font-semibold text-white'>Content</p>
			</div>
			<div className='w-full h-screen text-center flex justify-center items-center'>
				<Words value='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ullam doloribus autem voluptate, natus illum accusantium corrupti velit vitae, dolorum illo dolor omnis fugiat? Rerum porro numquam quos eveniet ratione.' />
			</div>
			<div className='w-full h-screen text-center flex justify-center items-center'>
				<p className='text-7xl font-semibold text-white'>Content</p>
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
		<motion.p
			style={{ opacity: scrollYProgress }}
			ref={element}
			className='text-3xl font-semibold text-white text-left'>
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
		<p ref={element} className='flex flex-wrap text-3xl font-semibold text-white text-left'>
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
