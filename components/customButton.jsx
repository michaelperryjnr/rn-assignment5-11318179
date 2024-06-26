import { TouchableOpacity, Text, Image } from "react-native";
import React, { useEffect } from "react";

const CustomButton = ({ title, icon, handlePress, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-gray-300 rounded-full justify-center items-center ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Image source={icon} resizeMode="contain" className="w-6 h-6" />
      <Text className={`text-sm font-semibold text-gray-900`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
