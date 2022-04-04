import React, { useState, useEffect } from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import Layouts from '../components/Layouts'
import { saveTask, getTask, updateTask } from '../api'

function TaskFormScreen({ navigation, route }) {

  const [value, setValue] = useState({
    title: "",
    description: "",
  })
  const [edit, setEdit] = useState(false)

  useEffect( async () => {
    if (route.params && route.params.id) {
      navigation.setOptions({ headerTitle: "Actualizar Tarea" })
      const res = await getTask(route.params.id)
      setValue({
        title: res.title,
        description: res.description
      })
      setEdit(true)
    }
  }, [])

  const handleSubmit = async () => {
    try {
      if (edit) {
        await updateTask(route.params.id, value)
        navigation.navigate("Home")
      } else {
        await saveTask(value) 
        navigation.navigate("Home")
      }
    } catch (error) {
      console.log('err',)
    }
    
  }

  return (
    <Layouts>
      <TextInput 
        style={styles.input}
        placeholder="Escribir Titulo"
        placeholderTextColor="#575674"
        value={value.title}
        onChangeText={(text) => setValue({ ...value, title: text})}
      />
      <TextInput 
        style={styles.input}
        placeholder="Escribir Descripción"
        placeholderTextColor="#575674"
        value={value.description}
        onChangeText={(text) => setValue({ ...value, description: text})}
      />
      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
        <Text style={styles.text}>{edit ? "Actualizar" : "Guardar"}</Text>
      </TouchableOpacity>
    </Layouts>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "90%",
    borderWidth: 1,
    marginVertical: 4,
    fontSize: 14,
    borderColor: "#34557B",
    height: 40,
    color: "#fff",
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonSave: {
    marginVertical: 20,
    borderRadius: 5,
    backgroundColor: "#34557B",
    width: "90%",
    paddingVertical: 10,
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 15
  }
})

export default TaskFormScreen