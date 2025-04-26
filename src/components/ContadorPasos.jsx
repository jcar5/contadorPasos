import { useState } from 'react';

export function ContadorPasos() {
	const [pasos, setPasos] = useState(0);

	return (
		<div class='flex flex-col items-center justify-center h-screen'>
			<p class='text-white text-5xl mb-5'>
				Pasos: <span>{pasos}</span>
			</p>
			<div class='flex flex-col'>
				<button
					class='mx-auto font-bold mb-2 text-white rounded p-1 bg-indigo-500 hover:bg-fuchsia-500'
					onClick={() => setPasos(pasos + 1)}
				>
					Incrementar pasos
				</button>

				<button
					class='mx-auto font-bold text-white rounded p-1 bg-indigo-500 hover:bg-fuchsia-500'
					onClick={() => setPasos(0)}
				>
					Incrementar pasos
				</button>
			</div>
		</div>
	);
}
