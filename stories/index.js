import React from 'react';
import { storiesOf } from '@storybook/react';
import { InitCommit } from '../src/index.js';

storiesOf('InitCommit', module)
  .add('Init Commit', () => (
    <InitCommit />
  ))
  