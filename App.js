import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/components/data/screens/theme/colors';
import { spacing } from './src/components/data/screens/theme/spacing';
import { useFonts } from 'expo-font';
import { typography } from './src/components/data/screens/theme/typography';
import Text from './src/components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/screen/Home';
import Detail from './src/components/screen/Detail';


const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require('./assets/fonts/Antonio-Medium.ttf'),
    "Spartan-Bold": require('./assets/fonts/Spartan-Bold.ttf'),
    "Spartan-Regular": require('./assets/fonts/Spartan-Regular.ttf'),
  })

  if (!loaded) {
    return (
      <Text>Font is loading....</Text>
    )
  }


  return (
    <>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>

    <StatusBar style="light"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGreen,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
