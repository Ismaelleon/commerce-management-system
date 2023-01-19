import React from 'react';
import Head from 'next/head';

interface HTMLHeadProps {
	title: string;
}

type Props = HTMLHeadProps;

const HTMLHead = ({ title }: Props) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
	);
};

export default HTMLHead;
