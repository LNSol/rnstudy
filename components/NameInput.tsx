import {Dispatch, SetStateAction} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

interface INameInputProps {
  name: string;
  changeName: Dispatch<SetStateAction<string>>;
}

const NameInput = ({name, changeName}: INameInputProps) => {
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={changeName}
        placeholder='이름을 입력하세요.'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 60,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderColor: '#8292aa',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 16,
  },
});
export default NameInput;
