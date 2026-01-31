import { allServices } from '@/constants/staticData';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ArrowUpRight, ChevronLeft, Search, Star } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Services = () => {
    const router = useRouter();

    return (
        <LinearGradient className='flex-1' locations={[0, 0.7]} colors={["#FFFFFF", "#F9F3E8"]}>
            <SafeAreaView className='flex-1'>
                {/* Header */}
                <View className='px-5 flex-row items-center justify-between bg-white'>
                    <TouchableOpacity
                        onPress={() => router.back()}
                        className='w-10 h-10 items-center justify-center'
                    >
                        <ChevronLeft size={24} color="#000" />
                    </TouchableOpacity>

                    <Text className='text-lg font-bold text-gray-900'>Our Services</Text>

                    <TouchableOpacity className='w-10 h-10 items-center justify-center'>
                        <Search size={24} color="#000" />
                    </TouchableOpacity>
                </View>

                {/* Services Grid */}
                <ScrollView className='flex-1 px-5 pt-4' showsVerticalScrollIndicator={false}>
                    <View className='flex-row flex-wrap justify-between pb-6'>
                        {allServices.map((service) => (
                            <TouchableOpacity
                                key={service.id}
                                className='w-[48%] bg-white rounded-2xl overflow-hidden mb-4 shadow-md'
                                style={{
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 8,
                                    elevation: 3,
                                }}
                            >
                                {/* Service Image */}
                                <View className='relative'>
                                    <Image
                                        source={service.image}
                                        className='h-40 w-full'
                                        resizeMode='cover'
                                    />
                                </View>

                                {/* Service Info */}
                                <View className='p-4'>
                                    <View className='flex-row items-center justify-between mb-2'>
                                        <Text className='text-base font-bold text-gray-900'>{service.name}</Text>
                                        <View className='flex-row items-center'>
                                            <Star size={14} fill="#FFB800" color="#FFB800" />
                                            <Text className='text-xs font-semibold text-gray-700 ml-1'>{service.rating}</Text>
                                        </View>
                                    </View>

                                    <View className='flex-row items-center justify-between'>
                                        <Text className='text-sm font-semibold text-gray-900'>{service.price}</Text>
                                        <TouchableOpacity
                                            className='bg-[#C59315] w-8 h-8 rounded-full items-center justify-center'
                                        >
                                            <ArrowUpRight size={16} color="#FFF" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Services;
