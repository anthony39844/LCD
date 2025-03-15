import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'

export default function Profile() {
    const globalStyles = getGlobalStyles();
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
        <View style={globalStyles.module}>
            <Text style={globalStyles.moduleText}>Daily Question</Text>
        </View>
        <View style={globalStyles.module}>
            <Text>Streak: </Text>
        </View>
        </View>
    )
}