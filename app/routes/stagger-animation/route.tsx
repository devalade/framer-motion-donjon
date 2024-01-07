import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function StaggerAnimation() {
	return (
		<div className='bg-slate-800'>
			<div className='w-full h-screen text-center flex justify-center items-center'>
				<p className='text-7xl font-semibold text-white'>Content</p>
			</div>
			<div className='w-full h-screen text-center flex justify-center items-center'>
				<AnimatedText
					text={['Hello World!', 'Voici des contenu']}
					className='text-7xl font-semibold text-white'
					once
				/>
			</div>
		</div>
	);
}

type AnimatedTextProps = {
	text: string | string[];
	el?: keyof JSX.IntrinsicElements;
	className?: string;
	once?: boolean;
};

const defaultVariants = {
	hidden: {
		opacity: 0,
		y: 10,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.1,
		},
	},
};

function AnimatedText({ text, el: Wrapper = 'p', className, once = false }: AnimatedTextProps) {
	const controls = useAnimation();
	const lines = typeof text === 'object' ? text : [text];
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once });

	useEffect(() => {
		let timeout: NodeJS.Timeout;
		function show() {
			timeout = setTimeout(async () => {
				await controls.start('hidden');
				await controls.start('visible');
			}, 1000);
		}

		if (isInView) {
			show();
		} else {
			controls.start('hidden');
		}
	}, [isInView]);
	return (
		<Wrapper className={className}>
			<span className='sr-only'>{text}</span>
			<motion.span
				ref={ref}
				initial='hidden'
				animate={controls}
				transition={{ staggerChildren: 0.1 }}
				aria-hidden>
				{lines.map((line, index) => (
					<span key={index} className='block'>
						{line.split(' ').map((word, idx) => (
							<span className='inline-block'>
								{word.split('').map((char, index) => (
									<motion.span
										className='inline-block'
										variants={defaultVariants}
										key={index}>
										{char}
									</motion.span>
								))}
								<span>&nbsp;</span>
							</span>
						))}
					</span>
				))}
			</motion.span>
		</Wrapper>
	);
}
