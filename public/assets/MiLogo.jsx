import * as React from 'react';

const MiLogo = (props) => (
	<svg
		width={50}
		height={34}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#a)">
			<path
				d="M19.05 12.565.038 5.158V.051L22.874 10.16v3.128l-3.824-.722ZM.038 19.09l19.065-7.568 3.77-.561v3.101L.039 24.197V19.09ZM49.72 29.464v4.065H25.2v-4.065h24.52Z"
				fill="#000"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h50v33.631H0z" />
			</clipPath>
		</defs>
	</svg>
);

export default MiLogo;