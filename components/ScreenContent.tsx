import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'components/modal/Carousel';
import { Header } from 'components/layout/header';
import { View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

export const ScreenContent = () => {
  return (
    <>
      <Header />
      <SafeAreaView className="flex-1 bg-white mx-0">
        <ScrollView>
          <Carousel />
          <View className="mt-3 relative h-[40rem] w-full">
            <Image
              source={{ uri: "https://tyler.com/wp-content/uploads/2023/11/stone-banner-01.jpg" }}
              className="h-full w-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 flex justify-center items-start px-4 py-12">
              <Text className="text-white text-[3rem] font-semibold text-left">
                TRANSFORMEZ VOTRE AVENIR DIGITAL
              </Text>

              <TouchableOpacity className="bg-blue-400 px-6 py-6 rounded mt-12 w-[20rem]">
                <Text className="text-white font-semibold text-[1.5rem]">Obtenez un devis Gratuitement</Text>
              </TouchableOpacity>
            </View>
          </View>
           <View className="bg-black text-white w-full px-4 py-12 relative z-0">
              <Text className='text-[3rem] font-bold text-white text-center'>
                  01
              </Text>
              <Text className='text-white text-center text-[1rem] font-semibold mt-8'>
                  Année d’excellence
              </Text>
              <Text className='text-white text-center text-[0.7rem] mt-3'>
                  Nous offrons des conseils de confiance depuis longtemps, ce qui nous a valu une réputation d’excellence.
              </Text>
              <Text>
                  01
              </Text>
              <View className="bg-black text-white w-full p-6 relative z-0">
                <Text className='text-[3rem] font-bold text-white text-center'>
                    500+
                </Text>
                <Text className='text-white text-center text-[1rem] font-semibold mt-8'>
                    Affaires Réussies
                </Text>
                <Text className='text-white text-center text-[0.7rem] mt-3'>
                    Un succès prouvé avec plus de 5 00 affaires traitées efficacement dans divers domaines informatiques.
                </Text>
                <Text>
                    01
                </Text>
              </View>
              <View className="bg-black text-white w-full p-6 relative z-0">
                  <Text className='text-[3rem] font-bold text-white text-center'>
                      90%
                  </Text>
                  <Text className='text-white text-center text-[1rem] font-semibold mt-8'>
                      Satisfaction Client
                  </Text>
                  <Text className='text-white text-center text-[0.7rem] mt-3'>
                    En priorisant vos besoins, nous maintenons un taux de satisfaction impressionnant de 95 %.
                  </Text>
                  <Text>
                      01
                  </Text>
              </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
