import { View, Text, Image } from "react-native";
import React, { useMemo }, { useEffect } from "react";
import { getGlobalStyles } from "@/styles/globalStyles";
import { useDarkMode } from "@/contexts/darkModeContext";
import { getUser, getSolved } from '@/api/leetcode';
import DonutChart from '@/components/donutChart';
import { useColors } from '@/styles/colors';

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
