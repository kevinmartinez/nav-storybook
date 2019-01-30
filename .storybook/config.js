import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/nav-item/nav-item.stories.jsx');
  require('../src/components/navigation/navigation.stories.jsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);