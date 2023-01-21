import React from 'react';

// Import components
import HTMLHead from '../../components/htmlhead';
import Header from '../../components/header';
import Navigation from '../../components/navigation';

const NewMovement = () => {
	return (
		<div>
			<HTMLHead title={'New movement'} />
			<Header />
			<main className="flex justify-center flex-col p-3 mt-12">
				<form className="flex flex-col w-full">
					<h2 className="text-xl text-black font-bold dark:text-white">New movement</h2>
					<input type="number" placeholder="Amount" className="border rounded-md p-3 my-2 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white" />
					<input type="date" className="border rounded-md p-3 my-2 min-w-full w-full dark:bg-neutral-900 dark:border-neutral-700 dark:text-white" />
					<input type="time" placeholder="Time" className="border rounded-md p-3 my-2 w-full dark:bg-neutral-900 dark:border-neutral-700 dark:text-white" />
					<select className="border rounded-md p-3 my-2 w-full dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
						<option value="profit">Profit</option>
						<option value="expense">Expense</option>
					</select>
					<input type="submit" value="Add movement" className="bg-emerald-500 text-white font-bold py-3 rounded-md text-center my-2" />
				</form>
			</main>
			<Navigation />
		</div>
	);
};

export default NewMovement;
