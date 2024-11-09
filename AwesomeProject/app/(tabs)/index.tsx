import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';

export default function App() {


  const [goals, setGoals] = useState([])

  

  function addGoalHandler(){
    setGoals((currentGoals) => [...currentGoals,goalText])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal = {addGoalHandler} />
      <View style={styles.goalsContainer} >
        <FlatList 
        data = {goals}
        renderItem={(itemData) => {
          return <GoalItem text={itemData.item} />
        }} />
          

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer: {
      paddingTop: 50,
      paddingHorizontal:16,
      backgroundColor: '#fff',
      flex: 1 ,
    },
    

    goalsContainer: {
      flex: 4,
    },

    
});
