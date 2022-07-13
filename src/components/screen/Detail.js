import { View, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { colors } from '../data/screens/theme/colors'
import PlanetHeder from '../PlanetHeder/PlanetHeder'

export default function Detail() {
    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeder backBtn={true}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
})