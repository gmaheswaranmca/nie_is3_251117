# ✅ **Expo APIs – Detailed Notes (Complete Guide)**

Expo provides a huge set of pre-built APIs so you don’t need native Android/iOS code. These APIs work inside any Expo-managed React Native app.

---

# **1. Device & App Information APIs**

## **📌 expo-device**

Gives information about the physical device.

### **Use Cases**

* Show device model, brand, name
* Detect OS version, platform
* Analytics/logging

### **Key Methods**

* `Device.modelName`
* `Device.osName`, `Device.osVersion`
* `Device.isDevice` (true hardware device; false on simulator)

### **Example**

```js
import * as Device from 'expo-device';
console.log(Device.modelName);
```

---

## **📌 expo-application**

App-level information like app name, version, build number.

### **Use Cases**

* Display “App Version 1.0.0”
* Crash/logging tools

### **Key Items**

* `Application.applicationName`
* `Application.nativeBuildVersion`
* `Application.nativeApplicationVersion`

---

# **2. UI, Haptics & Sensors**

## **📌 expo-haptics**

Trigger vibration-like feedback (only physical devices).

### **Use Cases**

* Button click feedback
* Success/failure vibration

### **Key Methods**

* `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)`
* `Haptics.selectionAsync()`

---

## **📌 expo-sensors**

Access hardware sensors.

### **Sensors Supported**

* Accelerometer
* Gyroscope
* Magnetometer
* Barometer

### **Example**

```js
import { Accelerometer } from "expo-sensors";
Accelerometer.addListener(data => console.log(data));
```

---

# **3. Permissions & Secure APIs**

## **📌 expo-permissions** (Deprecated → use individual modules)

Each API now exposes its own permissions:

* `Camera.requestCameraPermissionsAsync()`
* `Location.requestForegroundPermissionsAsync()`
* `MediaLibrary.requestPermissionsAsync()`

---

## **📌 expo-secure-store**

Secure key–value storage (encrypted).

### **Use Cases**

* Store tokens, passwords, sensitive data

### **Example**

```js
import * as SecureStore from 'expo-secure-store';
await SecureStore.setItemAsync('token', 'abcd123');
```

---

# **4. Camera, Media, Image & File APIs**

## **📌 expo-camera**

Full access to camera.

### **Use Cases**

* Camera apps
* Barcode scanning
* Document scanning

### **Key Features**

* Take photos/videos
* Camera preview UI
* Switch front/back camera

---

## **📌 expo-image-picker**

Pick images/videos from gallery or camera.

### **Use Cases**

* Profile picture upload
* Gallery apps

### Example

```js
const result = await ImagePicker.launchImageLibraryAsync();
```

---

## **📌 expo-media-library**

Manage media files on device (Photos app).

### **Use Cases**

* Save images/videos to device
* Read user gallery

---

## **📌 expo-file-system**

Read/write/delete files safely.

### **Use Cases**

* Download PDF
* Store JSON logs locally

### Example

```js
import * as FileSystem from 'expo-file-system';
await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', 'Hello');
```

---

# **5. Location, Maps & Motion**

## **📌 expo-location**

Access GPS and location details.

### **Use Cases**

* Live tracking
* Map apps
* Weather apps (based on location)

### Features

* Get current location
* Track movement
* GEO fencing

---

## **📌 expo-maps**

Native map component (Google Maps/Apple Maps).

---

# **6. Notifications & Background Work**

## **📌 expo-notifications**

Handle push notifications & local notifications.

### **Use Cases**

* Reminder apps
* Chat notifications
* Scheduling background alerts

### Features

* Receive push notifications (Expo Push service)
* Schedule local notifications

```js
Notifications.scheduleNotificationAsync({
  content: { title: "Hi!" },
  trigger: { seconds: 2 }
});
```

---

## **📌 expo-task-manager**

Run background tasks.

### **Use Cases**

* Background location tracking
* Periodic background sync

---

## **📌 expo-background-fetch**

Fetch data even when app is closed.

---

# **7. Networking, Storage, Sharing**

## **📌 expo-sharing**

Share files to other apps.

---

## **📌 expo-clipboard**

Get/set clipboard (copy/paste).

```js
Clipboard.setStringAsync("Hello");
```

---

## **📌 expo-contacts**

Access device contacts (only with permission).

---

## **📌 expo-network**

Check network connection, type, IP address, etc.

### **Use Cases**

* Check offline status
* Warn user if mobile data is used

```js
const status = await Network.getNetworkStateAsync();
```

---

# **8. Audio, Video & Media Playback**

## **📌 expo-av**

Powerful Audio–Video module.

### **Use Cases**

* Play/Pause videos
* Build podcast/music apps

---

## **📌 expo-audio-session**

Manage audio routing (calls, Bluetooth devices, etc.)

---

# **9. Notifications, Auth & Payments (3rd-party Expo-compatible)**

These are not part of Expo core but widely used:

* Firebase Auth
* Firebase Firestore
* Stripe (expo-stripe)
* Supabase (expo-supabase)

---

# **10. Native Features & Device Utilities**

## **📌 expo-battery**

Battery level, charging state.

---

## **📌 expo-brightness**

Change screen brightness.

---

## **📌 expo-clipboard**

Copy/paste text.

---

## **📌 expo-linking**

Deep linking (open URLs).

---

## **📌 expo-intent-launcher**

Launch Android settings pages.

---

## **📌 expo-localization**

Get locale info (language, currency).

---

# **11. System UI & App Behavior**

## **📌 expo-status-bar**

Customize status bar color/style.

```
<StatusBar style="light" />
```

---

## **📌 expo-keep-awake**

Prevent screen from sleeping.

---

## **📌 expo-navigation-bar (Android)**

Change nav bar color.

---

## **📌 expo-screen-orientation**

Lock orientation (portrait/landscape).

---

# 🎉 FINAL SUMMARY TABLE — **Expo APIs Overview**

| Category         | Package                 | Purpose                     |
| ---------------- | ----------------------- | --------------------------- |
| Device Info      | expo-device             | Get device details          |
| App Info         | expo-application        | App version, build number   |
| Haptics          | expo-haptics            | Vibrations/feedback         |
| Sensors          | expo-sensors            | Accelerometer, gyroscope    |
| Secure Storage   | expo-secure-store       | Encrypted key-value storage |
| Camera           | expo-camera             | Full camera access          |
| File access      | expo-file-system        | Read/write files            |
| Image Picker     | expo-image-picker       | Gallery/camera picker       |
| Media Library    | expo-media-library      | Manage mobile gallery       |
| Location         | expo-location           | GPS & geolocation           |
| Maps             | expo-maps               | Display maps                |
| Notifications    | expo-notifications      | Push/local notifications    |
| Clipboard        | expo-clipboard          | Copy/paste                  |
| Audio/Video      | expo-av                 | Play audio and video        |
| Network          | expo-network            | Check internet state        |
| Contacts         | expo-contacts           | Read device contacts        |
| Sharing          | expo-sharing            | Share files                 |
| Background work  | expo-task-manager       | Background tasks            |
| Background fetch | expo-background-fetch   | Periodic fetch tasks        |
| Orientation      | expo-screen-orientation | Lock orientation            |
| Status bar       | expo-status-bar         | Customize status bar        |
