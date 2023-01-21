import React from 'react';
import { useRouter } from 'next/router';

// Import components
import HTMLHead from '../../components/htmlhead';
import Header from '../../components/header';
import Navigation from '../../components/navigation';

const Product = () => {
	const router = useRouter();
	const { _id } = router.query;

	return (
		<div>
			<HTMLHead title={'Product'} />	
			<Header />
			<main className="p-3 mt-10 flex flex-col">
				<div className="flex flex-col py-3">
					<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstock.com.py%2Fimages%2Fthumbs%2F0172051.jpeg&f=1&nofb=1&ipt=f157174a89b6fc8dd7afb35d7a7debbc8102e5f3ae60c3fc3113b480a98a4c0d&ipo=images" className="w-full mb-2" />
					<h2 className="text-xl font-bold">Jabón en polvo (Drive)</h2>	
					<span className="text-lg ">$150</span>
				</div>
				<button className="text-white font-bold py-3 rounded-md text-center my-2 bg-red-500">Delete product</button>
			</main>
			<Navigation />
		</div>
	);
};

export default Product;
