import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [isLoading, setisLoading] = useState(false);
    const submitForm = async () => {
      if(form.email ==="" || form.username === "" || form.password === ""){
        Alert.alert('Error', 'Please fill in all the details')
      }
      setisLoading(true);

      router.replace('/home');
      try {
        const result = await createUser(form.email, form.username, form.password);
        
      } catch(error) {
        Alert.alert('Error', error.message)
      } finally {
        setisLoading(false);
      }

    };

    
  return (
    
    <SafeAreaView className="h-full bg-primary">
        <ScrollView contentContainerStyle={{height: '100%'}}>
    <View className="w-full px-4 flex  justify-center h-full">
       <Image 
      source={images.logo}
      resizeMode='contain'
      className="w-[115px] h-[34px]" 
       />
       <Text className="text-2xl text-white font-psemibold mt-10 text-semibold">
        Sign Up to Aora
       </Text>
       <FormField 
       title="Username"
       value={form.username}
       handleChangeText={(e)=> setForm({...form, username: e})}
       otherStyles="mt-7"
       placeholder="Username"
       />
       <FormField 
       title="Email"
       value={form.email}
       handleChangeText={(e)=> setForm({...form, email: e})}
       otherStyles="mt-7"
       keyboardType="email-address"
       placeholder="Email Address"
       />
       <FormField 
       title="Password"
       value={form.password}
       handleChangeText={(e)=> setForm({...form, password: e})}
       otherStyles="mt-7"
       placeholder="Password"
       />
       <CustomButton 
       title="Sign Up"
       handlePress={submitForm}
       isLoading={isLoading}
       containerStyles="mt-7"
       />
       <View className="text-lg flex-row mt-7 justify-center">
        <Text className="text-gray-100 font-pregular">
            Have an account? { ' '}

        </Text>
        <Link href="/sign-in" className='font-psemibold text-secondary '>
             Sign In
        </Link>
       </View>


    
       </View>

        </ScrollView>
        

    </SafeAreaView>
    
  )
}

export default SignUp