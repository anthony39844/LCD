import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function Navbar() {
  return (
    <View style={styles.navbar}>
        <Pressable>
            <Text style={styles.navbarText}>Home</Text>
        </Pressable>
        <Pressable>
            <Text style={styles.navbarText}>Streak</Text>
        </Pressable>
        <Pressable>
            <Text style={styles.navbarText}>Profile</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    padding: 10,
    gap: 10,
    width: '100%',
  },
  navbarText: {
    padding: 10,
    fontFamily: 'JetBrainsMono-Regular',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
           