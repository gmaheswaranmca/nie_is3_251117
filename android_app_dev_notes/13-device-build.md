Below are **clear, complete, step-by-step instructions** for:

1️⃣ Creating a **React Native Expo project** using `npx create-expo-app`
2️⃣ Running it on **Android Emulator**
3️⃣ Installing/running the APK on a **real Android device**
4️⃣ Example folder + code to verify it works (StdCalc sample)

---

# ✅ **PART 1 — Create Expo Project (StdCalc)**

### **Step 1: Install Node.js (LTS)**

Download and install Node.js (LTS Version).
It automatically includes npm.

Check:

```bash
node -v
npm -v
```

---

### **Step 2: Install Expo CLI tools**

Expo now works through `npx`, so no global install required.

---

### **Step 3: Create project**

```bash
npx create-expo-app StdCalc
```

Choose template → **Blank**

Move into the project:

```bash
cd StdCalc
```

Start the project:

```bash
npx expo start
```

This opens the Expo Dev Tools in the browser.

---

# ✅ **PART 2 — Run on Android Emulator (Android Studio)**

### **Step 1: Install Android Studio**

Download → Install → Open Android Studio.

### **Step 2: Install SDK Components**

Open:

```
Android Studio → Settings → Appearance & Behavior → System Settings → Android SDK
```

Check the following are installed:

* Android SDK Platform
* Android SDK Build-Tools
* Android Emulator
* Intel x86 Emulator Accelerator (HAXM) / or WHPX (Windows)
* Android Platform 33 or 34 (Recommended)

Apply → Install.

---

### **Step 3: Create an Android Virtual Device (AVD)**

Go to:

```
Android Studio → Tools → Device Manager → Create Device
```

Choose:

```
Phone → Pixel 6 / Pixel 7
```

Choose a **System Image** → Android 13 or 14 (x86_64)

Click **Download**, then **Next → Finish**

---

### **Step 4: Start the Emulator**

In Device Manager → Press **Play ▶** on your AVD.

Wait until emulator fully boots.

---

### **Step 5: Run the Expo App in the Emulator**

In your project terminal:

```bash
npx expo start
```

Then press:

```
a
```

Expo automatically installs the Expo Go client inside the emulator and launches your app.

If not, click in Dev Tools:

```
Run on Android device/emulator
```

---

# ❗ COMMON PROBLEM: "Connecting Metro bundler failed"

If emulator shows **exp://127.0.0.1:8081**, it cannot reach Metro.

Fix:

```bash
npx expo start --tunnel
```

---

# ✅ **PART 3 — Run APK on Real Android Device (without Expo Go)**

Expo has **2 types** of builds:

---

## **A. Development Build (local build)**

Best for internal testing.

Install dependencies:

```bash
npx expo install expo-dev-client
```

Run:

```bash
npx expo run:android
```

APK will be built and installed on your USB-connected device.

---

## **B. Production APK / AAB Build (for Play Store)**

### **Build using Expo EAS**

Install EAS CLI:

```bash
npm install -g eas-cli
```

Login:

```bash
eas login
```

Initialize:

```bash
eas build:configure
```

Build APK:

```bash
eas build -p android --profile preview
```

After build finishes, Expo gives a **download link** to the APK.

You can install APK on device:

```bash
adb install your.apk
```

Or manually download and install.

---

# ⚡ USB Device Setup

### **Enable Developer Mode**

Phone → Settings → About phone → Tap “Build number” 7 times.

### **Enable USB Debugging**

```
Settings → Developer options → USB debugging → ON
```

Connect device through USB.

Check if device is detected:

```bash
adb devices
```

---

# 📱 **PART 4 — Simple Calculator App (StdCalc) Source**

Create/Edit:

### `App.js`

```jsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState(null);

  const calc = (op) => {
    const x = parseFloat(a);
    const y = parseFloat(b);

    if (isNaN(x) || isNaN(y)) {
      setResult("Enter valid numbers");
      return;
    }

    let r = 0;
    if (op === "+") r = x + y;
    if (op === "-") r = x - y;
    if (op === "*") r = x * y;
    if (op === "/") r = y !== 0 ? x / y : "Invalid";

    setResult(r.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>StdCalc</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter A"
        keyboardType="numeric"
        value={a}
        onChangeText={setA}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter B"
        keyboardType="numeric"
        value={b}
        onChangeText={setB}
      />

      <View style={styles.row}>
        <TouchableOpacity style={styles.btn} onPress={() => calc("+")}><Text>+</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => calc("-")}><Text>-</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => calc("*")}><Text>*</Text></TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => calc("/")}><Text>/</Text></TouchableOpacity>
      </View>

      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, marginTop: 80 },
  title: { fontSize: 28, marginBottom: 20, fontWeight: "bold" },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 8 },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
  btn: {
    backgroundColor: "#ddd",
    padding: 15,
    width: 50,
    alignItems: "center",
    borderRadius: 8,
  },
  result: { marginTop: 25, fontSize: 22, fontWeight: "bold" },
});
```

Run:

```bash
npx expo start
```

Press:

```
a (for emulator)
```

or scan QR to run in your device via Expo Go.

---

# 🎉 **Now you can develop, run, and distribute Expo Android apps!**
	
	