import React from 'react';
import styles from './nav-item.module.scss';

console.dir(styles)
console.log(styles.item)


export const NavItem = (props) => (
  <li className={styles.item}><a href="#">{props.text}</a></li>
)