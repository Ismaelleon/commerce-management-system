import React from 'react';
import Link from 'next/link';

interface ProductProps {
	img: string;
	product: string;
	price: string;
}

type Props = ProductProps;

const Product = ({ img, product, price }: Props) => {
	return (
		<li className="grid grid-cols-4 flex-row py-3 border-b gap-x-2">
			<div className="col-span-1">
				<img src={img} />
			</div>
			<div className="flex flex-col col-start-2 col-end-5">
				<Link href={`/product/${product}`} className="text-md font-medium leading-4 mt-2">{product}</Link>
				<span className="text-md font-medium">${price}</span>
			</div>	
		</li>
	);
};

export default Product;
