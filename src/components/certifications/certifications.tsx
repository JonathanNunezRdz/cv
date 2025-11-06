import { Block } from '@/components/ui/block';

type CertificationsProps = {
	blocks: {
		id: string;
		title: string;
		date: Date;
	}[];
};

export const Certifications = ({ blocks }: CertificationsProps) => {
	return (
		<Block title='Certifications'>
			{blocks.map((block) => (
				<div key={block.id} className='w-full flex flex-row justify-between'>
					<p>{block.title}</p>
					<p>
						{block.date.toLocaleString('en-US', {
							month: 'long',
							year: 'numeric',
						})}
					</p>
				</div>
			))}
		</Block>
	);
};
