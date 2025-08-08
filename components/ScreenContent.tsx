import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'components/modal/Carousel';
import { Header } from 'components/layout/header';

export const ScreenContent = () => {
  return (
    <>
      <Header />
      <SafeAreaView className="flex-1 bg-white mt-0">
        <Carousel />
      </SafeAreaView>
    </>
  );
};
