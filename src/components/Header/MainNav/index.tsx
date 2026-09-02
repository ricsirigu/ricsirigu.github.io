import React from 'react';

import * as Styled from './styles';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About',
    slug: '/about/'
  },
  {
    title: 'Expertise',
    slug: '/expertise/'
  },
  {
    title: 'Resume',
    slug: '/resume/'
  },
  {
    title: 'Blog',
    slug: '/blog/'
  },
  {
    title: 'Contact Me',
    slug: '/contact/'
  }
];

interface Props {
  currentPath: string;
}

const MainNav: React.FC<Props> = ({ currentPath }) => (
  <>
    <Styled.MainNav id="main-navigation" aria-label="Main navigation">
      {mainNavItems.map((item, index) => (
        <Styled.MainNavItem
          key={`nav-item-${index}`}
          href={item.slug}
          aria-current={
            currentPath === item.slug || (item.slug !== '/' && currentPath.startsWith(item.slug)) ? 'page' : undefined
          }
          className={
            currentPath === item.slug || (item.slug !== '/' && currentPath.startsWith(item.slug)) ? 'active' : undefined
          }
        >
          {item.title}
        </Styled.MainNavItem>
      ))}
    </Styled.MainNav>
    <Styled.ToggleMainNav
      type="button"
      aria-label="Toggle navigation menu"
      aria-controls="main-navigation"
      aria-expanded="false"
      data-navigation-toggle
    >
      <span />
      <span />
      <span />
    </Styled.ToggleMainNav>
  </>
);

export default MainNav;
