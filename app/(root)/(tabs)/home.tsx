import { popularServices, ProfessionalProfile, services, SpecialOfferWoman, whyHomeyFeatures } from '@/constants/staticData';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Bell, Globe, MapPin, Search, ShieldCheck, Star } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const router = useRouter();

  return (
    <LinearGradient className='flex-1' locations={[0, 1]} colors={["#FFFFFF", "#F7F7FB",]}>
      <SafeAreaView edges={['left', 'right', 'top']} className='flex-1'>
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
            <View className='bg-gradient-to-br from-[#D4A853] to-[#C9943D] rounded-3xl overflow-hidden shadow-lg' style={{ backgroundColor: '#D4A853' }}>
              <View className='p-5 flex-row items-center justify-between'>
                <View className='flex-1'>
                  <View className='flex-row items-center mb-2'>
                    <Image source={require('@/assets/images/authLogo.png')} className='w-16 h-5' resizeMode='contain' />
                  </View>
                  <Text className='text-4xl font-bold text-white mb-1'>40% Off</Text>
                  <Text className='text-white text-sm'>On First Cleaning Service 🎉</Text>
                </View>
                <Image source={SpecialOfferWoman} className='w-32 h-32 rounded-2xl' resizeMode='cover' />
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
              <TouchableOpacity onPress={() => router.push('/services')}>
                <Text className='text-primary font-bold text-sm'>See All</Text>
              </TouchableOpacity>
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
              <TouchableOpacity onPress={() => router.push('/services')}>
                <Text className='text-primary font-semibold text-sm'>See All</Text>
              </TouchableOpacity>
            </View>
            <View className='flex-row flex-wrap justify-between'>
              {popularServices.map((service) => (
                <TouchableOpacity
                  key={service.id}
                  className='w-[48%] bg-white rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100'
                >
                  <Image source={service.image} className='h-32 w-full' resizeMode='cover' />
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
            <View className='flex-row items-center mb-4 gap-2'>
              <Text className='text-lg font-bold text-gray-900'>Trusted for families</Text>
              <ShieldCheck color="blue" />
            </View>
            <TouchableOpacity
              className='bg-white rounded-2xl border border-gray-100 shadow-sm'
              onPress={() => router.push('/worker-profile')}
            >
              <View className='flex-row items-center p-4'>
                <Image source={ProfessionalProfile} className='w-14 h-14 rounded-full mr-3' resizeMode='cover' />
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
            </TouchableOpacity>
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
                  <View className='bg-[#F9F3E8] p-4 rounded-lg my-2'>
                    {feature.icon}
                  </View>
                  <Text className='text-xs text-gray-700 text-center font-bold'>{feature.title}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Book a Service Button */}
          <View className='px-5 pb-8'>
            <TouchableOpacity className='bg-secondary rounded-full py-4 items-center shadow-lg'>
              <Text className='text-white font-bold text-base'>Book a Service Now</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;