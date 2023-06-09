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

const GREETING = [
  {hour: 22, greeting: 'Night'},
  {hour: 18, greeting: 'Evening'},
  {hour: 12, greeting: 'Afternoon'},
  {hour: 5, greeting: 'Morning'},
];

const getGreeting = (hour: number, name: string) => {
  const greeting = GREETING.find(greet => hour >= greet.hour)?.greeting;

  return `Good ${greeting}, ${name}!`;
};

const App = () => {
  const [name, setName] = useState('');
  const [greetingWithName, setGreetingWithName] = useState('');
  const [focus, setFocus] = useState(false);

  const greeting = () => {
    const hour = new Date().getHours();

    if (!name) {
      setFocus(true);
    } else {
      setGreetingWithName(getGreeting(hour, name));
      setName('');
      setFocus(false);
      Keyboard.dismiss();
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={['bottom']}>
        <DismissKeyboard>
          <KeyboardAvoidingView
            style={styles.block}
            behavior={Platform.select({ios: 'padding'})}>
            <Header />
            <View style={styles.content}>
              <Text style={styles.text}>{greetingWithName}</Text>
              <Button title='Hello' onPress={greeting} />
            </View>
            <NameInput
              name={name}
              changeName={setName}
              focus={focus}
              greeting={greeting}
            />
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
    height: 38,
  },
});
export default App;
