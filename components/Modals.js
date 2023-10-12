import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, Modal, Pressable} from 'react-native';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';
import Smiley from '@mui/icons-material/InsertEmoticon';

export default function Modals() {
  const [modalVisible, setModalVisible,courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(goalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: goalText, key: Math.random().toString() },
    ]);
  }

  return (
    <ImageBackground
      source={require('./assets/bg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.appContainer}>
      <View style={styles.modalview}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
      <Pressable onPress={() => navigation.navigate('Signup')}>
      <Smiley style={styles.smiley}></Smiley>
      </Pressable>
      </Modal>
      </View>
        <Text style={styles.title}>TEAM EXODIA</Text>
        <GoalInput onAddGoal={addGoalHandler} />
        <View style={styles.goalListContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => (
              <GoalItem goalText={itemData.item.text} />
            )}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  smiley: {
    color: "white",
    fontSize: 40,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#00FF00',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: '#FF00FF',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  goalListContainer: {
    flex: 5,
    maxHeight: 200,
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  smiley: {
    color: "white",
    fontSize: 30,
  },
  modalview: {
    justifyContent: 'left',
  }
});