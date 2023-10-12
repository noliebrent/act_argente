import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredText] = useState('');
        function goalInputContainer(enteredText) {
            setEnteredText(enteredText);
    }
function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredText('');
}

return (
    <View style={styles.inputContainer}>
        <TextInput
            style={styles.TextInput}
            placeholder="Your Course Goal"
            onChangeText={goalInputContainer}
            value={enteredGoalText}
            onSubmitEditing={addGoalHandler}
        />
    <Button color='rgba(47, 60, 128, 0.8)'
        title="Add Goal"
        onPress={addGoalHandler}
        disabled={enteredGoalText === ""}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    TextInput: {
        fontSize: 15,
        color: 'black',
        borderColor: '#2F3C7E',
        backgroundColor: '#FBEAEB',
        borderWidth: 2,
        marginRight: 10,
        padding: 5,
        width: '80%',
    },
});

export default GoalInput;