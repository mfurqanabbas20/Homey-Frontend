import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import authLogo from '@/assets/images/authLogo.png';
import saudiFlag from '@/assets/images/saudiFlag.png';

const AuthScreen = () => {
  const [activeScreen, setActiveScreen] = useState<string>("welcome");
  return (
    <SafeAreaView className='flex items-center justify-center'>
      <View className='bg-secondary size-36 rounded-full flex items-center justify-center'>
        <Image
         source={authLogo}
         />
      </View>
      <View className='flex items-center justify-center'>
        <Text className='font-[700] text-[35px] text-[#1A1A1A]'>
          {
          activeScreen === "welcome"
          ?
          "Welcome"
          :
          ""
          }
        </Text>
        <Text className='text-[#6B7280] text-lg'>
          {
          activeScreen === "welcome"
          ?
          "Enter your phone number to get started."
          :
          ""
          }
        </Text>
        
      </View>
      {/* Condition based rendering */}
      {
        activeScreen === "welcome"
        ?
        <View className='rounded-lg border'>
          
        </View>
        :
        <View>

        </View>
      }
    </SafeAreaView>
  )
}

export default AuthScreen;
