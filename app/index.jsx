import { ScrollView, View, Text } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '../constants'
import CustomButton from '../components/CustomButton'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from '../context/GlobalProvider'

const Home = () => {
    const { isLoggedIn, isLoading } = useGlobalContext();

    if(!isLoading && !isLoggedIn) return <Redirect href="/home" />
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className="w-full px-4 flex justify-center items-center">
                <Image 
                source={images.logo}
                resizeMode='contain'
                className='w-[130px] h-[84px]'
                />

                    <Image 
                source={images.cards}
                resizeMode='contain'
                className='max-w-[380px] w-full h-[300px]'
                />
                <View className="relative mt-5">
                    <Text className="text-3xl text-white font-bold text-center">
                        Discover Endlesss Possibilities with {' '}
                        <Text className="text-secondary">Aora</Text>
                    </Text>
                    <Image
                    source={images.path}
                    className="w-[136px] h-[15px] absolute -bottom-2 -right-8 "
                    />
                    
                </View>
                <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where creativity meets innovation: embark on a journey of limitless exploration with Aora
                    </Text>

                    <CustomButton
            title='Continue with Email'
            containerStyles='w-full mt-7'
            handlePress={()=> router.push('/sign-in')} />
            </View>
            
            
        </ScrollView>
        <StatusBar style='light' backgroundColor='#161622' />
      
    </SafeAreaView>
  )
}

export default Home