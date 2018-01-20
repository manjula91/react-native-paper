# React Native Paper &middot; [![Build Status][build-badge]][build] [![Version][version-badge]][package] [![MIT License][license-badge]][license] [![Chat][chat-badge]][chat]

Material design for React Native.

## Features

- Follows [material design guidelines](https://material.io/guidelines/)
- Works on both iOS and Android following [platform adaptation guidelines](https://material.io/guidelines/platforms/platform-adaptation.html)
- Full theming support

Currently supported React Native version: `>= 0.50.3`

## Try it out

Run the [example app](https://exp.host/@satya164/react-native-paper-example) with [Expo](https://expo.io/) to see it in action.

## Getting Started

### Installation

Open a Terminal in your project's folder and run,

```sh
npm install --save react-native-paper react-native-vector-icons
```

After installation, you'll need to link [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

### Usage

Wrap your root component in `Provider` from `react-native-paper`. It's a good idea to wrap the component which is passed to `AppRegistry.registerComponent`.

Example:

```js
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);
```

The `PaperProvider` component provides the theme to all the components in the framework. It also acts as a portal to components which need to be rendered at the top level.


### Customization

You can provide a custom theme to customize the colors, fonts etc. with the `Provider` component. Check the [default theme](src/styles/DefaultTheme.js) to see what customization options are supported.

Example:

```js
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    primaryDark: color('tomato').darken(0.2).rgb().string(),
    accent: 'yellow',
  },
};

function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
```

### Components

Check all the components and its usage in our [docs page](https://callstack.github.io/react-native-paper/index.html).

<!-- badges -->
[build-badge]: https://img.shields.io/travis/callstack/react-native-paper/master.svg?style=flat-square
[build]: https://circleci.com/gh/callstack/react-native-paper
[version-badge]: https://img.shields.io/npm/v/react-native-paper.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-native-paper
[license-badge]: https://img.shields.io/npm/l/react-native-paper.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[chat-badge]: https://img.shields.io/badge/chat-slack-brightgreen.svg?style=flat-square&colorB=E01563
[chat]: https://slack.callstack.io/
