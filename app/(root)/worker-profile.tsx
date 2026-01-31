import { workerProfile } from '@/constants/staticData';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ArrowRight, Briefcase, ChevronLeft, MapPin, Share2, ShieldCheck, Star, Trophy, UserCheck } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WorkerProfile = () => {
    const router = useRouter();

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < rating ? "#FFB800" : "transparent"}
                color="#FFB800"
            />
        ));
    };

    return (
        <View className='flex-1 bg-white'>
            <LinearGradient className='flex-1' locations={[0, 0.3]} colors={["#FFFFFF", "#F7F7FB"]}>
                <SafeAreaView edges={['left', 'right', 'top']} className='flex-1'>
                    {/* Header */}
                    <View className='px-5 flex-row items-center justify-between bg-white pb-4'>
                        <TouchableOpacity
                            onPress={() => router.back()}
                            className='w-10 h-10 items-center justify-center'
                        >
                            <ChevronLeft size={24} color="#000" />
                        </TouchableOpacity>

                        <Text className='text-lg font-bold text-gray-900'>Worker Profile</Text>

                        <TouchableOpacity className='w-10 h-10 items-center justify-center'>
                            <Share2 size={20} color="#C59315" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
                        {/* Profile Section */}
                        <View className='items-center px-5 pt-6 pb-4'>
                            <View className='relative mb-4'>
                                <View className='w-28 h-28 rounded-full border-4 border-blue-100 overflow-hidden'>
                                    <Image
                                        source={workerProfile.profileImage}
                                        className='w-full h-full'
                                        resizeMode='cover'
                                    />
                                </View>
                                {workerProfile.verified && (
                                    <View className='absolute bottom-0 right-0 bg-blue-500 w-8 h-8 rounded-full items-center justify-center border-2 border-white'>
                                        <ShieldCheck size={16} color="#FFF" fill="#FFF" />
                                    </View>
                                )}
                            </View>

                            <Text className='text-2xl font-bold text-gray-900 mb-1'>{workerProfile.name}</Text>
                            <Text className='text-base font-semibold text-[#C59315] mb-2'>{workerProfile.role}</Text>

                            <View className='flex-row items-center gap-2 mb-4'>
                                <MapPin size={16} color="#666" />
                                <Text className='text-sm text-gray-600'>{workerProfile.location}</Text>
                                <Text className='text-sm text-gray-400'>•</Text>
                                <Text className='text-sm text-gray-600'>{workerProfile.availability}</Text>
                            </View>

                            {/* Verification Badges */}
                            <View className='flex-row gap-3 mb-6'>
                                <View className='flex-row items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200'>
                                    <UserCheck size={16} color="#3B82F6" />
                                    <Text className='text-xs font-semibold text-blue-600'>Identify Verified</Text>
                                </View>
                                <View className='flex-row items-center gap-2 px-4 py-2 bg-green-50 rounded-full border border-green-200'>
                                    <ShieldCheck size={16} color="#10B981" />
                                    <Text className='text-xs font-semibold text-green-600'>Background Checked</Text>
                                </View>
                            </View>

                            {/* Stats Cards */}
                            <View className='flex-row gap-3 w-full'>
                                <View className='flex-1 bg-[#F9F3E8] rounded-2xl p-4 items-center'>
                                    <Briefcase size={24} color="#C59315" />
                                    <Text className='text-xl font-bold text-gray-900 mt-2'>{workerProfile.experience}</Text>
                                    <Text className='text-xs text-gray-600 mt-1'>{workerProfile.experienceLabel}</Text>
                                </View>
                                <View className='flex-1 bg-[#F9F3E8] rounded-2xl p-4 items-center'>
                                    <Trophy size={24} color="#C59315" />
                                    <Text className='text-xl font-bold text-gray-900 mt-2'>{workerProfile.jobsDone}</Text>
                                    <Text className='text-xs text-gray-600 mt-1'>{workerProfile.jobsLabel}</Text>
                                </View>
                                <View className='flex-1 bg-[#F9F3E8] rounded-2xl p-4 items-center'>
                                    <Star size={24} color="#C59315" fill="#C59315" />
                                    <Text className='text-xl font-bold text-gray-900 mt-2'>{workerProfile.rating}</Text>
                                    <Text className='text-xs text-gray-600 mt-1'>{workerProfile.ratingLabel}</Text>
                                </View>
                            </View>
                        </View>

                        {/* About Section */}
                        <View className='px-5 py-6'>
                            <Text className='text-lg font-bold text-gray-900 mb-3'>About {workerProfile.name}</Text>
                            <Text className='text-sm text-gray-600 leading-6'>{workerProfile.about}</Text>
                        </View>

                        {/* Recent Work */}
                        <View className='px-5 py-4'>
                            <View className='flex-row items-center justify-between mb-4'>
                                <Text className='text-lg font-bold text-gray-900'>Recent Work</Text>
                                <TouchableOpacity>
                                    <Text className='text-sm font-semibold text-[#C59315]'>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} className='gap-3'>
                                {workerProfile.recentWork.map((image, index) => (
                                    <Image
                                        key={index}
                                        source={image}
                                        className='w-48 h-32 rounded-2xl mr-3'
                                        resizeMode='cover'
                                    />
                                ))}
                            </ScrollView>
                        </View>

                        {/* Reviews Section */}
                        <View className='px-5 py-6 pb-32'>
                            <Text className='text-lg font-bold text-gray-900 mb-4'>Reviews</Text>

                            <View className='flex-row gap-6 mb-6'>
                                {/* Overall Rating */}
                                <View className='items-center'>
                                    <Text className='text-5xl font-bold text-gray-900'>{workerProfile.reviews.overall}</Text>
                                    <View className='flex-row my-2'>
                                        {renderStars(Math.round(workerProfile.reviews.overall))}
                                    </View>
                                    <Text className='text-xs text-gray-500'>{workerProfile.reviews.count} reviews</Text>
                                </View>

                                {/* Rating Breakdown */}
                                <View className='flex-1'>
                                    {Object.values(workerProfile.reviews.breakdown).map((item, index) => (
                                        <View key={index} className='flex-row items-center gap-3 mb-2'>
                                            <Text className='text-xs text-gray-600 w-20'>{item.label}</Text>
                                            <View className='flex-1 h-2 bg-gray-200 rounded-full overflow-hidden'>
                                                <View
                                                    className='h-full bg-blue-500 rounded-full'
                                                    style={{ width: `${(item.value / 5) * 100}%` }}
                                                />
                                            </View>
                                            <Text className='text-xs font-semibold text-gray-700 w-8'>{item.value}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            {/* Individual Reviews */}
                            {workerProfile.reviews.list.map((review) => (
                                <View key={review.id} className='bg-white rounded-2xl p-4 mb-3 border border-gray-100'>
                                    <View className='flex-row items-start gap-3'>
                                        <Image
                                            source={review.avatar}
                                            className='w-12 h-12 rounded-full'
                                            resizeMode='cover'
                                        />
                                        <View className='flex-1'>
                                            <View className='flex-row items-center justify-between mb-1'>
                                                <Text className='text-base font-bold text-gray-900'>{review.name}</Text>
                                                <Text className='text-xs text-gray-400'>{review.date}</Text>
                                            </View>
                                            <View className='flex-row mb-2'>
                                                {renderStars(review.rating)}
                                            </View>
                                            <Text className='text-sm text-gray-600 leading-5'>{review.comment}</Text>
                                        </View>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </ScrollView>

                    {/* Booking Footer */}
                    <View className='absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-4'>
                        <View className='flex-row items-center justify-between'>
                            <View>
                                <Text className='text-xs text-gray-500 mb-1'>Total Price</Text>
                                <Text className='text-2xl font-bold text-gray-900'>SAR {workerProfile.price}</Text>
                            </View>
                            <TouchableOpacity className='bg-[#C59315] px-8 py-4 rounded-full flex-row items-center gap-2'>
                                <Text className='text-white font-bold text-base'>Book Now</Text>
                                <ArrowRight size={20} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>
        </View>
    );
};

export default WorkerProfile;
