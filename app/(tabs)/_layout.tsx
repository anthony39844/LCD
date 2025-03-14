import React from 'react';
import { Tabs } from 'expo-router';
import Navbar from '@/components/Navbar';

export default function TabLayout() {
  
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
      }}
      tabBar={(props) => (
        <Navbar clicked={props.state.routeNames[props.state.index]} />
      )}
    >
      <Tabs.Screen 
        name="home" 
      />
      <Tabs.Screen 
        name="streak" 
      />
      <Tabs.Screen 
        name="profile" 
      />
      <Tabs.Screen 
        name="settings" 
      />
    </Tabs>
  );
}