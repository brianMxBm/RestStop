import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

import { useSessionContext } from '../../providers/Auth/SessionProvider';

export default function PublicLayout() {
  const { session, isLoading } = useSessionContext();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && session?.user.onboarded) {
      router.replace('/(auth)/');
    }
  }, [session, isLoading]);

  return <Stack screenOptions={{ headerShown: false }} />;
}
