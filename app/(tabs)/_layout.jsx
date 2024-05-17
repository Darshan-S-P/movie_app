import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ headerShown: false }} />
      <Tabs.Screen name="search" options={{ headerShown: false }} />
      <Tabs.Screen name="details" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabLayout;
