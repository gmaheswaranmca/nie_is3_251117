Here is the **full explanation** of why some students get
`exp://127.0.0.1:8081` (localhost) instead of the LAN IP, and why Expo Go cannot connect — *even with `--tunnel`*.

This happens often in labs, offices, colleges, and with certain Wi-Fi routers.

---

# ✅ **WHY EXPO SHOWS 127.0.0.1 (localhost)?**

When Expo starts, it tries to detect your **real LAN IP**.

Example (working):

```
exp://10.62.224.57:8081
```

But if it **cannot detect LAN IP**, it falls back to:

```
exp://127.0.0.1:8081
```

Because 127.0.0.1 = the *local device itself*, Expo Go on Android cannot access it.

---

# 🚨 **Root Causes (These 4 are the most common)**

## **1) Network Adapter issue**

If the student’s laptop is either:

* connected via **Ethernet + Wi-Fi**
* using VPN
* Windows Virtual Network Adapters active
  (like Hyper-V, Docker, VirtualBox, Cisco AnyConnect)

➡ Expo gets confused and reads *127.0.0.1* instead of LAN IP.

---

## **2) Firewall / Antivirus blocks ports**

Expo requires these ports:

| Port  | Purpose              |
| ----- | -------------------- |
| 19000 | Metro Bundler        |
| 19001 | WebSocket connection |
| 19002 | Expo DevTools        |
| 8081  | App bundle           |

If firewall blocks:

* inbound device connections
* WebSocket traffic

➡ Phone cannot connect.

**Antivirus examples that block Expo**

* K7
* QuickHeal
* McAfee
* Norton
* BitDefender (strict mode)

---

## **3) Wi-Fi router blocks peer-to-peer devices**

Some routers have **AP (Access Point) isolation** ON.

That means:

* devices on the same Wi-Fi **cannot talk to each other**
* like Android ↔ Laptop

➡ Even LAN mode fails
➡ Even tunnel sometimes fails

Because tunnel still needs outgoing WebSocket traffic.

---

## **4) Campus / Office proxy**

College/office Wi-Fi may use:

* Captive portal
* Proxy settings
* DNS filtering
* No outbound WebSocket support

➡ Tunnel fails.
➡ LAN fails.
➡ Only localhost works.

---

# 🔧 **SOLUTIONS (Try these one by one)**

## ✅ **Fix 1 — Force Expo to use LAN**

Tell Expo to use the correct mode:

```
npx expo start --host lan
```

If LAN fails, try:

```
npx expo start --tunnel
```

---

## ✅ **Fix 2 — Disable Virtual network adapters**

On Windows:

1. Open **Control Panel > Network and Sharing Center**
2. Click **Change adapter settings**
3. Disable:

   * Hyper-V adapters
   * VirtualBox Host adapters
   * Docker NAT adapters
   * Cisco VPN adapters
   * VMware adapters
4. Restart expo:

```
npx expo start --clear
```

---

## ✅ **Fix 3 — Check Firewall**

Open Windows Firewall → Allow apps → Allow these:

* Node.js (all)
* expo-cli
* java.exe
* adb.exe
* Android Emulator
* "Allow inbound connections" ON

Or temporarily disable the firewall just to test.

---

## ✅ **Fix 4 — Router Setting: Disable AP Isolation**

If using campus Wi-Fi → ask admin to check:

**AP Isolation / Client Isolation / Guest Mode**

If ON → android phone cannot communicate with laptop.

---

## ✅ **Fix 5 — Use USB Debugging (Works 100%)**

If Wi-Fi is blocked, connect phone via USB:

```
adb devices
npx expo start
```

Expo Go will open instantly on the device.

---

## ✅ **Fix 6 — Try a mobile hotspot**

Ask student to:

* connect laptop + phone to **mobile hotspot**
  (not college Wi-Fi)

Expo usually works immediately.

---

# 🧪 Quick Diagnostic Checklist

Ask the student:

| Problem                             | Solution                                |
| ----------------------------------- | --------------------------------------- |
| Expo shows 127.0.0.1                | Disable virtual adapters + restart expo |
| Expo Go cannot connect              | Use `--tunnel` or mobile hotspot        |
| Tunnel also fails                   | College proxy or firewall issue         |
| LAN works for some students         | Router AP isolation                     |
| Works only when using USB debugging | Wi-Fi blocked                           |

---

# 🟢 **Final Answer**

Yes — the issue is usually **network adapter conflict**, **firewall/antivirus restriction**, **router AP isolation**, or **VPN/proxy**.

This is why:

* Some get LAN URL → works
* Some get 127.0.0.1 → fails

Expo Go cannot access localhost.
