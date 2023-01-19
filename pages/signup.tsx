import React from 'react';
import Link from 'next/link';

// Import components
import HTMLHead from '../components/htmlhead';
import Header from '../components/header';

const SignUp: React.FunctionComponent = () => {
	return (
		<div>
			<HTMLHead title={'Sign Up'} />
			<Header />
			<main className="flex justify-center items-center flex-col h-screen">
				<form className="flex flex-col w-9/12">
					<input type="email" placeholder="E-mail" className="border rounded-md p-3 my-2" />
					<input type="password" placeholder="Password" className="border rounded-md p-3 my-2" />
					<input type="submit" value="Sign Up" className="bg-emerald-500 text-white font-bold py-3 rounded-md text-center my-2" />
				</form>
				<Link href="/login" className="text-sm my-2 text-emerald-500 underline">Already have an account? Log In</Link>
			</main>
		</div>
	);
};

export default SignUp;
