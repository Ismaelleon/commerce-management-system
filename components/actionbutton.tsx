import React from 'react';
import Link from 'next/link';
import { IoMdAdd } from 'react-icons/io';

interface ActionButtonProps {
	href: string;
}

type Props = ActionButtonProps;

const ActionButton = ({ href }: Props) => {
	return (
		<Link href={href} className="fixed bottom-24 right-5 p-3 rounded-full bg-emerald-500">
			<IoMdAdd className="text-3xl text-white" />	
		</Link>
	);
};

export default ActionButton;
