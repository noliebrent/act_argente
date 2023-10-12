import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
return (
    <View style={styles.goalsListedStyle}>
        <Text style={styles.goal}>{props.goalText}</Text>
    </View>
);
};

const styles = StyleSheet.create({
    goalContainer: {
        flex: 1,
        padding: 1,
        fontSize: 20,
        color: 'white',
    },
    goal: {
        fontSize: 18,
        marginBottom: 8,
        color: 'white',
        fontWeight: 'bold',
    },
    goalsListedStyle: {
        fontSize: 18,
        marginBottom: 8,
        color: 'white',
        backgroundColor:'rgba(47, 60, 126, 0.7)',
        borderColor: '#FBEAEB',
        paddingTop: 7,
        paddingBottom: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
});

export default GoalItem;