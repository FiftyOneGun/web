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

class DropdownMenu extends Component {
	render() {
		return [
			<MenuProvider style={{ flexDirection: "column", padding: 30 }}>
				<Menu onSelect={value => alert(`You Clicked : ${value}`)}>
					<MenuTrigger>
						<Text style={styles.headerText}>Top 10</Text>
					</MenuTrigger>

					<MenuOptions>
						<MenuOption value={"Top 10"}>
							<Text style={styles.menuContent}>Top 10</Text>
						</MenuOption>
						<MenuOption value={"Top 20"}>
							<Text style={styles.menuContent}>Top 20</Text>
						</MenuOption>
						<MenuOption value={"Top 50"}>
							<Text style={styles.menuContent}>Top 50</Text>
						</MenuOption>
						<MenuOption value={"Top 100"}>
							<Text style={styles.menuContent}>Top 100</Text>
						</MenuOption>
					</MenuOptions>
				</Menu>
			</MenuProvider>
		];
	}
}

const styles = StyleSheet.create({
	headerText: {
		textAlign: "center",
		fontSize: 20,
		margin: 10,
		fontWeight: "bold"
	},
	menuContent: {
		color: "#000",
		fontWeight: "bold",
		padding: 2,
		fontSize: 20
	}
});

export default DropdownMenu;
