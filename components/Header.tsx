import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = () => {
  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.statusBar, {height: top}]} />
      <StatusBar backgroundColor='#504aed' barStyle='light-content' />
      <View style={styles.block}>
        <Text style={styles.title}>Hello</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 80,
    backgroundColor: '#504aed',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  statusBar: {
    backgroundColor: '#504aed',
  },
});
export default Header;
