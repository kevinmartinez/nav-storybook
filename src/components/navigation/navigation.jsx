import React from 'react';
import { NavItem } from '../nav-item/nav-item';

export const Navigation = (props) => (
  // <nav className="nav nav--main">
  <nav className={props.class}>
    <NavItem text="Home" />
    <NavItem text="Animals" />
  </nav>
)