import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";

export default function Task(){
  const [task, setTask] = useState([])

  useEffect(()=>{

  }, [])
  
  return(
    <View>
      <Text>Pagina Task</Text>
    </View>
  )
  
}