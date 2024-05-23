import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const WelcomScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <Animated.View exiting={FadeOut.duration(300)} style={styles.container}>
      <LottieView
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        autoPlay
        loop={false}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("@assets/lottie/kcpt.json")}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default WelcomScreen;
