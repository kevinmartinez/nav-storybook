import React from 'react';
import { storiesOf } from '@storybook/react';
import { NavItem } from './nav-item';

storiesOf('Nav Item', module) // Story heading
  // Story sub-heading
  .add('With Text', () => (
    <NavItem text="Hello navigation item" />
  ))
  // Story sub-heading
  .add('With some emoji', () => (
    <NavItem text="😀 😎 👍"></NavItem>
  ));