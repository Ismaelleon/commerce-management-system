import React from 'react';
import { IoMdArrowUp } from 'react-icons/io';
import { useRouter } from 'next/router';

// Import components
import HTMLHead from '../../components/htmlhead';
import Header from '../../components/header';
import Navigation from '../../components/navigation';

const Movement = () => {
	const router = useRouter();
	const { _id } = router.query;

	return (
		<div>
			<HTMLHead title={'Movement'} />	
			<Header />
			<main className="p-3 mt-10 flex flex-col">
				<div className="flex flex-row items-center py-3">
					<IoMdArrowUp className="text-green-500 text-4xl" />
					<div>
						<h2 className="text-xl font-bold dark:text-white">$2500</h2>	
						<span className="dark:text-white">Today, 3:25PM</span>
					</div>
				</div>
				<button className="text-white font-bold py-3 rounded-md text-center my-2 bg-red-500">Delete movement</button>
			</main>
			<Navigation />
		</div>
	);
};

export default Movement;
