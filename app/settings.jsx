import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingOptions } from "../components";
import { useTheme } from "../components/ThemeContext";

const CustomSwitch = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable
        onPress={toggleTheme}
        className={`w-14 h-8 rounded-full p-1 ${
          isDarkMode ? "bg-green-400" : "bg-gray-300"
        }`}
      >
        <View
          className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-all duration-300 ${
            isDarkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </Pressable>
    </View>
  );
};

const Settings = () => {
    const {isDarkMode} = useTheme();
  return (
    <SafeAreaView className={`${isDarkMode ? "bg-primary " : "bg-secondary"} h-full flex justify-center px-6 py-6`}>
      <Text className={`font-bold text-3xl text-center ${isDarkMode? "text-black" : "text-white"}`}>
        Settings
      </Text>
      <View className="flex flex-col justify-center flex-1">
        <View className="flex flex-col gap-2">
          <SettingOptions name="Language" />
          <SettingOptions name="My Profile" />
          <SettingOptions name="Contact Us" />
          <SettingOptions name="Change Password" />
          <SettingOptions name="Privacy Policy" />
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className={`text-2xl font-bold ${isDarkMode? "text-black" : "text-white"}`}>Theme</Text>
          <View>
            <CustomSwitch />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
