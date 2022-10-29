import React from 'react';
import { useLanguageStore } from './hooks/useLanguageStore';

import { NavLink } from './NavLink';

export const NavLinks = () => {

	const { navLinks } = useLanguageStore();

	return (
		<div className="h-[50px] w-fit col-start-5 col-span-5 flex flex-row gap-10 place-self-center">
			{
				navLinks.map((navLink) => {
					return (
						<NavLink
							key={navLink.text}
							href={navLink.href}
							message={navLink.text}
						/>
					);
				})
			}
		</div>
	);
};