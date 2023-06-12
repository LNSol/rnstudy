import {Dispatch, SetStateAction, useEffect, useRef} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface INameInputProps {
  name: string;
  changeName: Dispatch<SetStateAction<string>>;
  focus: boolean;
  greeting: () => void;
}

const NameInput = ({name, changeName, focus, greeting}: INameInputProps) => {
  const inputRef = useRef<TextInput | null>(null);

  useEffect(() => {
    if (focus) inputRef.current?.focus();
  }, [focus]);

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={changeName}
        placeholder='이름을 입력하세요.'
        ref={inputRef}
        onSubmitEditing={greeting}
      />
      <View style={styles.button}>
        <TouchableOpacity style={styles.add} activeOpacity={0.5}>
          <Icon name='add' color='#fff' size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 60,
    paddingHorizontal: 16,
    borderColor: '#8292aa',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    flex: 1,
  },
  button: {
    width: 46,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 23,
  },
  add: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#504aed',
  },
});
export default NameInput;
