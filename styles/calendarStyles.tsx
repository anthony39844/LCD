import { useColors } from "./colors"
import { StyleSheet } from 'react-native'

export default function calendarStyles() {
    return StyleSheet.create({
        container: {
            width: "100%", 
            alignItems: "center",
        },
        calendar: {
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
        },
        week: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '100%',
        },
        day: {
            width: "14.28%",
            alignItems: 'center',
        },
        title: {
            fontFamily: "JetBrainsMono-Regular",
            fontWeight: "bold",
            fontSize: 20,
        }, 
        text: {
            fontFamily: "JetBrainsMono-Regular",
            fontSize: 16,
        }
    })
}