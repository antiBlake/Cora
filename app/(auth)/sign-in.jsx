import { View, Text, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setisLoading] = useState(false);

    const submitForm = async () => {
      if(form.email ==="" || form.password ===""){
        Alert.alert('Error', 'Please fill in all the details')
      }
      setisLoading(true);

      
      try {
        await signIn(form.email, form.password);
        const result = await getCurrentUser();
        setUser(result);
        setIsLogged(true);

        Alert.alert("Success", "User Signed In sucessfully");
        router.replace('/index');
        
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
        Login to Aora
       </Text>
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
       title="Sign In"
       handlePress={submitForm}
       isLoading={isLoading}
       containerStyles="mt-7"
       />
       <View className="text-lg flex-row mt-7 justify-center">
        <Text className="text-gray-100 font-pregular">
            Don't have an account? { ' '}

        </Text>
        <Link href="/sign-up" className='font-psemibold text-secondary '>
             Sign Up
        </Link>
       </View>


    
       </View>

        </ScrollView>
        

    </SafeAreaView>
    
  )
}

export default SignIn