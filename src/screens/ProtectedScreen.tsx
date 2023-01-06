import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
export const ProtectedScreen = () => {
  const {user, token, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected Screen</Text>
      <Button title="logout" color="#5856d6" onPress={logout} />
      <Text style={styles.userInfo}>{JSON.stringify(user, null, 4)}</Text>
      <Text style={styles.userInfo}>{token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    color: 'black',
  },
});
