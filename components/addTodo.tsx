import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function AddTodo({
  submitHandler,
}: {
  submitHandler: (text: string) => void;
}) {
  const [text, setText] = useState('');

  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />
      <Button
        onPress={() => submitHandler(text)}
        title='Add Todo'
        color='coral'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
