import {useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Header from './components/Header';
import NameInput from './components/NameInput';

const App = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <KeyboardAvoidingView
          style={styles.block}
          behavior={Platform.select({ios: 'padding'})}>
          <Header />
          <View style={styles.content}>
            <Text style={styles.text}>TEST</Text>
            <Button title='Hello' />
          </View>
          <NameInput name={name} changeName={setName} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
});
export default App;
