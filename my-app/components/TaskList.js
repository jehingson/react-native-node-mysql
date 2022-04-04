import { FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from "@react-navigation/native"

import TaskItem from './TaskItem'
import { getTasks, deleteTask } from '../api'

const TaskList = () => {

  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  const isFocused = useIsFocused()

  const loadTasks = async () => {
    const data = await getTasks()
    setTasks(data)
  }

  useEffect(() => {
    loadTasks()
  }, [isFocused])

  const onRefresh = React.useCallback( async () => {
    setLoading(true)
    await loadTasks()
    setLoading(false)
  })

  const hanldeDelete = async id => {
    await deleteTask(id)
    await loadTasks()
  }

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ''}
      refreshControl={
        <RefreshControl 
          refreshing={loading}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
          onRefresh={onRefresh}
        />
      }
      renderItem={(({ item }) => 
      <TaskItem 
        title={item.title} 
        description={item.description} 
        id={item.id}
        hanldeDelete={hanldeDelete}
      />)}
    />
  )
}

export default TaskList