import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import TicTacToeCell from './TicTacToeCell';

const stories = storiesOf('Components', module);

stories.add(
  'TicTacToeCell',
  () => <div onClick={action('onClick')} />,
  { info: { inline: true } }
);