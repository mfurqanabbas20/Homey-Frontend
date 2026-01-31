import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, Bell, Search, Star, Globe } from 'lucide-react-native';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { popularServices, services, whyHomeyFeatures } from '@/constants/staticData';

const Home = () => {

  return (
    <SafeAreaView className='flex-1 bg-white p-2'>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className='px-5 pt-2 pb-4'>
          <View className='flex-row items-center justify-between mb-5'>
            <View className='flex-row items-center flex-1'>
              <View className='bg-[#ECDBBB] w-10 h-10 rounded-full flex items-center justify-center mr-3'>
                <MapPin size={20} color="#B8860B" />
              </View>
              <View className='flex-1'>
                <Text className='text-xs text-gray-500 font-medium'>Address</Text>
                <View className='flex-row items-center'>
                  <Text className='text-sm font-semibold text-secondary'>Home</Text>
                  <Text className='text-sm text-gray-600 ml-1'>مكة - جرهم 8538</Text>
                  <Text className='text-gray-400 ml-1'>▼</Text>
                </View>
              </View>
            </View>
            
            <View className='flex-row items-center gap-3'>
              <TouchableOpacity className='bg-[#FFF5E1] w-10 h-10 rounded-full flex items-center justify-center'>
               <Globe size={20} color="#B8860B" />
              </TouchableOpacity>
              <TouchableOpacity className='bg-[#FFF5E1] w-10 h-10 rounded-full flex items-center justify-center relative'>
                <Bell size={20} color="#B8860B" />
                <View className='absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full' />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Bar */}
          <View className='bg-white border border-gray-200 rounded-full px-4 py-3 flex-row items-center shadow-sm'>
            <Search size={20} color="#999" />
            <Text className='ml-3 text-gray-400 flex-1'>Search for a service ...</Text>
          </View>
        </View>

        {/* Special Offers */}
        <View className='px-5 mb-6'>
          <Text className='text-lg font-bold text-gray-900 mb-3'>Special Offers</Text>
          <View className='bg-gradient-to-br from-[#D4A853] to-[#C9943D] rounded-3xl overflow-hidden shadow-lg'>
            <View className='p-5 flex-row items-center justify-between'>
              <View className='flex-1'>
                <View className='flex-row items-center mb-2'>
                  <View className='bg-white/30 px-3 py-1 rounded-full'>
                    <Text className='text-white text-xs font-semibold'>⚡ Limited Offer</Text>
                  </View>
                </View>
                <Text className='text-4xl font-bold text-white mb-1'>40% Off</Text>
                <Text className='text-white text-sm'>On First Cleaning Service 🎉</Text>
              </View>
              <View className='w-24 h-24 bg-white/20 rounded-2xl' />
            </View>
            <View className='flex-row justify-center pb-3 gap-1'>
              <View className='w-6 h-1 bg-white rounded-full' />
              <View className='w-1 h-1 bg-white/40 rounded-full' />
              <View className='w-1 h-1 bg-white/40 rounded-full' />
              <View className='w-1 h-1 bg-white/40 rounded-full' />
            </View>
          </View>
        </View>

        {/* Services */}
        <View className='px-5 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-lg font-bold text-gray-900'>Services</Text>
            <Text className='text-primary font-bold text-sm'>See All</Text>
          </View>
          <View className='flex-row flex-wrap justify-between'>
            {services.map((service) => (
              <TouchableOpacity
                key={service.id}
                className='w-[22%] items-center mb-4'
              >
                <View className='w-16 h-16 rounded-full items-center justify-center mb-2 shadow-sm' style={{ backgroundColor: service.bgColor }}>
                  {service.id === 1 && (
                    <View className='absolute -top-1 -right-1 bg-[#D4A853] w-5 h-5 rounded-full items-center justify-center'>
                      <Text className='text-white text-xs font-bold'>%</Text>
                    </View>
                  )}
                  <Image source={service.icon} className='object-contain size-7' />
                </View>
                <Text className='text-xs text-gray-700 font-medium text-center'>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Most Popular Services */}
        <View className='px-5 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-lg font-bold text-gray-900'>Most Popular Services</Text>
            <Text className='text-primary font-semibold text-sm'>See All</Text>
          </View>
          <View className='flex-row flex-wrap justify-between'>
            {popularServices.map((service) => (
              <TouchableOpacity
                key={service.id}
                className='w-[48%] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100'
              >
                <View className='h-32 bg-gray-200' />
                <View className='p-3'>
                  <Text className='text-sm font-semibold text-gray-800 mb-1'>{service.name}</Text>
                  <View className='flex-row items-center justify-between'>
                    <Text className='text-base font-bold text-gray-900'>{service.price}</Text>
                    <View className='flex-row items-center'>
                      <Star size={14} fill="#FFB800" color="#FFB800" />
                      <Text className='text-xs font-semibold text-gray-700 ml-1'>{service.rating}</Text>
                      <Text className='text-xs text-gray-400 ml-1'>({service.reviews})</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Trusted for families */}
        <View className='px-5 mb-6'>
          <View className='flex-row items-center mb-4'>
            <Text className='text-lg font-bold text-gray-900'>Trusted for families</Text>
            <View className='ml-2 w-5 h-5 bg-blue-500 rounded-full items-center justify-center'>
              <Text className='text-white text-xs font-bold'>✓</Text>
            </View>
          </View>
          <View className='bg-white rounded-2xl border border-gray-100 shadow-sm'>
            <View className='flex-row items-center p-4'>
              <View className='w-14 h-14 bg-gray-300 rounded-full mr-3' />
              <View className='flex-1'>
                <View className='flex-row items-center'>
                  <Text className='text-base font-bold text-gray-900'>Ahmad Al-Syed</Text>
                  <View className='ml-2 w-5 h-5 bg-blue-500 rounded-full items-center justify-center'>
                    <Text className='text-white text-xs font-bold'>✓</Text>
                  </View>
                </View>
                <Text className='text-xs text-gray-500 mt-1'>Expert Plumber • 5 Yrs Exp.</Text>
                <View className='flex-row items-center mt-1'>
                  <Star size={12} fill="#FFB800" color="#FFB800" />
                  <Text className='text-xs font-semibold text-gray-700 ml-1'>4.9</Text>
                  <Text className='text-xs text-gray-400 ml-1'>| 234 Jobs</Text>
                </View>
              </View>
              <View className='w-12 h-12 bg-gray-200 rounded-full' />
            </View>
          </View>
        </View>

        {/* Why Homey */}
        <View className='px-5 mb-6'>
          <View className='flex-row items-center justify-between mb-4'>
            <Text className='text-lg font-bold text-gray-900'>Why Homey?</Text>
            <Text className='text-primary font-bold text-sm'>See All</Text>
          </View>
          <View className='flex-row flex-wrap justify-between'>
            {whyHomeyFeatures.map((feature, index) => (
              <View
                key={index}
                className='w-[31%] bg-white rounded-2xl items-center py-5 px-3 mb-3 shadow-sm border border-gray-100'
              >
                <Text className='text-3xl mb-2'>{feature.icon}</Text>
                <Text className='text-[10px] text-gray-700 font-medium text-center leading-tight'>{feature.title}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Book a Service Button */}
        <View className='px-5 pb-8'>
          <TouchableOpacity className='bg-[#D4A853] rounded-full py-4 items-center shadow-lg'>
            <Text className='text-white font-bold text-base'>Book a Service Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;