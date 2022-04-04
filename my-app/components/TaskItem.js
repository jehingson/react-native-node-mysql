import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const TaskItem = ({ title, description, id, hanldeDelete }) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskFormScreen", {id})}
      >
        <Text style={styles.itemTitle}>{title}</Text>
        <Text  style={styles.itemTitle}>{description}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={{ 
          backgroundColor: "#ee5253",
          padding: 5,
          borderRadius: 5
        }}
        onPress={() => hanldeDelete(id)}
        >
        <Text  style={styles.itemTitle}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#34557B",
    padding: 20,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemTitle: {
    color: "#fff"
  }
})

export default TaskItem