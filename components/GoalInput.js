import { Button, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={props.entiredGoalText}
          onChangeText={props.goalInputHandler}
          placeholder="Your cours goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              color="#5e0acc"
              onPress={props.addGoalHandler}
              title="Add Goal"
            />
          </View>
          <View style={styles.button}>
            <Button onPress={props.closeModal} title="Cancel" color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 30,
    gap: 15,
    backgroundColor: "#311b6b",
  },
  textInput: {
    width: "88%",
    marginEnd: 6,
    borderWidth: 2,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    padding: 16,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 6,
    width: "70%",
  },
  button: {
    flex: 1,
  },
});
