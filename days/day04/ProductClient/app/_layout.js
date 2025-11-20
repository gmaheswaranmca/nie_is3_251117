import { Stack } from "expo-router";


export default function RootLayout() {
  return (
      <Stack>
      <Stack.Screen name="index" options={{ title: 'Product Management' }} />
      <Stack.Screen name="new" options={{ title: 'New Product' }} />
      <Stack.Screen name="edit" options={{ title: 'Edit Product' }} />
    </Stack>

  );
}