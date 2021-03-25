import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
	return (
		<div className="shade-search">
			<div className={'Shades-title'}>Shades Selector</div>
			<input
				type="text"
				onChange={(e) => onInputChange(e.target.value)}
				value={color}
				className="shade-input"
			/>
		</div>
	);
};

export default ShadeInput;
