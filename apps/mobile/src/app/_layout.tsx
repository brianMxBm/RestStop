import '../../global.css';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

import { ExpoSecureStoreClerkAdapter } from '../../utils/auth/auth-service';
import { SessionProvider } from '../providers/Auth/SessionProvider';

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const InitialLayout = () => {
  return (
    <Slot
      screenOptions={{
        animation: 'ios',
      }}
    />
  );
};

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  if (!publishableKey) {
    throw new Error(
      'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env'
    );
  }

  return (
    <ClerkProvider tokenCache={ExpoSecureStoreClerkAdapter} publishableKey={publishableKey}>
      <ClerkLoaded>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="dark" />
          <BottomSheetModalProvider>
            <BottomSheetModalProvider>
              <SessionProvider>
                <InitialLayout />
                {/* <Toast config={toastConfig} /> */}
              </SessionProvider>
            </BottomSheetModalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
