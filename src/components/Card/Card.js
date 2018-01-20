/* @flow */

import * as React from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import Paper from '../Paper';
import withTheme from '../../core/withTheme';
import type { Theme } from '../../types';

const AnimatedPaper = Animated.createAnimatedComponent(Paper);

type Props = {
  elevation?: number,
  children: React.Node,
  onPress?: Function,
  style?: any,
  theme: Theme,
};

type State = {
  elevation: Animated.Value,
};

/**
 * A card is a sheet of material that serves as an entry point to more detailed information.
 *
 * **Usage:**
 * ```js
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Content>
 *       <Title>Card title</Title>
 *       <Paragraph>Card content</Paragraph>
 *     </Card.Content>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *     <Card.Actions>
 *       <Button>Cancel</Button>
 *       <Button>Ok</Button>
 *     </Card.Actions>
 *   </Card>
 * );
 * ```
 */
class Card extends React.Component<Props, State> {
  static defaultProps = {
    elevation: 2,
  };

  constructor(props) {
    super(props);
    this.state = {
      /* $FlowFixMe: somehow default props are not respected */
      elevation: new Animated.Value(this.props.elevation),
    };
  }

  state: State;

  _handlePressIn = () => {
    Animated.timing(this.state.elevation, {
      toValue: 8,
      duration: 200,
    }).start();
  };

  _handlePressOut = () => {
    Animated.timing(this.state.elevation, {
      /* $FlowFixMe: somehow default props are not respected */
      toValue: this.props.elevation,
      duration: 150,
    }).start();
  };

  render() {
    const { children, onPress, style, theme } = this.props;
    const { elevation } = this.state;
    const { roundness } = theme;
    const total = React.Children.count(children);
    const siblings = React.Children.map(
      children,
      child =>
        /* $FlowFixMe */
        typeof child === 'object' && child.type ? child.type.displayName : null
    );
    return (
      <AnimatedPaper
        style={[styles.card, { borderRadius: roundness, elevation }, style]}
      >
        <TouchableWithoutFeedback
          delayPressIn={0}
          onPress={onPress}
          onPressIn={onPress ? this._handlePressIn : undefined}
          onPressOut={onPress ? this._handlePressOut : undefined}
          style={styles.container}
        >
          <View style={styles.innerContainer}>
            {React.Children.map(
              children,
              (child, index) =>
                typeof child === 'object' && child !== null
                  ? /* $FlowFixMe */
                    React.cloneElement(child, {
                      index,
                      total,
                      siblings,
                    })
                  : child
            )}
          </View>
        </TouchableWithoutFeedback>
      </AnimatedPaper>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    margin: 4,
  },
  container: {
    flex: 1,
  },
  innerContainer: {
    flexGrow: 1,
  },
});

export default withTheme(Card);
