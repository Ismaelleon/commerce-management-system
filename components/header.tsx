import React from 'react';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {
	return (
		<div className="p-3 border-b">
			<Link href="/" className="text-lg font-bold">Content Management System</Link>
		</div>
	);
};

export default Header;
