import { View, Text } from 'react-native'
import React from 'react'
import {getGlobalStyles} from '@/styles/globalStyles'
import Calendar from '@/components/Calendar';

export default function streak() {
    const globalStyles = getGlobalStyles();
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>LeetCode{"\n"}Dailys</Text>
            <View style={globalStyles.module}>
                <Text style={{ fontSize: 40 }}>🔥</Text>
            </View>
            <View style={globalStyles.module}>
                <Calendar full={true}/>
            </View>
        </View>
    )
}