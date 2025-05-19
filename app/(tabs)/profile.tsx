import { View, Text, Image } from "react-native";
import React from "react";
import { icons } from "@/constants/icons";

const profile = () => {
    return (
        <View className="bg-primary flex-1 px-10">
            <View className="flex justify-center items-center flex-1 flexc-col gap-5">
                <Image source={icons.person} />
                <Text className="text-gray-500 text-base">Profile</Text>
            </View>
        </View>
    );
};

export default profile;
