import { Separator } from '@/components/ui/separator';

type ExperienceProps = {
	blocks: {
		id: string;
		job: string;
		company: string;
		location: string;
		position: string;
		startDate: Date;
		endDate?: Date;
		responsabilities: string[];
	}[];
};

export const Experience = ({ blocks }: ExperienceProps) => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='w-full'>
				<p className='text-xl font-semibold text-center'>
					Professional Experience
				</p>
				<Separator orientation='horizontal' className='border' />
			</div>
			{blocks.map((block) => (
				<div key={block.id} className='w-full flex flex-col gap-2'>
					<div className='w-full flex flex-row justify-between'>
						<div className='flex-5'>
							<p className='text-lg font-semibold'>
								{block.job} - {block.company}
							</p>
							<p className='italic'>{block.position}</p>
						</div>
						<div className='flex-2 text-right'>
							<p>{block.location}</p>
							<p>
								{block.startDate.toLocaleString('en-US', {
									month: 'long',
									year: 'numeric',
								})}{' '}
								-{' '}
								{block.endDate
									? block.endDate.toLocaleString('en-US', {
											month: 'long',
											year: 'numeric',
										})
									: 'current'}
							</p>
						</div>
					</div>
					<div className='px-8'>
						<ul className='list-disc'>
							{block.responsabilities.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};
