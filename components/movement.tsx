import React from 'react';
import { IoMdArrowUp, IoMdArrowDown } from 'react-icons/io';

interface MovementProps {
	amount: number;
	date: string;
	hour: string;
	profit: boolean;
}

type Props = MovementProps;

const Movement = ({ amount, date, hour, profit }: Props) => {
	return (
		<li className="flex flex-row py-3 border-b dark:border-neutral-700">
			<span>
				{profit ?
					<IoMdArrowUp className="text-green-500 text-2xl" />	:
					<IoMdArrowDown className="text-red-500 text-2xl" />}
			</span>
			<div className="flex flex-col">
				<span className="text-md font-semibold leading-4 mb-0 dark:text-white">${amount} USD</span>
				<span className="text-sm text-slate-600 dark:text-white">{date}, {hour}</span>
			</div>
		</li>
	);
};

export default Movement;
