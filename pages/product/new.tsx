import React from 'react';

// Import components
import HTMLHead from '../../components/htmlhead';
import Header from '../../components/header';
import Navigation from '../../components/navigation';

const NewProduct = () => {
	return (
		<div>
			<HTMLHead title={'New movement'} />
			<Header />
			<main className="flex justify-center flex-col p-3 mt-12">
				<form className="flex flex-col w-full">
					<h2 className="text-xl text-black font-bold">New product</h2>
					<input type="text" placeholder="Product name" className="border rounded-md p-3 my-2" />
					<input type="text" placeholder="Product Brand" className="border rounded-md p-3 my-2 min-w-full w-full" />
					<input type="number" placeholder="Price" className="border rounded-md p-3 my-2" />
					<input type="submit" value="Add Product" className="bg-emerald-500 text-white font-bold py-3 rounded-md text-center my-2" />
				</form>
			</main>
			<Navigation />
		</div>
	);
};

export default NewProduct;
