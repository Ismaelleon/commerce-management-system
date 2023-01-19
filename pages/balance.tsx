import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

// Import components
import HTMLHead from '../components/htmlhead';
import Header from '../components/header';
import Movement from '../components/movement';
import Navigation from '../components/navigation';
import ActionButton from '../components/actionbutton';

const Balance: React.FunctionComponent = () => {
	const [balanceHidden, setBalanceHidden] = useState(true);

	return (
		<div>
			<HTMLHead title={'Balance'} />	
			<Header />
			<main className="p-3 mt-10">
				<div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-md my-3">
					<header className="flex flex-row justify-between items-center">
						<h2 className="text-xl text-white font-bold">Balance</h2>
						<button onClick={() => setBalanceHidden(!balanceHidden)}>
							{balanceHidden ?
								<IoMdEyeOff className="text-white text-2xl" /> :
								<IoMdEye className="text-white text-2xl" />}
						</button>
					</header>
					<span className="text-3xl text-white font-bold">$***</span>
				</div>
				<div className="border-t my-3 p-3">
					<span className="text-base text-black font-semibold">Movements</span>
					<ul>
						<Movement amount={2500} date={'Today'} hour={'3:25PM'} profit={true} />
						<Movement amount={1300} date={'Today'} hour={'1:45PM'} profit={false} />
						<Movement amount={3000} date={'Today'} hour={'1:30PM'} profit={true} />
						<Movement amount={900} date={'Today'} hour={'12:55PM'} profit={true} />
					</ul>
				</div>
			</main>
			<ActionButton href="/movement/new" />
			<Navigation />
		</div>
	);
};

export default Balance;
