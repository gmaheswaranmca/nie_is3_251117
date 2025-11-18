# ✅ **Expo `start` Options (Most Common & Useful)**

| Option                | Description                                                                                                |
| --------------------- | ---------------------------------------------------------------------------------------------------------- |
| **`--tunnel`**        | Connect devices through an internet tunnel. Works even without same Wi-Fi. Slowest but most reliable.      |
| **`--lan`** (default) | Devices on the same Wi-Fi can open the app using local network IP. Fastest & recommended for real devices. |
| **`--localhost`**     | Runs bundler on localhost. Only works on the same machine (e.g., emulator).                                |
| **`--clear`**         | Clears Metro bundler cache → fixes many issues.                                                            |
| **`--android`**       | Automatically opens the app in Android emulator/device.                                                    |
| **`--ios`**           | Automatically opens app in iOS Simulator (macOS only).                                                     |
| **`--web`**           | Starts the Expo project in the browser.                                                                    |

---

# 🔍 **Full List of Expo Start Options**

Here are additional options you can use.

### **Connection / Networking**

| Option            | Meaning                                                                                |
| ----------------- | -------------------------------------------------------------------------------------- |
| `--dev-client`    | Start a development build instead of Expo Go. Needed if you use custom native modules. |
| `--scheme <name>` | Open the app on a custom URL scheme.                                                   |
| `--https`         | Serve the dev server over HTTPS instead of HTTP.                                       |

---

### **Bundler / Debugging**

| Option              | Meaning                                         |
| ------------------- | ----------------------------------------------- |
| `--clear`           | Clear Metro cache.                              |
| `--max-workers <n>` | Set number of worker threads for Metro bundler. |

---

### **Platform Shortcuts**

| Option      | Meaning                            |
| ----------- | ---------------------------------- |
| `--android` | Open on Android emulator / device. |
| `--ios`     | Open on iOS simulator.             |
| `--web`     | Run web version.                   |

---

### **Tunnels**

| Option          | Meaning                                               |
| --------------- | ----------------------------------------------------- |
| `--offline`     | Do not use any network; use cached data only.         |
| `--host <type>` | Choose connection mode: `lan`, `tunnel`, `localhost`. |

Example:

```
expo start --host tunnel
```

---

# ⭐ Most Useful Combinations

### ❇️ **Start on LAN with clean cache**

```
expo start --lan --clear
```

### ❇️ **Start with Tunnel**

```
expo start --tunnel
```

### ❇️ **Start directly on Android emulator**

```
expo start --android
```

### ❇️ **Start Dev Client build**

```
expo start --dev-client
```

---

# ⚡ Conclusion

✔ Expo provides many start options.
✔ Most commonly used: **tunnel, lan, localhost, clear, android, web, dev-client**.
✔ `--tunnel` is used when your phone and laptop are on different networks.


```
```

`--tunnel` is **NOT an option for `create-expo-app`**.

It is an option for the **Expo Development Server**, used when you run:

```
npx expo start --tunnel
```

---

# ✅ **What is `--tunnel`?**

`--tunnel` makes Expo create a **tunnel connection over the internet** so your **Expo Go app on mobile** can connect to your development machine even if:

* Your mobile and computer are on **different networks**
* You are behind **firewalls**
* Your WiFi blocks **LAN discovery / Bonjour**
* LAN and Local network modes **do not work**

Expo uses **ngrok** internally to open a tunnel URL.

---

# 🟢 **When to use `--tunnel`?**

Use it when **Expo Go cannot connect** using the default QR scan.

Common cases:

* Office WiFi blocks local network access
* Public WiFi
* Network with VPN
* Hotspot that isolates devices
* Developer PC connected via LAN cable, phone via WiFi

---

# 📌 **Command Example**

```
npx expo start --tunnel
```

This will show a QR code like:

```
exp://u4g-5x.da-magesh.myapp.exp.direct
```

You scan this in **Expo Go**, and it works through the internet.

---

# 🟡 **Difference between connection modes**

| Mode              | Command                      | Works When                     | Notes                      |
| ----------------- | ---------------------------- | ------------------------------ | -------------------------- |
| **LAN (default)** | `npx expo start`             | Both devices on same WiFi      | Fastest                    |
| **Local**         | `npx expo start --localhost` | Device + PC on same network    | Strict                     |
| **Tunnel**        | `npx expo start --tunnel`    | Any network, internet required | Slowest, but most reliable |

---

# 🔥 Summary

`--tunnel` = Internet-based connection for Expo Go when LAN fails.
