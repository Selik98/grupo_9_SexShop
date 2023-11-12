import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';
import Card from './Card';

function ContentRowTop() {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				{/*<!-- Content Row Movies-->*/}
				<ContentRowCenter />
				<Chart />

			</div>

		</React.Fragment>
	)

}
export default ContentRowTop;