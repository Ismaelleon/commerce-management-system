import React from 'react';
import Link from 'next/link';

// Import components
import HTMLHead from '../components/htmlhead';

const Index: React.FunctionComponent = () => {
	return (
		<div className="flex flex-col items-center p-10 w-100">
			<HTMLHead />
			<h1 className="text-black text-center text-4xl font-bold">Commerce Management System</h1>
			<div className="flex flex-row justify-between my-20 w-52 min-w-max">
				<Link href="/signup" className="bg-emerald-500 text-white font-bold py-3 px-5 rounded-md">Sign Up</Link>
				<Link href="/login" className="bg-emerald-500 text-white font-bold py-3 px-5 rounded-md">Log in</Link>
			</div>
		</div>
	);
};

export default Index;
