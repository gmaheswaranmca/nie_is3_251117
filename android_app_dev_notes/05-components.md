# ⭐ **React Native Basic Components — Explained Clearly**

React Native apps are built using components. These components map to **native Android/iOS UI widgets**.

---

# 📌 **1. View**

**What it is:**
Container component used for layout, like a `<div>` in web.

**Used for:**

* grouping UI elements
* making boxes, rows, columns
* styling and positioning

**Android equivalent:** `View`
**iOS equivalent:** `UIView`

---

# 📌 **2. Text**

**What it is:**
Used to display **text** on the screen.

**Used for:**

* labels
* paragraphs
* headings
* messages

You can style with `fontSize`, `color`, etc.

**Android equivalent:** `TextView`

---

# 📌 **3. Image**

**What it is:**
Displays an image from local files or the internet.

**Used for:**

* logos
* icons
* photos
* banners

**Android equivalent:** `ImageView`

---

# 📌 **4. TextInput**

**What it is:**
A text box where users type input.

**Used for:**

* forms
* login fields
* search boxes

Supports keyboard types, placeholder, secure input, etc.

**Android equivalent:** `EditText`

---

# 📌 **5. ScrollView**

**What it is:**
A container that supports **scrolling** if content overflows the screen.

**Used for:**

* long pages
* forms
* small lists

⚠ Not recommended for very large lists (poor performance).

**Android equivalent:** `ScrollView`

---

# 📌 **6. FlatList**

**What it is:**
High-performance list view for **large or dynamic datasets**.

**Used for:**

* chat apps
* long scrolling lists
* product lists

It renders items lazily → better performance than ScrollView.

**Android equivalent:** `RecyclerView`

---

# 📌 **7. Button**

**What it is:**
Simple button display with built-in press handler.

**Used for:**

* submitting forms
* navigation
* small actions

⚠ Very limited styling → Most devs use TouchableOpacity for custom UI.

**Android equivalent:** `Button`

---

# 📌 **8. TouchableOpacity**

**What it is:**
Pressable wrapper with opacity feedback effect.

**Used for:**

* custom buttons
* clickable text
* custom cards
* images that need a tap effect

More flexible than the built-in Button.

**Android equivalent:** `Pressable` behavior on any view.

---

# 📌 **9. SafeAreaView**

**What it is:**
Ensures UI stays inside safe boundaries (not behind notches/status bar).

**Used for:**

* top layout
* screen containers

**iOS equivalent:** uses native safe area insets.

---

# 📌 **10. Pressable**

**What it is:**
Advanced button handler that detects press in/out/long press.

**Used for:**

* buttons
* custom gestures
* cards that react differently on press events

More modern than Touchable components.

---

# 📌 **11. ActivityIndicator**

**What it is:**
Shows a loading spinner.

**Used for:**

* loading screens
* API calls
* data fetch indicators

---

# 📌 **12. StatusBar**

**What it is:**
Used to customize the Android/iOS status bar.

**Used for:**

* light/dark status bar
* hide/show
* color change

---

# 📌 **13. Modal**

**What it is:**
A screen overlay that appears on top of everything.

**Used for:**

* popups
* dialogs
* confirmation alerts

---

# ⭐ **SUMMARY TABLE (React Native Components Mapping)**

| Component             | Purpose               | Example Use           | Android Native        |
| --------------------- | --------------------- | --------------------- | --------------------- |
| **View**              | Layout container      | Rows, columns         | `View`                |
| **Text**              | Display text          | Labels, headings      | `TextView`            |
| **Image**             | Display images        | Logos, photos         | `ImageView`           |
| **TextInput**         | User input            | Login form            | `EditText`            |
| **ScrollView**        | Scroll container      | Long pages            | `ScrollView`          |
| **FlatList**          | High-performance list | Chats, feeds          | `RecyclerView`        |
| **Button**            | Basic button          | Submit, Next          | `Button`              |
| **TouchableOpacity**  | Custom pressable      | Custom button, card   | Any view with press   |
| **Pressable**         | Advanced gestures     | Custom interactions   | Gesture event handler |
| **SafeAreaView**      | Avoid screen notches  | Top-level screen      | Safe inset container  |
| **ActivityIndicator** | Loading spinner       | Fetch/loading state   | `ProgressBar`         |
| **StatusBar**         | Status bar control    | Light/dark status bar | `StatusBar`           |
| **Modal**             | Popup overlay         | Dialog, confirm       | `Dialog`              |

---

```
```

Absolutely YES — you can create **13 functional pages**, each demonstrating **one React Native core component**, and use **Expo Router** to navigate between them.

Below is a **ready-to-implement structure + code** so you can teach students cleanly.

---

# ✅ **Project Structure (Expo + Expo Router)**

```
my-components-demo/
 ├── app/
 │    ├── _layout.js
 │    ├── index.js
 │    ├── view-demo.js
 │    ├── text-demo.js
 │    ├── image-demo.js
 │    ├── textinput-demo.js
 │    ├── scrollview-demo.js
 │    ├── flatlist-demo.js
 │    ├── button-demo.js
 │    ├── touchableopacity-demo.js
 │    ├── pressable-demo.js
 │    ├── safeareaview-demo.js
 │    ├── activityindicator-demo.js
 │    ├── statusbar-demo.js
 │    ├── modal-demo.js
 ├── assets/
 ├── package.json
```

