import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
import { getGlobalStyles } from '@/styles/globalStyles'

export default function Settings() {
    const router = useRouter();
    const globalStyles = getGlobalStyles();

    return (
        <View style={globalStyles.container}>
            <Text>Settings</Text>
            <Pressable style={globalStyles.button} onPress={() => router.replace("/")}>
                <Text style={globalStyles.buttonText}>Log Out</Text>
            </Pressable>
        </View>
    )
}