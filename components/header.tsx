import React from 'react';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {
	return (
		<div className="fixed top-0 left-0 p-3 border-b">
			<Link href="/" className="text-lg font-bold">Content Management System</Link>
		</div>
	);
};

export default Header;
