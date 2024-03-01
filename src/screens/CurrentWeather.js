import React from 'react'
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  ImageBackground 
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const { main: { temp, feels_like, temp_max, temp_min }, weather, name } = weatherData
  const weatherCondition = weather[0].main

  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message,
    image
  } = styles

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
    <ImageBackground
        style={image}
        source={require('../../assets/current-background.jpg')}
      >
      <View style={container}>
      <Text style={styles.cityName}>{name}</Text>
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`En vrai il fait: ${feels_like}°`}</Text>
        <RowText
          messageOne={`Le max: ${temp_max}° `}
          messageTwo={`Le Piiiiiire: ${temp_min}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      {/* <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      /> */}
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1
  },
  temperature: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'white'
  },
  hiLow: {
    color: 'white',
    fontSize: 20
  },
  hiLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 43
  },
  message: {
    fontSize: 25
  },
  cityName: {
    fontSize: 32, 
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20, 
  },
})
export default CurrentWeather