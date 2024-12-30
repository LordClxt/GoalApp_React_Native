import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {
    
  return (
      <View style={styles.goal}>
        <Pressable android_ripple={{color: '#210644'}} onPress={props.deleteItem.bind(this, props.id)}>
            <Text style={styles.goalText}>{props.item.text}</Text>
        </Pressable>
    </View>
  );    
};

export default GoalItem;

const styles = StyleSheet.create({
  goal: {
    marginVertical: 5,
    backgroundColor: "#5e0acc",
    borderRadius: 7,
  },
  goalText: {
    padding:8,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
