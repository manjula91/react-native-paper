/* @flow */

import * as React from 'react';
import { ListView } from 'react-native';
import { Divider, withTheme } from 'react-native-paper';
import ButtonExample from './ButtonExample';
import CardExample from './CardExample';
import CheckboxExample from './CheckboxExample';
import DialogExample from './DialogExample';
import DividerExample from './DividerExample';
import ExampleListRow from './ExampleListRow';
import FABExample from './FABExample';
import GridViewExample from './GridViewExample';
import PaperExample from './PaperExample';
import ProgressBarExample from './ProgressBarExample';
import RadioButtonExample from './RadioButtonExample';
import RippleExample from './RippleExample';
import SearchBarExample from './SearchBarExample';
import SwitchExample from './SwitchExample';
import TextExample from './TextExample';
import TextInputExample from './TextInputExample';
import ToolbarExample from './ToolbarExample';
import AnimatedFABExample from './AnimatedFABExample';
import type { Theme } from 'react-native-paper/types';

type Props = {
  theme: Theme,
  navigation: any,
};

export const examples = {
  animated: AnimatedFABExample,
  button: ButtonExample,
  card: CardExample,
  checkbox: CheckboxExample,
  dialog: DialogExample,
  divider: DividerExample,
  fab: FABExample,
  grid: GridViewExample,
  paper: PaperExample,
  progressbar: ProgressBarExample,
  radio: RadioButtonExample,
  ripple: RippleExample,
  searchbar: SearchBarExample,
  switch: SwitchExample,
  text: TextExample,
  textInput: TextInputExample,
  toolbar: ToolbarExample,
};

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const dataSource = ds.cloneWithRows(Object.keys(examples));

class ExampleList extends React.Component<Props> {
  static navigationOptions = {
    title: 'Examples',
  };

  _renderRow = id => (
    <ExampleListRow
      title={examples[id].title}
      onPress={() => this.props.navigation.navigate(id)}
    />
  );

  _renderSeparator = (sectionId, rowId) => <Divider key={rowId} />;

  render() {
    const { theme: { colors: { background } } } = this.props;
    return (
      <ListView
        contentContainerStyle={{ backgroundColor: background }}
        dataSource={dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    );
  }
}

export default withTheme(ExampleList);
