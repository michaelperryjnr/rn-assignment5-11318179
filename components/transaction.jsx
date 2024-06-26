import { View, Text, Image } from 'react-native'
import React from 'react'
import { useTheme } from './ThemeContext'

export default function Transaction({name, amount, icon, category, isPositive}) {
    const {isDarkMode} = useTheme();
  return (
    <View className="flex flex-row items-center justify-between mb-4">
      <View className="flex flex-row items-center justify-center gap-2">
        <View
          className={`${
            isDarkMode ? "bg-gray-100" : "bg-secondary-100"
          } px-3 py-3 rounded-full`}
        >
          <Image
            source={icon}
            resizeMode="contain"
            className="w-8 h-8"
            style={{
              tintColor: name === "Spotify" && "Apple Store"  ? null : "#FFFFFF",
            }}
          />
        </View>
        <View className="flex flex-col items-start justify-center">
          <Text
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } text-xl font-bold`}
          >
            {name}
          </Text>
          <Text
            className={`${
              isDarkMode ? "text-black" : "text-gray-600"
            } text-base font-light`}
          >
            {category}
          </Text>
        </View>
      </View>
      <View>
        {!isPositive ? (<Text
          className={`${
            isDarkMode ? "text-black" : "text-white"
          } text-xl font-bold`}
        >
          {amount}
        </Text>) : (<Text
          className={`text-black-300 text-xl font-bold`}
        >
          {amount}
        </Text>)}
      </View>
    </View>
  );
}