import { useState, useEffect } from 'react';

function useMousePosition() {
	const [position, setPosition] = useState({
		clientX: 0,
		clientY: 0,
	});

	function updatePosition(event) {
		const { pageX, pageY, clientX, clientY } = event;

		setPosition({
			clientX,
			clientY,
		});
	}

	useEffect(() => {
		document.addEventListener('mousemove', updatePosition, false);
		document.addEventListener('mouseenter', updatePosition, false);

		return () => {
			document.removeEventListener('mousemove', updatePosition);
			document.removeEventListener('mouseenter', updatePosition);
		};
	}, []);

	return position;
}

export default useMousePosition;
