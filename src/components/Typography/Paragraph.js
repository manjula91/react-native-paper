/* @flow */

import * as React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from './StyledText';

type Props = {
  style?: any,
};

/**
 * Typography component for showing a paragraph.
 *
 * ## Usage
 * ```js
 * const MyComponent = () => (
 *   <Paragraph>Paragraph</Paragraph>
 * );
 * ```
 */
const Paragraph = (props: Props) => (
  <StyledText
    {...props}
    alpha={0.87}
    family="regular"
    style={[styles.text, props.style]}
  />
);

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 2,
  },
});
