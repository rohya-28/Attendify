import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { useState, useEffect } from "react";
import { View, Text, Image, Alert } from "react-native";
import { ScrollView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useLocation } from "@/hooks/useUserLocation"; // Import the useLocation hook

const CollegeInfo = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    latitude: '',
    longitude: '',
  });

  const { location, errorMsg, loading } = useLocation();

  useEffect(() => {
    if (location) {
      // Automatically populate latitude and longitude when location is available
      setForm({
        ...form,
        latitude: location.coords.latitude.toString(),
        longitude: location.coords.longitude.toString(),
      });
    }
    if (errorMsg) {
      Alert.alert('Error', errorMsg);
    }
  }, [location, errorMsg]);

  const onSignUpPress = async () => {
    console.log(form);
    // Add your registration logic here
  };

  return (
    <GestureHandlerRootView>
      <ScrollView className="flex-1 bg-white ">
        <View className="flex-1 bg-white">
          <View>
            <View className="relative w-full h-[250px]">
              <Image 
                source={images.signUpCar}
                className="z-0 w-full h-[250px]" 
              />
              <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                Register Your College
              </Text>
            </View>

            <View className="p-5">
              <InputField
                label="College Name"
                placeholder="Enter College Name"
                icon={icons.person}
                value={form.name}
                onChangeText={(value) => setForm({ ...form, name: value })}
              />
              <InputField
                label="Address"
                placeholder="Enter Address"
                icon={icons.home}
                value={form.address}
                onChangeText={(value) => setForm({ ...form, address: value })}
              />
              <InputField
                label="Latitude"
                placeholder="Latitude"
                icon={icons.map}
                value={form.latitude}
                keyboardType="numeric"
                onChangeText={(value) => setForm({ ...form, latitude: value })}
                editable={!loading} // Disable if loading location
              />
              <InputField
                label="Longitude"
                placeholder="Longitude"
                icon={icons.map}
                value={form.longitude}
                keyboardType="numeric"
                onChangeText={(value) => setForm({ ...form, longitude: value })}
                editable={!loading} // Disable if loading location
              />
              {loading ? (
                <Text>Loading location...</Text>
              ) : (
                <CustomButton title="Register" onPress={onSignUpPress} className="mt-4" />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
};

export default CollegeInfo;
