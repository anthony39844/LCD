import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { RelativePathString, useRouter } from "expo-router";
import navBarStyles from '@/styles/navBarStyles';
import { MaterialIcons } from '@expo/vector-icons';
import { useColors } from '@/styles/colors';

type NavbarProps = {
  clicked: string;
};

export default function Navbar(props: NavbarProps) {
  const navStyle = navBarStyles();
  const router = useRouter();
  const colors = useColors();

  const tabs: [string, string][] = 
    [
      ["home", "home"], 
      ["streak", "local-fire-department"], 
      ["profile", "person"], 
      ["settings", "settings"]
    ];

  return (
    <View style={navStyle.navbar}>
        {tabs.map((tab) => {
          return (
            <Pressable 
              style={[
                props.clicked == tab[0] ? navStyle.focusedNavItem : navStyle.navItem,
                { width: `${90 / tabs.length}%` }
              ]} 
              key={tab[0]} 
              onPress={() => router.replace(`/${tab[0]}` as RelativePathString)}>
                <MaterialIcons name={tab[1] as keyof typeof MaterialIcons.glyphMap} size={30} color={props.clicked == tab[0] ? colors.text : colors.textUnfocused} />
                <Text style={props.clicked == tab[0] ? navStyle.focusedNavbarText : navStyle.navbarText}>{tab[0].toUpperCase()}</Text>
            </Pressable>
          )}
      )}
    </View>
  )
}
