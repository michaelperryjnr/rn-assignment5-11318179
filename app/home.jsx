import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "../components";
import { icons, images } from "../constants";
import { useTheme } from "../components/ThemeContext";

export default function Home() {
  const {isDarkMode} = useTheme();
  return (
    <SafeAreaView
      className={`${isDarkMode ? "bg-primary" : "bg-secondary"} h-full`}
    >
      <View className="flex flex-col justify-center px-6 py-6">
        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row gap-2 items-center justify-center">
            <Image
              source={images.profile}
              resizeMode="contain"
              className="w-15 h-15"
            />
            <View>
              <Text className="font-normal text-sm text-gray-400 dark:text-gray-300">
                Welcome back,
              </Text>
              <Text
                className={`font-semibold text-lg ${
                  isDarkMode ? "text-black" : "text-white"
                }`}
              >
                Eric Atsu
              </Text>
            </View>
          </View>
          <View
            className={`${
              isDarkMode ? "bg-gray-300" : "bg-secondary-100"
            } rounded-full px-3 py-3`}
          >
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                tintColor: isDarkMode ? "#000000" : "#FFFFFF",
              }}
              className={`w-6 h-6 ${isDarkMode ? "" : "tint-[#FFFFFF]"} `}
            />
          </View>
        </View>
        <Image
          source={images.card}
          resizeMode="contain"
          className="w-full mt-6"
        />
        <View className="flex flex-row items-center justify-between mt-4 px-4 py-2">
          <View className="flex flex-col items-center justify-center gap-2">
            <View
              className={`${
                isDarkMode ? "bg-gray-300" : "bg-secondary-100"
              } rounded-full px-3 py-3`}
            >
              <Image
                source={icons.send}
                resizeMode="contain"
                style={{
                  tintColor: isDarkMode ? "#000000" : "#FFFFFF",
                }}
                className={`${isDarkMode ? "outline-white" : ""} w-6 h-6 `}
              />
            </View>
            <Text className={`${isDarkMode ? "text-black" : "text-white"}`}>
              Sent
            </Text>
          </View>
          <View className="flex flex-col items-center justify-center gap-2">
            <View
              className={`${
                isDarkMode ? "bg-gray-300" : "bg-secondary-100"
              } rounded-full px-3 py-3`}
            >
              <Image
                source={icons.receive}
                resizeMode="contain"
                style={{
                  tintColor: isDarkMode ? "#000000" : "#FFFFFF",
                }}
                className={`${isDarkMode ? "outline-white" : ""} w-6 h-6 `}
              />
            </View>
            <Text className={`${isDarkMode ? "text-black" : "text-white"}`}>
              Receive
            </Text>
          </View>
          <View className="flex flex-col items-center justify-center gap-2">
            <View
              className={`${
                isDarkMode ? "bg-gray-300" : "bg-secondary-100"
              } rounded-full px-3 py-3`}
            >
              <Image
                source={icons.loan}
                resizeMode="contain"
                style={{
                  tintColor: isDarkMode ? "#000000" : "#FFFFFF",
                }}
                className={`${isDarkMode ? "outline-white" : ""} w-6 h-6 `}
              />
            </View>
            <Text className={`${isDarkMode ? "text-black" : "text-white"}`}>
              Loan
            </Text>
          </View>
          <View className="flex flex-col items-center justify-center gap-2">
            <View
              className={`${
                isDarkMode ? "bg-gray-300" : "bg-secondary-100"
              } rounded-full px-3 py-3`}
            >
              <Image
                source={icons.topUp}
                resizeMode="contain"
                style={{
                  tintColor: isDarkMode ? "#000000" : "#FFFFFF",
                }}
                className={`${isDarkMode ? "outline-white" : ""} w-6 h-6 `}
              />
            </View>
            <Text className={`${isDarkMode ? "text-black" : "text-white"}`}>
              Topup
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center justify-between mt-4">
          <Text
            className={`${
              isDarkMode ? "text-black" : "text-white"
            } font-medium text-2xl`}
          >
            Transaction
          </Text>
          <Text
            className={`${
              isDarkMode ? "text-black-300" : "text-black-300"
            } font-medium text-xl`}
          >
            See All
          </Text>
        </View>
      </View>
      <StatusBar backgroundColor="#FFFFFF" style="auto" />
    </SafeAreaView>
  );
}