Each file is a separate page.

---

# ✅ **1. Install Expo + Expo Router**

```
npx create-expo-app my-components-demo
cd my-components-demo
npm install expo-router
```

Enable router:

**app/_layout.js**

```js
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack />;
}
```

---

# ✅ **2. Home Page → index.js**

This gives links to all 13 demo pages.

```js
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Components Demo</Text>

      <Link href="/view-demo">1. View</Link>
      <Link href="/text-demo">2. Text</Link>
      <Link href="/image-demo">3. Image</Link>
      <Link href="/textinput-demo">4. TextInput</Link>
      <Link href="/scrollview-demo">5. ScrollView</Link>
      <Link href="/flatlist-demo">6. FlatList</Link>
      <Link href="/button-demo">7. Button</Link>
      <Link href="/touchableopacity-demo">8. TouchableOpacity</Link>
      <Link href="/pressable-demo">9. Pressable</Link>
      <Link href="/safeareaview-demo">10. SafeAreaView</Link>
      <Link href="/activityindicator-demo">11. ActivityIndicator</Link>
      <Link href="/statusbar-demo">12. StatusBar</Link>
      <Link href="/modal-demo">13. Modal</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, marginBottom: 20 }
});
```

---

# ✅ **3. 13 Component Demo Pages (Ready-to-use Code)**

---

## **📌 1. View Demo — view-demo.js**

```js
import { View, Text, StyleSheet } from "react-native";

export default function ViewDemo() {
  return (
    <View style={styles.box}>
      <Text>This is a View component demo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 20,
    backgroundColor: "#cce5ff",
    margin: 20,
    borderRadius: 10
  }
});
```

---

## **📌 2. Text Demo — text-demo.js**

```js
import { Text, View } from "react-native";

export default function TextDemo() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Hello from Text Component</Text>
    </View>
  );
}
```

---

## **📌 3. Image Demo — image-demo.js**

```js
import { View, Image } from "react-native";

export default function ImageDemo() {
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}
```

---

## **📌 4. TextInput Demo — textinput-demo.js**

```js
import { useState } from "react";
import { View, TextInput, Text } from "react-native";

export default function TextInputDemo() {
  const [value, setValue] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Type something..."
        value={value}
        onChangeText={setValue}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Text>You typed: {value}</Text>
    </View>
  );
}
```

---

## **📌 5. ScrollView Demo — scrollview-demo.js**

```js
import { ScrollView, Text } from "react-native";

export default function ScrollDemo() {
  return (
    <ScrollView>
      {[...Array(30).keys()].map(i => (
        <Text key={i} style={{ padding: 10 }}>
          Item {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}
```

---

## **📌 6. FlatList Demo — flatlist-demo.js**

```js
import { FlatList, Text } from "react-native";

const data = Array.from({ length: 20 }, (_, i) => ({ id: i, title: "Item " + i }));

export default function FlatListDemo() {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.title}</Text>}
      keyExtractor={item => item.id}
    />
  );
}
```

---

## **📌 7. Button Demo — button-demo.js**

```js
import { View, Button, Text } from "react-native";
import { useState } from "react";

export default function ButtonDemo() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
    </View>
  );
}
```

---

## **📌 8. TouchableOpacity Demo — touchableopacity-demo.js**

```js
import { TouchableOpacity, Text } from "react-native";

export default function TouchableDemo() {
  return (
    <TouchableOpacity style={{ padding: 20, backgroundColor: "#ddd" }}>
      <Text>Press Me</Text>
    </TouchableOpacity>
  );
}
```

---

## **📌 9. Pressable Demo — pressable-demo.js**

```js
import { Pressable, Text } from "react-native";

export default function PressableDemo() {
  return (
    <Pressable onPress={() => alert("Pressed!")}>
      <Text style={{ padding: 20 }}>Pressable Component</Text>
    </Pressable>
  );
}
```

---

## **📌 10. SafeAreaView Demo — safeareaview-demo.js**

```js
import { SafeAreaView, Text } from "react-native";

export default function SafeDemo() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ margin: 20 }}>Inside Safe Area</Text>
    </SafeAreaView>
  );
}
```

---

## **📌 11. ActivityIndicator Demo — activityindicator-demo.js**

```js
import { ActivityIndicator, View } from "react-native";

export default function LoaderDemo() {
  return (
    <View style={{ padding: 20 }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
```

---

## **📌 12. StatusBar Demo — statusbar-demo.js**

```js
import { StatusBar, View } from "react-native";

export default function StatusDemo() {
  return (
    <View>
      <StatusBar backgroundColor="tomato" barStyle="light-content" />
    </View>
  );
}
```

---

## **📌 13. Modal Demo — modal-demo.js**

```js
import { Modal, View, Button, Text } from "react-native";
import { useState } from "react";

export default function ModalDemo() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Open Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} transparent>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View style={{ backgroundColor: "#fff", padding: 30 }}>
            <Text>This is a Modal</Text>
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
```

---

# 🎉 **READY FOR TEACHING**

This setup gives:
✔ 13 individual component demo pages
✔ Navigation using Expo Router
✔ Clean structure for college-level training
✔ Students understand each component separately

