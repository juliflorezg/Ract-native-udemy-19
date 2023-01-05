import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  TextInput,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {WhiteLogo} from '../components/WhiteLogo';
import {useForm} from '../hooks/useForm';
import {loginStyles} from '../theme/loginTheme';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {email, name, password, onChange} = useForm({
    email: '',
    name: '',
    password: '',
  });

  const onRegister = () => {
    console.log({email, password});
    Keyboard.dismiss();
  };

  return (
    <>
      {/* keyboard avoid view */}
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#5856d6'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={loginStyles.formContainer}>
          <WhiteLogo />
          <Text style={loginStyles.title}>Sign up</Text>
          <Text style={loginStyles.label}>Name</Text>
          <TextInput
            placeholder="Your name:"
            placeholderTextColor="rgba(255,255,255,0.8)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFielsIOS,
            ]}
            selectionColor="teal"
            value={email}
            onChangeText={value => onChange('name', value)}
            onSubmitEditing={onRegister}
            autoCapitalize="words"
            autoCorrect={false}
          />
          <Text style={loginStyles.label}>Email</Text>
          <TextInput
            placeholder="Your email:"
            placeholderTextColor="rgba(255,255,255,0.8)"
            keyboardType="email-address"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFielsIOS,
            ]}
            selectionColor="teal"
            value={email}
            onChangeText={value => onChange('email', value)}
            onSubmitEditing={onRegister}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Text style={loginStyles.label}>Password</Text>
          <TextInput
            placeholder="*****"
            placeholderTextColor="rgba(255,255,255,0.8)"
            underlineColorAndroid="white"
            style={[
              loginStyles.inputField,
              Platform.OS === 'ios' && loginStyles.inputFielsIOS,
            ]}
            selectionColor="teal"
            value={password}
            onChangeText={value => onChange('password', value)}
            onSubmitEditing={onRegister}
            secureTextEntry
          />
          {/* boton login */}
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={loginStyles.button}
              onPress={onRegister}>
              <Text style={loginStyles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
          {/* crear cuenta */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.replace('LoginScreen')}
            style={loginStyles.buttonReturn}>
            <Text style={loginStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
