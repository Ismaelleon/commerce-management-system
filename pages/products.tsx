import React from 'react';

// Import components
import HTMLHead from '../components/htmlhead';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Product from '../components/product';

const Products: React.FunctionComponent = () => {
	return (
		<div>
			<HTMLHead title={'Products'} />	
			<Header />
			<main className="p-3 mt-10">
				<div className="p-3">
					<span className="text-base text-black font-semibold">Products</span>
					<ul>
						<Product img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstock.com.py%2Fimages%2Fthumbs%2F0172051.jpeg&f=1&nofb=1&ipt=f157174a89b6fc8dd7afb35d7a7debbc8102e5f3ae60c3fc3113b480a98a4c0d&ipo=images" product="Jabón en polvo drive" price={'150'} />	
						<Product img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgeant.vteximg.com.br%2Farquivos%2Fids%2F249970-1000-1000%2F662098.jpg%3Fv%3D637245456131070000&f=1&nofb=1&ipt=be7fc4d8bccf08065035ac70b0ee4a2cca557080a396f2968d02a425071b26a8&ipo=images" product="Galletas hogareña mix cereales" price={'75'} />	
					</ul>
				</div>
			</main>
			<Navigation />
		</div>
	);
};

export default Products;
