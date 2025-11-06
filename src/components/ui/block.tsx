import type { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

type BlockProps = {
	title: string;
	children: ReactNode;
};

export const Block = ({ children, title }: BlockProps) => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='w-full'>
				<p className='text-xl font-semibold text-center'>{title}</p>
				<Separator orientation='horizontal' className='border' />
			</div>
			{children}
		</div>
	);
};
