import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, TextInput, ScrollView  } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon, } from "react-native-heroicons/outline";
import Categories from '../Components/Categories';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    },[]);


  return (
    <SafeAreaView className="bg-white pt-9">
      
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
            <Image 
            source={{
                uri: "https://links.papareact.com/wru"
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">
                    Deliver Now !
                    </Text>
                <Text className="font-bold text-xl">
                    Cureent Location
                <ChevronDownIcon size={20} color="#00CCBB" />
                </Text>
            </View>

            <UserIcon size={35} color="#00CCBB" />
        </View>

        {/* Search */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                {/* <SearchIcon /> */}
                <TextInput 
                placeholder='Restaurants and cuisines'
                keyboardType='default'
                />
            </View>
            {/* <AdjustmentsIcon color="#00CCBB" /> */}
            
        </View>
        <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
            paddingBottom: 100
        }}
        >
            <Categories />
        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop:StatusBar.currentHeight,
//         backgroundColor:"white",
//         paddingTop: 5
//     },
// })