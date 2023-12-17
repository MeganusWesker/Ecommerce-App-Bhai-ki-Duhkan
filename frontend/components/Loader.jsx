import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import { colors } from '../styles/styles'

const Loader = () => {
  return (
      <ActivityIndicator
        style={{
            position:"absolute",
            alignSelf:"center",
            top:"50%",
        }}

        color={colors.color1}
        size={80}
         
      />
  )
}

export default Loader