import { Tabs } from "expo-router";
import { TabBar } from "@/components/organism";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function TabLayout() {
  return (
    <BottomSheetModalProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <TabBar {...props} />}
      />
    </BottomSheetModalProvider>
  );
}
