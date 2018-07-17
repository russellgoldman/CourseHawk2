import React, { PureComponent } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import BannerContainer from '../../common/BannerContainer';

class UserLogin extends PureComponent {
  state = {
    email: '',
    password: '',
  };

  click() {
    console.log('clicked');
  }

  render() {
    const {
      outerContainer,
      row,
      labelStyle,
      supplementaryLabel,
      emailInputStyle,
      passwordInputStyle,
      buttonStyle,
      bannerContainerStyle,
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: '#5b01c4', }}>
        <View style={outerContainer}>
          <View style={{ marginTop: '7.5%' }}/>
          <View style={row}>
            <View style={{ flex: 0.5 }}/>
            <Text style={labelStyle}>School email:</Text>
            <TextInput style={emailInputStyle} autoCapitalize="none" editable maxLength={40}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.text} />
            <Text style={supplementaryLabel}> @mylaurier.ca</Text>
          </View>
          <View style={row}>
            <View style={{ flex: 0.5 }}/>
            <Text style={labelStyle}>Password:</Text>
            <TextInput style={passwordInputStyle} autoCapitalize="none" editable maxLength={40}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.text} secureTextEntry />
            <View style={{ flex: 0.75 }}/>
          </View>
          <View style={{ flex: 1 }}>
            <View style={buttonStyle}>
              <Button onPress={() => this.click()} title="Login"
                color="#000" accessibilityLabel="Login" />
            </View>
          </View>
        </View>
        <View style={bannerContainerStyle}>
          <BannerContainer />
        </View>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    flex: 8.7,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    maxHeight: '11.5%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 11,
    marginRight: 11,
  },
  labelStyle: {
    color: '#000',
    flex: 5,
    fontSize: 16,
  },
  supplementaryLabel: {
    color: '#000',
    flex: 5,
    fontSize: 16,
  },
  emailInputStyle: {
    color: '#000',
    flex: 4,
    height: 35,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 7.5,
  },
  passwordInputStyle: {
    color: '#000',
    flex: 8.25,
    height: 35,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 7.5,
  },
  buttonStyle: {
    marginTop: '7.5%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: '12.5%',
    marginLeft: '25%',
    marginRight: '25%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerContainerStyle: {
    flex: 1,
    justifyContent: 'flex-end',
  },
};

export default UserLogin;
