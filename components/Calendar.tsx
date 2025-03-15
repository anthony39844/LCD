import { View, Text } from 'react-native'
import React from 'react'
import calendarStyles from '@/styles/calendarStyles';

type calendarProps = {
    full: boolean
}

export default function Calendar(props: calendarProps) {
    const calendarStyle = calendarStyles();
    const date = new Date()
    const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    let weekday = date.getDay()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let currentDay = 0
    const firstDay = new Date(year, month, 1).getDay();

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const updateDay = (day: number) => {
        currentDay++
        return day - firstDay + 1
    }

    return (
        <View style={calendarStyle.container}>
            <Text style={calendarStyle.title}>{months[month]}</Text>
            {props.full ? 
                (
                <View style={calendarStyle.calendar}>
                    <View style={calendarStyle.week}> 
                        {weekdays.map((day, i) => {
                            return (
                                <View key={i} style={calendarStyle.day}>
                                    <Text style={calendarStyle.text} key={i}>
                                        {day}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={calendarStyle.week}>
                        {Array.from({length: 7}, (_, i) => {
                            return (
                                <View key={i}  style={calendarStyle.day}>
                                    <Text style={calendarStyle.text} key={i} >
                                        {i < firstDay ? "" : updateDay(i)}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    {Array.from({length: Math.ceil((30 - (7 - firstDay)) / 7)}, (_, i) => {
                        return (
                            <View key={i} style={calendarStyle.week}>
                                {Array.from({length: 7}, (_, i) => {
                                    currentDay++
                                    return (
                                        <View key={i}  style={calendarStyle.day}>
                                            <Text style={calendarStyle.text} key={i} >
                                                {currentDay > getDaysInMonth(year, month) ? "" : currentDay}
                                            </Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })}
                </View>
                )
                : 
                (
                <View style={calendarStyle.calendar}>
                    <View style={calendarStyle.week}>
                        {weekdays.map((day, i) => {
                            return (
                                <View key={i} style={calendarStyle.day}>
                                    <Text style={calendarStyle.text} key={i}>
                                        {day}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={calendarStyle.week}>
                        {Array.from({length: 7}, (_, i) => {
                            return (
                                <View key={i}  style={[calendarStyle.day, {backgroundColor: "transparent"}]}>
                                    <Text style={calendarStyle.text} key={i} >
                                        {day - weekday + i}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
                )
            }
        </View>
    )
}