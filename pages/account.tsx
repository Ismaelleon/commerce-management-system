import React from 'react';

// Import components
import HTMLHead from '../components/htmlhead';
import Header from '../components/header';
import Navigation from '../components/navigation';

const Account: React.FunctionComponent = () => {
	return (
		<div>
			<HTMLHead title={'Account'} />		
			<Header />
			<main className="flex py-3 flex-col mt-10">
				<span className="p-3 border-b text-base font-medium text-red-500">Log out</span>	
			</main>
			<Navigation />
		</div>
	);
};

export default Account;
