import { StatusBar } from "expo-status-bar";
import { Text, View, Image, SectionList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, Transaction } from "../components";
import { icons, images } from "../constants";
import { useTheme } from "../components/ThemeContext";

const data = [
  {
    id: 1,
    name: "Apple Store",
    amount: "-$250",
    icon: icons.apple,
    category: "Entertainment",
    isPositive: false,
  },
  {
    id: 2,
    name: "Spotify",
    amount: "-$12,99",
    icon: icons.spotify,
    category: "Music",
    isPositive: false,
  },
  {
    id: 3,
    name: "Money Transfer",
    amount: "$300",
    icon: icons.receive,
    category: "Transaction",
    isPositive: true,
  },
  {
    id: 4,
    name: "Grocery",
    amount: "-$88",
    icon: icons.grocery,
    category: "Food",
    isPositive: false,
  },
  {
    id: 5,
    name: "Apple Store",
    amount: "-$250",
    icon: icons.apple,
    category: "Entertainment",
    isPositive: false,
  },
  {
    id: 6,
    name: "Spotify",
    amount: "-$12,99",
    icon: icons.spotify,
    category: "Music",
    isPositive: false,
  },
  {
    id: 7,
    name: "Money Transfer",
    amount: "$300",
    icon: icons.receive,
    category: "Transaction",
    isPositive: true,
  },
  {
    id: 8,
    name: "Grocery",
    amount: "-$88",
    icon: icons.grocery,
    category: "Food",
    isPositive: false,
  },
];


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
            } font-medium text-xl mb-6`}
          >
            See All
          </Text>
        </View>
        <SectionList 
        sections={[{title: "Transaction", data: data}]}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Transaction name={item.name} amount={item.amount} icon={item.icon} category={item.category}
        isPositive={item.isPositive}
        />}
        />
      </View>
      <StatusBar backgroundColor={`${isDarkMode ? "#FFFFFF" : "#0C0C12"}`} style="auto" />
    </SafeAreaView>
  );
}
