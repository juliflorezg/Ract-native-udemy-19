import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  return (
    <>
      {/* background */}
      <Background />
      {/* keyboard avoid view */}

      <WhiteLogo />
      <Text style={loginStyles.title}>Login</Text>
      <Text style={loginStyles.label}>Email</Text>
      <TextInput
        placeholder="Your email:"
        placeholderTextColor="rgba(255,255,255,0.8)"
        keyboardType="email-address"
      />
    </>
  );
};
