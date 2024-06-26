import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants'
import { useTheme } from './ThemeContext'

export default function SettingOptions({name}) {
    const {isDarkMode} = useTheme();
  return (
    <View className="flex flex-col gap-2 mb-6">
    <View className="flex flex-row justify-between">
      <Text className={`text-lg ${isDarkMode? "text-black" : "text-white"}`}>{name}</Text>
      <Text className="text-gray-300 text-lg">{">"}</Text>
    </View>
    <View className="bg-gray-100 h-[1px] w-full"></View>
    </View>
  )
}