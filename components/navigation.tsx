import React from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { IoMdCard, IoMdShirt, IoMdPerson } from 'react-icons/io';

const Navigation: React.FunctionComponent = () => {
	const router: NextRouter = useRouter();

	const setNavigationLinkColor = (linkPathname: string) => {
		if (router.pathname === linkPathname) {
			return 'text-emerald-500';
		}

		return 'text-black';
	};

	return (
		<nav className="flex justify-between fixed bottom-0 left-0 bg-white border-t w-screen py-3 px-6">
			<Link href="/balance" className="flex flex-col items-center">
				<IoMdCard className={`${setNavigationLinkColor('/balance')} text-2xl`} />	
				<span className={`${setNavigationLinkColor('/balance')} text-sm font-medium`}>Balance</span>
			</Link>
			<Link href="/products" className="flex flex-col items-center">
				<IoMdShirt className={`${setNavigationLinkColor('/products')} text-2xl`} />	
				<span className={`${setNavigationLinkColor('/products')} text-sm font-medium`}>Products</span>
			</Link>
			<Link href="/account" className="flex flex-col items-center">
				<IoMdPerson className={`${setNavigationLinkColor('/account')} text-2xl`} />	
				<span className={`${setNavigationLinkColor('/account')} text-sm font-medium`}>Account</span>
			</Link>
		</nav>
	);
};

export default Navigation;
