Here are **very clear, updated, latest Expo instructions (2025 compatible)** for:

# ✅ 1. How to build APK (Expo)

# ✅ 2. How to run on real device WITHOUT Expo Go

# ✅ 3. How to create a full production build (AAB / APK)

---

# 🔰 Before You Start

Make sure you’re using:

* **Expo SDK 50+**
* **EAS CLI installed**

Install EAS:

```sh
npm install -g eas-cli
```

Login:

```sh
eas login
```

---

# ✅ 1. BUILD APK USING EXPO (via EAS)

Expo no longer builds APK using `expo build:android`.
You now use:

```sh
eas build -p android --profile preview
```

This creates an **APK** you can install manually.

---

## ✔ Step-by-step

### Step 1 — create `eas.json` if not created automatically

In your project root:

```sh
eas build:configure
```

This generates `eas.json`.

### Step 2 — Build APK

Edit `eas.json` and add a custom profile:

```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      }
    }
  }
}
```

Now build the APK:

```sh
eas build -p android --profile preview
```

EAS uploads the build → cloud builds → gives a download link.

### Result:

✔ You get a link to download the **APK**
✔ Works on any Android device
✔ Can install manually (no Play Store)

---

# ✅ 2. Run Expo App on REAL DEVICE WITHOUT Expo Go

You need to create a **development build**, not use Expo Go.

Run:

```sh
eas build -p android --profile development
```

OR create a profile:

```json
{
  "build": {
    "development": {
      "developmentClient": true
    }
  }
}
```

Then:

```sh
eas build -p android --profile development
```

This produces an **APK with Dev Client**.

Install it on your phone:

* Download the APK from EAS
* Install manually
* Open the app (it is your custom dev client)
* It will load your app using Metro bundler locally

This allows:

✔ Camera
✔ Bluetooth
✔ Local filesystem
✔ Background services
❌ NOT possible in Expo Go

---

# How to run with your dev client?

Start the project:

```sh
npx expo start --dev-client
```

Open app on mobile → press “Connect to bundler”.

Your full app runs natively.

---

# ✅ 3. Convert to Production Build (Play Store)

You want a **AAB** (Android App Bundle).

Build using production profile:

```sh
eas build -p android --profile production
```

`eas.json` entry:

```json
"production": {
  "android": {
    "buildType": "app-bundle"
  }
}
```

This produces:

### ✔ `.aab` → upload to Google Play Store

### ✔ signed, optimized, production-ready

### ✔ includes all assets

### ✔ native modules

---

# 📦 For a True Production Release (Full Process)

## Step 1 — Build AAB

```sh
eas build -p android --profile production
```

## Step 2 — Google Play Developer Account

Sign up if not already (₹ 2,300 one-time fee)

## Step 3 — Upload to Google Play Console

Go to:

Google Play Console → Create App
Upload AAB
Fill:

* App Name
* App Icon
* Privacy Policy
* Content Rating
* Screenshots

Submit to Review.

---

# 🎉 You now have:

✔ **APK for manual installation**
✔ **Dev client build for real device testing (without Expo Go)**
✔ **Full Production AAB for Play Store**
