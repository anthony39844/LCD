import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { RelativePathString, useRouter } from "expo-router";
import navBarStyles from '@/styles/navBarStyles';

type NavbarProps = {
  clicked: string;
};

export default function Navbar(props: NavbarProps) {
  const navStyle = navBarStyles();
  const router = useRouter();
  const tabs: string[] = ["home", "streak", "profile", "settings"];
  return (
    <View style={navStyle.navbar}>
        {tabs.map((tab) => {
          return (
            <Pressable 
              style={[
                props.clicked == tab ? navStyle.focusedNavItem : navStyle.navItem,
                { width: `${90 / tabs.length}%` }
              ]} 
              key={tab} 
              onPress={() => router.replace(`/${tab}` as RelativePathString)}>
                <Text style={props.clicked == tab ? navStyle.focusedNavbarText : navStyle.navbarText}>{tab.toUpperCase()}</Text>
            </Pressable>
          )}
      )}
    </View>
  )
}
