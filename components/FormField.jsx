import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const FormField = ({title, placeholder, otherStyles, handleChangeText, value, ...props}) => {
    const [showpassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 font-pmedium text-base">
        {title}
      </Text>
      <View className="w-full border border-black-200 rounded-2xl bg-black-100 focus:border-secondary items-center h-16 flex flex-row px-4">
        <TextInput 
        className="text-white text-base font-psemibold flex-1 "
        value={value} 
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showpassword}
        />
        {title === 'Password' && <TouchableOpacity
        onPress={()=> setShowPassword(!showpassword)}>
            <Image
            source={!showpassword ? icons.eye : icons.eyeHide}
            className="h-6 w-6"
            resizeMode='contain'
            />
        </TouchableOpacity>
            }

      </View>
    </View>
  )
}

export default FormField