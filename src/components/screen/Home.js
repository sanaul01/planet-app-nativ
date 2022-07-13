import { FlatList, Pressable, SafeAreaView, StyleSheet, View, } from 'react-native'
import React from 'react'
import Text from '../text/text'
import PlanetHeder from '../PlanetHeder/PlanetHeder'
import { colors } from '../data/screens/theme/colors'
import { PLANET_LIST } from '../data/Planet-list/PlanetList'
import { spacing } from '../data/screens/theme/spacing'
import { AntDesign } from '@expo/vector-icons';



export default function Home({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeder />
      <FlatList
        data={PLANET_LIST}
        contentContainerStyle={styles.list}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => {
          const { name, color } = item;
          return (
            <Pressable 
            onPress={()=>{
              navigation.navigate("Detail", {planet: item})
            }}
             style={styles.item}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={[styles.circle, { backgroundColor: color }]}></View>
                <Text preset="h4" style={styles.itemName}>{name}</Text>
              </View>
              <AntDesign name="right" size={14} color="white" />
            </Pressable>

          )
        }}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[4],
    justifyContent: "space-between"
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4]
  },
  list: {
    padding: spacing[4]
  },
  separator: {
    borderBottomColor: colors.white,
    borderWidth: 0.5
  }
})