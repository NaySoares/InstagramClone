import React from 'react';

import Routes from './routes';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Deprecation in',
  'Can',
]);


export default function App() {
  return <Routes />
};
