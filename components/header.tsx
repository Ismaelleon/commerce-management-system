import React from 'react';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {
	return (
		<div className="fixed top-0 left-0 p-3 border-b bg-white w-screen dark:bg-neutral-900 dark:border-neutral-700">
			<Link href="/" className="text-lg font-bold dark:text-white">Commerce Management System</Link>
		</div>
	);
};

export default Header;
