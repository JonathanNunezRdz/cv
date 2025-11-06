import { Separator } from '@/components/ui/separator';

type EducationProps = {
	blocks: {
		id: string;
		institution: string;
		program: string;
		gpa?: number;
		date: Date;
	}[];
};

export const Education = ({ blocks }: EducationProps) => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='w-full'>
				<p className='text-xl font-semibold text-center'>Education</p>
				<Separator orientation='horizontal' className='border' />
			</div>
			{blocks.map((block) => (
				<div key={block.id} className='w-full flex flex-row justify-between'>
					<div>
						<p className='font-semibold'>{block.institution}</p>
						<p>{block.program}</p>
						{block.gpa ? <p>GPA {block.gpa}</p> : null}
					</div>
					<div>
						<p>
							{block.date.toLocaleString('en-US', {
								month: 'long',
								year: 'numeric',
							})}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
