import React from 'react';
import Link from 'next/link';

// Import components
import HTMLHead from '../components/htmlhead';
import Header from '../components/header';

const Index: React.FunctionComponent = () => {
	return (
		<div>
			<HTMLHead />
			<Header />
			<main className="flex justify-center items-center flex-col h-screen">
				<h1 className="text-3xl font-bold text-center">The best Content Management System</h1>
				<div className="flex flex-col justify-between my-10 w-9/12 min-w-max">
					<Link href="/signup" className="bg-emerald-500 text-white font-bold py-3 rounded-md text-center my-2">Sign Up</Link>
					<Link href="/login" className="bg-emerald-500 text-white font-bold py-3 rounded-md text-center my-2">Log in</Link>
				</div>
			</main>
		</div>
	);
};

export default Index;
