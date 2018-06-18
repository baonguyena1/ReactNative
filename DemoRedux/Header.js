import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";

class Header extends Component {
    render() {
        return (
            <View style={ style.header }>
                <Text style={ style.appName }>EXAMPLE 1:{'\n'}APP COMPONENT</Text>
                <Text style={ style.value }>{this.props.value}</Text>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return { value: state.value };
}

export default connect(mapStateToProps)(Header);

const style = StyleSheet.create({
    header : {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    appName: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    value: {
        color: 'yellow',
        fontSize: 40
    }
})