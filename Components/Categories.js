import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categorie = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicato={false}
    >
        {/* Categorie Card */}
        <CategoryCard 
        imgUrl="https://links.papareact.com/wru"
        title="testing1"
        />
        <CategoryCard 
        imgUrl="https://links.papareact.com/wru"
        title="testing2"
        />
        <CategoryCard 
        imgUrl="https://links.papareact.com/wru"
        title="testing3"
        />
    </ScrollView>
  )
}

export default Categorie