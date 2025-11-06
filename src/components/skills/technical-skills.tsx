import { Separator } from '@/components/ui/separator';

type TechnicalSkillsProps = {
	skills: string[];
};

export const TechnicalSkills = ({ skills }: TechnicalSkillsProps) => {
	return (
		<div className='flex flex-col items-center gap-4'>
			<div className='w-full'>
				<p className='text-xl font-semibold text-center'>Techinical Skills</p>
				<Separator orientation='horizontal' className='border' />
			</div>
			<ul className='w-full grid grid-cols-5 px-4 list-disc ml-4'>
				{skills.map((skill) => (
					<li key={skill}>{skill}</li>
				))}
			</ul>
		</div>
	);
};
