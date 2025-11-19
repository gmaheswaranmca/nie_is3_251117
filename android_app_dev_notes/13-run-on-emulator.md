Here are the **exact steps** to run your existing Expo project (**ProductApp**) on the **Android Studio Emulator**.

You already have:

✔ Expo project created with

```
npx create-expo-app ProductApp
```

✔ Running fine on **Web** and **Expo Go**

Now you want:

✅ **Run on Android Studio Emulator**

---

# ✅ **Step 1 — Open Android Studio**

Open **Android Studio** →
Click **More Actions** → **Virtual Device Manager**

---

# ✅ **Step 2 — Start an Emulator**

If you already have a device:

👉 Just click the **▶ Run** button next to it.

If not:

### Create one (one-time setup)

1. Click **Create Device**
2. Select device (Pixel 5, Pixel 6 etc.)
3. Select a system image:
   ✔ **Android 13 – Google Play** (recommended)
4. Finish

Start the emulator → wait until home screen loads.

---

# ✅ **Step 3 — Start your Expo project**

Go to your project folder:

```sh
cd ProductApp
```

Start Expo:

```sh
npx expo start
```

This will open Expo DevTools in the browser.

---

# ✅ **Step 4 — Run on Android Emulator**

### Option 1 — Press **a** in the Terminal

With Expo DevTools running and emulator already open:

Simply press:

```
a
```

Expo will detect the emulator and install the app inside it.

---

### Option 2 — From Expo DevTools in the browser

Click:

**Run on Android device/emulator**

Expo will auto-install the app on the emulator.

---

# 🎉 **Your Expo App Now Runs on the Android Emulator**

You will now see your **ProductApp** open inside the virtual Android device.

---

# ⚠️ If emulator is not detected

Run:

```sh
adb devices
```

If no devices are listed:

**Fix path:**

Add Android SDK platform-tools to PATH:

```
C:\Users\<YourUser>\AppData\Local\Android\Sdk\platform-tools
```

Then restart terminal and run:

```sh
adb start-server
```
