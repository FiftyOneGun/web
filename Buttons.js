import React, { Component } from "react";
import {
  Text,
  Platform,
  StyleSheet,
  View,
  Alert,
  AppRegistry,
  YellowBox
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

class Buttons extends Component {
  constructor() {
    super();
    this.state = {
      nearYou: true,
      chipest: false,
      popular: false
    };
  }

  updateNearYou = () => {
    this.setState({
      nearYou: !this.state.nearYou,
      chipest: false,
      popular: false
    });
  };

  updateChipest = () => {
    this.setState({
      chipest: !this.state.chipest,
      nearYou: false,
      popular: false
    });
  };

  updatePopular = () => {
    this.setState({
      popular: !this.state.popular,
      nearYou: false,
      chipest: false
    });
  };

  render() {
    return [
      <Text style={{ marginLeft: 175 }}>
        Sorted by
      </Text>,
      <View style={styles.conteiner}>
        <ButtonGroup
          elevation={this.state.nearYou ? 20 : null }
          onPress={this.updateNearYou}
          buttons={["near you"]}
          containerStyle={styles.buttonsStyle}
        />
        <ButtonGroup
          elevation={this.state.chipest ? 20 : null}
          onPress={this.updateChipest}
          buttons={["chipest"]}
          containerStyle={styles.buttonsStyle}
        />
        <ButtonGroup
          elevation={this.state.popular ? 20 : null}
          onPress={this.updatePopular}
          buttons={["popular"]}
          containerStyle={styles.buttonsStyle}
        />
      </View>
    ];
  }
} 

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  buttonsStyle: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderColor: 'pink',
    backgroundColor: '#FFFFFF'
  }
});

export default Buttons;