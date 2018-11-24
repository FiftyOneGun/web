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
import { ButtonGroup, Button, Icon } from "react-native-elements";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

class RadioButton extends Component {
  constructor() {
    super();
    this.state = {
      WiFi: false,
      PaymentByCard: false,
      Discounts: false,
      VegeterianMenu: false,
      LiveMusic: false,
      BusinessLunch: false,
      Alcohol: false,
      Terrace: false,
      AllNight: false
    };
  }

  render() {
    return [
      <View>
        <Icon name="creditcard" color="black" />

        <View style={styles.conteiner}>
          <Button
            buttonStyle={styles.buttonStyle}
            icon={{ name: "wifi", size: 35, color: "black"} }
            elevation={this.state.WiFi ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() => this.setState({ WiFi: !this.state.WiFi })}
            title="Wi-fi"
          />
          <Button
          icon={{ name: "creditcard", size: 35, color: "black"} }
            elevation={this.state.PaymentByCard ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() =>
              this.setState({ PaymentByCard: !this.state.PaymentByCard })
            }
            buttons={["Payment by card"]}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            elevation={this.state.Discounts ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() => this.setState({ Discounts: !this.state.Discounts })}
            buttons={["Discounts"]}
            buttonStyle={styles.buttonStyle}
          />
        </View>

        <View style={styles.conteiner}>
          <Button
            elevation={this.state.VegeterianMenu ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() =>
              this.setState({ VegeterianMenu: !this.state.VegeterianMenu })
            }
            buttons={["Vegeterian menu"]}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            elevation={this.state.LiveMusic ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() => this.setState({ LiveMusic: !this.state.LiveMusic })}
            buttons={["Live music"]}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            elevation={this.state.BusinessLunch ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() =>
              this.setState({ BusinessLunch: !this.state.BusinessLunch })
            }
            buttons={["Business lunch"]}
            buttonStyle={styles.buttonStyle}
          />
        </View>

        <View style={styles.conteiner}>
          <Button
            elevation={this.state.Alcohol ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() => this.setState({ Alcohol: !this.state.Alcohol })}
            buttons={["Alcohol"]}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            elevation={this.state.Terrace ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() => this.setState({ Terrace: !this.state.Terrace })}
            buttons={["Terrace"]}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            elevation={this.state.AllNight ? 20 : null}
            selectedBackgroundColor="pink"
            onPress={() => this.setState({ AllNight: !this.state.AllNight })}
            buttons={["24/7"]}
            buttonStyle={styles.buttonStyle}
          />
        </View>

        <ButtonGroup
          elevation={this.state.WiFi ? 20 : null}
          selectedBackgroundColor="pink"
          onPress={() => this.setState({ WiFi: !this.state.WiFi })}
          buttons={["Confirm"]}
          containerStyle={{ height: 40, borderColor: "pink" }}
        />
      </View>
    ];
  }
}

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    marginBottom: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  buttonStyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    borderColor: "pink",
    backgroundColor: "#FFFFFF"
  }
});

export default RadioButton;
