/* @flow */

import color from 'color';
import * as React from 'react';
import { View, Text } from 'react-native';
import Divider from './Divider';
import withTheme from '../core/withTheme';
import type { Theme } from '../types';

type Props = {
  /**
   * Title to show as the header for the section.
   */
  title?: string,
  /**
   * Content of the `DrawerSection`.
   */
  children: React.Node,
  /**
   * @optional
   */
  theme: Theme,
};

/**
 * Drawer container slides in from the left and contains the navigation destinations for your app.
 *
 * ## Usage
 * ```js
 * export default class MyComponent extends Component {
 *   state = {
 *     active: 'First Item',
 *   };
 *
 *   render() {
 *     const { active } = this.state;
 *     return (
 *       <DrawerSection title="Subheader">
 *         <DrawerItem
 *           label="First Item"
 *           active={this.state.active === 'First Item'}
 *           onPress={() => { this.setState({ active: 'First Item' }); }}
 *        />
 *         <DrawerItem
 *           label="Second Item"
 *           active={this.state.active === 'Second Item'}
 *           onPress={() => { this.setState({ active: 'Second Item' }); }}
 *        />
 *      </DrawerSection>
 *     );
 *   }
 * }
 * ```
 */
const DrawerSection = ({ children, title, theme, ...props }: Props) => {
  const { colors, fonts } = theme;
  const titleColor = color(colors.text)
    .alpha(0.54)
    .rgb()
    .string();
  const fontFamily = fonts.medium;

  return (
    <View {...props}>
      {title && (
        <View style={{ height: 40, justifyContent: 'center' }}>
          <Text
            numberOfLines={1}
            style={{ color: titleColor, fontFamily, marginLeft: 16 }}
          >
            {title}
          </Text>
        </View>
      )}
      {children}
      <Divider style={{ marginVertical: 4 }} />
    </View>
  );
};

export default withTheme(DrawerSection);
