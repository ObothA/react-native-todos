import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy coffee', key: '1' },
    { text: 'Create an app', key: '2' },
    { text: 'Play on the switch', key: '3' },
  ]);

  const pressHandler = (key: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>
        {/* To do form */}

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
