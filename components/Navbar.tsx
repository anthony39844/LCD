import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { RelativePathString, useRouter } from "expo-router";
import {getGlobalStyles} from '@/styles/globalStyles'

type NavbarProps = {
  clicked: string;
};

export default function Navbar(props: NavbarProps) {
  const globalStyles = getGlobalStyles();
  const router = useRouter();
  const tabs: string[] = ["home", "streak", "profile", "settings"];
  return (
    <View style={globalStyles.navbar}>
        {tabs.map((tab) => {
          return (
            <Pressable style={{...globalStyles.navItem, width: `${90 / (tabs.length)}%`}} key={tab} onPress={() => router.replace(`/${tab}` as RelativePathString)}>
                <Text style={props.clicked == tab ? globalStyles.focusedNavbarText : globalStyles.navbarText}>{tab.toUpperCase()}</Text>
            </Pressable>
          )}
      )}
    </View>
  )
}
