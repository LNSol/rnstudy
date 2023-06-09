import {PropsWithChildren, useState} from 'react';
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Header from './components/Header';
import NameInput from './components/NameInput';

const DismissKeyboard = ({children}: PropsWithChildren) => (
  <TouchableWithoutFeedback
    style={styles.block}
    onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const App = () => {
  const [name, setName] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <DismissKeyboard>
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
        </DismissKeyboard>
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
