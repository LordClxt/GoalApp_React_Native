import { useState } from "react";
import {  Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {

  // Gestiond de la modal
  const [isOpen, setOpen] = useState(false)

  const openModal = ()=>{
    setOpen(true)
  }
  const closeModal = ()=>{
    setOpen(false)
  }

  // Etat pour le champ controller
  const [entiredGoalText, setEntiredGoalText] = useState("");
  
  // Etat pour nos Taches
  const [courseGoals, setCourseGoals] = useState([]);

  // Fonction de mise a jour de l'etat du champ controllé
  const goalInputHandler = (enteredText) => {
    setEntiredGoalText(enteredText);
  };
  // Fonction pour ajouter une nouvelle tache
  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: entiredGoalText, id: Math.random().toString()},
    ]);
    setEntiredGoalText('')
    closeModal()
  };
  
  // Supprimer une tache
  const deleteItem = (id)=>{
      setCourseGoals(currentCourseGoals=>{
        return currentCourseGoals.filter(goal=> goal.id != id)
      })
  }

  return (
    <>
    <StatusBar style="light" />
    <View style={styles.AppContainer}>
        <Button title="Add new goal" color="#5e0acc" onPress={openModal} />
      <GoalInput closeModal={closeModal} showModal={isOpen} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} entiredGoalText={entiredGoalText} />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData)=>{
          return (
                  <GoalItem id={itemData.item.id} deleteItem={deleteItem} item={itemData.item} />
                )
        }} keyExtractor={(item, index)=>{
          return item.id
        }} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: "#1e085a",
    paddingTop: 50,
    paddingHorizontal: 20,
    
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#5e0acc",
    borderBottomWidth: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
