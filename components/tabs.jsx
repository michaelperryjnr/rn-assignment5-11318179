import { Tabs } from "expo-router";
import { useTheme } from "./ThemeContext";
import { icons } from "../constants";
import { View, Image, Text } from "react-native";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: color === "#1472FF" ? "#1472FF" : "#CDCDE0",
        }}
      />
      <Text
        className={`${focused ? "font-semibold" : "font-normal"} text-xs ${
          color === "#1472FF"
            ? "text-blue-500"
            : "text-gray-400 dark:text-gray-500"
        }`}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { isDarkMode } = useTheme();
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#1472FF",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: isDarkMode ? "#FFFFFF" : "#161622",
          borderTopWidth: 1,
          borderTopColor: isDarkMode ? "#FFFFFF" : "#161622",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mycards"
        options={{
          title: "My Cards",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.myCards}
              color={color}
              name="My Cards"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.statistics}
              color={color}
              name="Statistics"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.settings}
              color={color}
              name="Settings"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
