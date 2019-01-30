import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navigation } from './navigation';

storiesOf('Navigation', module)
  .add('Main Navigation', () => (
    <Navigation class="nav nav--main"/>
  ))
  .add('Sub Navigation', () => (
    <Navigation class="nav--sub" />
  ))