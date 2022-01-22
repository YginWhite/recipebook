import React from 'react';

function createMarkup(text) {
  return {__html: text};
}

const Summary = ({ title, summary }) => {
	return (
		<div className='summary'>
			<div className='header'>{title}</div>
			<div 
				className='body'
				dangerouslySetInnerHTML={createMarkup(summary)}
			>
			</div>
		</div>
	);
};

export default Summary;