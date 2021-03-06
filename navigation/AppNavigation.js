import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from '../screens/CategoryScreen';
import CreateCategoryScreen from '../screens/CreateCategoryScreen';
import BookingDetailsScreen from '../screens/BookingDetailsScreen';
import CreateBookingScreen from '../screens/CreateBookingScreen';
import EditCategoryScreen from '../screens/EditCategoryScreen';
import Settings from '../screens/Settings';

const FinanceStack = createStackNavigator();
export const FinanceStackNavigator = () => {
    return (
        <FinanceStack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: {
                    backgroundColor: 'black'
                }
            }}>
            <FinanceStack.Screen name="Category" component={CategoryScreen} />
            <FinanceStack.Screen name="CreateCategory" component={CreateCategoryScreen} />
            <FinanceStack.Screen name="EditCategory" component={EditCategoryScreen} />
            <FinanceStack.Screen name="Booking" component={BookingDetailsScreen} />
            <FinanceStack.Screen name="CreateBooking" component={CreateBookingScreen} />
            <FinanceStack.Screen name="Settings" component={Settings} />
        </FinanceStack.Navigator>
    );
}