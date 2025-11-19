Below is a **complete working structure** for an Expo app with **5 pages/components**:

1. **Camera Page**
2. **Battery Page**
3. **Contacts Page**
4. **Location Page**
5. **File System Page**

And we will use **Expo Router** to navigate between these pages.

This is fully ready to run.

---

* npm install expo-file-system expo-battery expo-camera expo-contacts expo-location


# ✅ **Project Structure (JSX version)**

```
app/
 ├─ index.jsx
 ├─ camera.jsx
 ├─ battery.jsx
 ├─ contacts.jsx
 ├─ location.jsx
 └─ filesystem.jsx
```

You do NOT need `tsconfig.json` or `.d.ts` files.

---

# 🚀 **1. app/index.jsx (Home Page)**

```jsx
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo API Demo</Text>

      <Link href="/camera" style={styles.link}>Camera</Link>
      <Link href="/battery" style={styles.link}>Battery</Link>
      <Link href="/contacts" style={styles.link}>Contacts</Link>
      <Link href="/location" style={styles.link}>Location</Link>
      <Link href="/filesystem" style={styles.link}>File System</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  link: { fontSize: 20, color: "blue" }
});
```

---

# 🚀 **2. Camera Page – app/camera.jsx**

```jsx
import { useState, useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default function CameraPage() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission?.granted) {
    return <Button title="Enable Camera" onPress={requestPermission} />;
  }

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 }
});
```

---

# 🚀 **3. Battery Page – app/battery.jsx**

```jsx
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Battery from "expo-battery";

export default function BatteryPage() {
  const [level, setLevel] = useState(null);

  useEffect(() => {
    Battery.getBatteryLevelAsync().then(val => setLevel(val * 100));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Battery Level: {level}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24 }
});
```

---

# 🚀 **4. Contacts Page – app/contacts.jsx**

```jsx
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import * as Contacts from "expo-contacts";

export default function ContactsPage() {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers]
        });
        setContactList(data);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <FlatList
        data={contactList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  item: { fontSize: 18, borderBottomWidth: 1, paddingVertical: 5 }
});
```

---

# 🚀 **5. Location Page – app/location.jsx**

```jsx
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";

export default function LocationPage() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const loc = await Location.getCurrentPositionAsync({});
        setCoords(loc.coords);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Location</Text>

      {coords ? (
        <>
          <Text>Latitude: {coords.latitude}</Text>
          <Text>Longitude: {coords.longitude}</Text>
        </>
      ) : (
        <Text>Loading location…</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, marginBottom: 10 }
});
```

---

# 🚀 **6. FileSystem Page – app/filesystem.jsx**

```jsx
import { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import * as FileSystem from "expo-file-system";

export default function FileSystemPage() {
  const [content, setContent] = useState("");

  const fileUri = FileSystem.documentDirectory + "demo.txt";

  const writeFile = async () => {
    await FileSystem.writeAsStringAsync(fileUri, "Hello from Expo FileSystem!");
  };

  const readFile = async () => {
    const data = await FileSystem.readAsStringAsync(fileUri);
    setContent(data);
  };

  return (
    <View style={styles.container}>
      <Button title="Write File" onPress={writeFile} />
      <Button title="Read File" onPress={readFile} />
      <Text style={styles.text}>File Content: {content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  text: { marginTop: 20, fontSize: 16 }
});
```

---

# 🎉 Your JSX version is ready!

You can now run:

```
npx expo start
```

This works with **Expo Router**, **Expo Go**, and **React Native JSX**.

---

# 🎉 **Done!**

You now have:

✓ **5 working pages**
✓ **Camera, Battery, Contacts, Location, FileSystem**
✓ **Expo Router navigation**
✓ **Minimal, clean UI**
