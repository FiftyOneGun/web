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
import DropdownMenu from "./dropdownMenu";
import Buttons from "./Buttons";
import RadioButton from "./radioButton";

export default class HomeActivity extends Component {

  render() {
    return [
      <View style={styles.conteiner}>
        <View style={styles.boxConteinerFirst}>
          <DropdownMenu />
        </View>
        <View style={styles.boxConteinerSecond}>
          <Buttons />
        </View>
        <View style={styles.boxConteinerThird}>
          <RadioButton />
        </View>
      </View>
    ];
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#F5F5F5'
  },
  boxConteinerFirst: {
    flex: 1,
    justifyContent: "center"
  },
  boxConteinerSecond: {
    flex: 1,
    justifyContent: "center"
  },
  boxConteinerThird: {
    flex: 4,
    justifyContent: "center"
  }
});