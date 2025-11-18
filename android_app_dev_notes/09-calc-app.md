Below is the **complete beginner-friendly guide** to build a **Calculator App** in **React Native (Expo)** + **Steps to develop in VS Code** + **Steps to run in Expo Go** — **with NO old CLI issues and 100% working setup**.

---

# ✅ PART 1 — Create a Fresh Expo Project

### **1️⃣ Open Command Prompt**

Go to a short path to avoid Windows 260-character errors:

```
C:\re_na_app
```

### **2️⃣ Create your app**

```sh
npx create-expo-app CalculatorApp
```

### **3️⃣ Go inside**

```sh
cd CalculatorApp
```

### **4️⃣ Start the app**

```sh
npx expo start
```

You’ll see:

✔ Metro Bundler
✔ Web UI
✔ QR Code

---

# 📱 PART 2 — Run in Expo Go

1. Install **Expo Go** from Play Store
2. Scan QR Code from the Metro Bundler
3. Your app instantly runs on your mobile

---

# 🛠 PART 3 — Open in VS Code

1. Open VS Code
2. File → Open Folder → Select your project:

```
C:\re_na_app\CalculatorApp
```

3. Open file:

```
App.js
```

Replace content with calculator code below.

---

# 🧮 PART 4 — Full Calculator App Code (Expo + React Native)

> This is a simple calculator with buttons:
> `0–9, +, –, ×, ÷, Clear, Delete, =`

Create UI + logic in **App.js**:

```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [input, setInput] = useState("");

  const handlePress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Replace × and ÷ for JS evaluation
      let expression = input.replace(/×/g, '*').replace(/÷/g, '/');
      let result = eval(expression);
      setInput(String(result));
    } catch (e) {
      setInput("Error");
    }
  };

  const buttons = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input || "0"}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.specialBtn} onPress={handleClear}>
          <Text style={styles.specialBtnText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.specialBtn} onPress={handleBackspace}>
          <Text style={styles.specialBtnText}>⌫</Text>
        </TouchableOpacity>
      </View>

      {buttons.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((btn) => (
            <TouchableOpacity
              key={btn}
              style={btn === "=" ? styles.equalsBtn : styles.btn}
              onPress={() => (btn === "=" ? calculate() : handlePress(btn))}
            >
              <Text style={styles.btnText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  display: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: "flex-end",
    marginBottom: 10,
  },
  displayText: {
    fontSize: 48,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#333',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  equalsBtn: {
    backgroundColor: '#fe9500',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 28,
    color: 'white',
  },
  specialBtn: {
    backgroundColor: '#555',
    width: 150,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  specialBtnText: {
    fontSize: 24,
    color: 'white',
  },
});
```

---

# 🚀 Part 5 — Run the app again

In terminal:

```
npx expo start
```

Scan the QR code.
Your calculator is ready!
