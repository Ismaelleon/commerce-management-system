import React from 'react';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { IoMdCard, IoMdShirt, IoMdPerson } from 'react-icons/io';

const Navigation: React.FunctionComponent = () => {
	const router: NextRouter = useRouter();

	const setNavigationLinkColor = (linkPathname: string, secondaryLinkPathname?: string) => {
		const pathname: string = '/' + router.pathname.split('/')[1];
		if (pathname === linkPathname || pathname === secondaryLinkPathname) {
			return 'text-emerald-500 dark:text-emerald-500';
		}

		return 'text-black';
	};

	return (
		<nav className="flex justify-between fixed bottom-0 left-0 bg-white border-t w-screen py-3 px-6 dark:bg-neutral-900 dark:border-neutral-700">
			<Link href="/balance" className="flex flex-col items-center">
				<IoMdCard className={`${setNavigationLinkColor('/balance', '/movement')} text-2xl dark:text-white`} />	
				<span className={`${setNavigationLinkColor('/balance', '/movement')} text-sm font-medium dark:text-white`}>Balance</span>
			</Link>
			<Link href="/products" className="flex flex-col items-center">
				<IoMdShirt className={`${setNavigationLinkColor('/products', '/product')} text-2xl dark:text-white`} />	
				<span className={`${setNavigationLinkColor('/products', '/product')} text-sm font-medium dark:text-white`}>Products</span>
			</Link>
			<Link href="/account" className="flex flex-col items-center">
				<IoMdPerson className={`${setNavigationLinkColor('/account')} text-2xl dark:text-white`} />	
				<span className={`${setNavigationLinkColor('/account')} text-sm font-medium dark:text-white`}>Account</span>
			</Link>
		</nav>
	);
};

export default Navigation;
