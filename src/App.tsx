import { Education } from '@/components/education/education';
import { Experience } from '@/components/experience/experience';
import { TechnicalSkills } from '@/components/skills/technical-skills';

function App() {
	return (
		<div className='flex flex-col gap-4 max-w-[1000px] mx-auto p-4'>
			{/* <div className='h-28 w-full' /> */}
			<div className='flex flex-col items-center'>
				<p className='text-xl font-semibold'>Jonathan Andre Nunez Rodriguez</p>
				<div className='flex flex-row gap-2'>
					<a href='mailto:jonathannunezr1@gmail.com'>
						jonathannunezr1@gmail.com
					</a>
					<p>|</p>
					<p>+52 8115248448</p>
				</div>
			</div>
			<Education
				blocks={[
					{
						id: 'udem',
						date: new Date('2023-05-18T21:00:00.000Z'),
						institution: 'Universidad de Monterrey',
						program: 'Ingeniería en Tecnologías Computacionales',
						gpa: 3.2,
					},
				]}
			/>

			<TechnicalSkills
				skills={[
					'NodeJS',
					'Typescript',
					'ExpressJS',
					'ReactJS',
					'NextJS',
					'NestJS',
					'PostgreSQL',
					'MySQL',
					'Git',
					'Devops',
					'Docker',
					'Python',
					'bash/zsh',
				]}
			/>

			<Experience
				blocks={[
					{
						id: 'islascloud',
						company: 'Industrias Islas',
						job: 'Islascloud: Remote administration of Water Treatment Plants',
						location: 'Santa Catarina, MX',
						position: 'Lead developer / Devops',
						responsabilities: [
							'Design and develop a system that connects a dashboard to water treatment plant PLCs via MQTT and Websockets.',
							'Mantain and update a variety of dockerized applications.',
							'Research of water treatment plants and their different processes (RO, UF, MBBR, etc.) to get context of "safe" readings of sensors.',
						],
						startDate: new Date('2024-09-01T14:30:00.000Z'),
					},
					{
						id: 'one',
						company: 'Freelance',
						job: 'Psychometric Test Manager for Businesses',
						location: 'Monterrey, MX',
						position: 'Fullstack developer',
						responsabilities: [
							'Designed and developed a PWA for applying and managing psychomentric tests based on goverment NOM regulations.',
						],
						startDate: new Date('2023-09-01T06:00:00.000Z'),
						endDate: new Date('2023-11-01T06:00:00.000Z'),
					},
					{
						id: 'two',
						company: 'Universidad de Monterrey',
						job: 'Readability Algorithms for Spanish Texts',
						location: 'Monterrey, MX',
						position: 'Lead/Fullstack developer',
						responsabilities: [
							'Research of Spanish readability algorithms for the creation of a combined algorithm for a general analysis.',
							'Designed and developed a PWA to apply readability algorithms to Spanish texts.',
							"Presented as bachelor's degree thesis.",
						],
						startDate: new Date('2022-11-01T06:00:00.000Z'),
						endDate: new Date('2023-05-10T06:00:00.000Z'),
					},
					{
						id: 'three',
						company: 'Indautosoft',
						job: 'BLE for Controlled Access to Restricted Areas',
						location: 'Monterrey, MX',
						position: 'Co-lead/Frontend developer',
						responsabilities: [
							'Research of Bluetooth Low Energy devices for positioning system.',
							'Designed and developed a PWA dashboard for managing access to restricted areas/rooms within a building.',
							"Presented as bachelor's degree internship project.",
						],
						startDate: new Date('2021-08-10T06:00:00.000Z'),
						endDate: new Date('2021-12-10T06:00:00.000Z'),
					},
				]}
			/>
		</div>
	);
}

export default App;
