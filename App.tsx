import {Text} from 'react-native';
import Header from './components/Header';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <Header />
        <Text>리액트 네이티브 스터디</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default App;
