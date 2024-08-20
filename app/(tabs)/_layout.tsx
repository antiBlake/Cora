import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, View, Text } from 'react-native';
import { icons } from '../../constants'

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const Tabicon = ({ icon, color, name, focused }) =>{
    return (
      <View className="justify-center items-center">
        <Image
        source={icon}
        resizeMode='contain'
        className="w-6 h-6"
        tintColor={color}
        />
        <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color: color}}>
          {name}
        </Text>
      </View>
    )
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle:{
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84
        }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Tabicon
            name="Home"
            color={color}
            focused={focused}
            icon={icons.home}
            />
          ),
        }}
      />
            <Tabs.Screen
        name="bookmark"
        options={{
          title: 'Bookmark',
          tabBarIcon: ({ color, focused }) => (
            <Tabicon
            name="Bookmark"
            color={color}
            focused={focused}
            icon={icons.bookmark}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, focused }) => (
            <Tabicon
            name="Create"
            color={color}
            focused={focused}
            icon={icons.plus}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Tabicon
            name="Profile"
            color={color}
            focused={focused}
            icon={icons.profile}
            />
          ),
        }}
      />

    </Tabs>
    
  );
}
