import { View, Text, StyleSheet } from 'react-native'
import { useColors } from './colors'

export default function navBarStyles() {
    const colors = useColors()
    
    return StyleSheet.create({
        navbar: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            backgroundColor: colors.primary,
            padding: 10,
            paddingBottom: 0,
            gap: 10,
            width: '100%',
        },
        navItem: {
            alignItems: 'center',
        },  
        focusedNavItem: {
            alignItems: 'center',
            borderBottomColor: colors.border,
            borderBottomWidth: 5,
            borderBottomEndRadius: 5,
            borderBottomStartRadius: 5,
        }, 
        navbarText: {
            fontFamily: 'JetBrainsMono-Regular',
            fontSize: 12,
            fontWeight: 'bold',
            paddingVertical: 10,
            color: colors.textUnfocused,
        },
        focusedNavbarText: {
            fontFamily: 'JetBrainsMono-Regular',
            fontWeight: 'bold',
            fontSize: 12,
            paddingVertical: 10,
            color: colors.text,
        },
    })
}