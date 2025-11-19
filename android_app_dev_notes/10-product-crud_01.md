Below is **complete, clean, production-ready beginner code** for a **React Native Expo App** using **`npx create-expo-app`** and **Expo Router**, implementing:

✔ **Product List Page**
✔ **New Product Page**
✔ **Edit Product Page**
✔ **Routing using Expo Router**
✔ Works with **JSX (not TypeScript)**
✔ Fully functional CRUD (in-memory)

---

# ✅ 1. Create the Expo App

* Refer: https://docs.expo.dev/router/installation/#quick-start

```sh
npx create-expo-app ProductApp--template blank

cd ProductApp

# for dependencies required
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# for test in web (browser instead of mobile)
npx expo install react-native-web react-dom

code .

```

* Delete App.js
* Delete index.js


## package.json 

```
{
    ...
  "main": "expo-router/entry"
  ...
}
```

## app.json 

```
{
    ...
  "scheme": "your-app-scheme"

  ...


  "web": {
    "bundler": "metro"
  }
}
```

---

# ✅ 2. Project Structure (Final Output)

```
product-app
 └─ app
     ├─ index.js              → List page
     ├─ new.js                → Add new product
     └─ edit.js               → Edit product
     └─ _layout.js            → Base for Routes using Stack Layout
 └─ context
     └─ ProductContext.js      → Global state for products
```

---

# ✅ 3. Add ProductContext (Global Store)

Create:

**`/context/ProductContext.js`**

```jsx
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    { id: "1", name: "Laptop", description: "Dell Laptop", stock: 10, price: 45000 },
    { id: "2", name: "Mobile", description: "Samsung A52", stock: 5, price: 22000 },
  ]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const updateProduct = (updated) => {
    setProducts(products.map((p) => (p.id === updated.id ? updated : p)));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
```

---

# ✅ 4. Wrap App Root With Provider

Open:

**`app/_layout.js`**

```js
import { Stack } from "expo-router";
import ProductProvider from "../context/ProductContext";

export default function RootLayout() {
  return (
    <ProductProvider>
      <Stack />
    </ProductProvider>
  );
}
```

---

# ✅ 5. LIST PAGE — `/app/index.js`

```js
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function ProductList() {
  const { products } = useContext(ProductContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={{ pathname: "/edit", params: item }} asChild>
            <TouchableOpacity style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>₹ {item.price}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />

      <Link href="/new" asChild>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.btnText}>+ Add New Product</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  item: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: "600" },
  addBtn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
});
```

---

# ✅ 6. NEW PRODUCT PAGE — `/app/new.js`

```js
import { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ProductContext } from "../context/ProductContext";
import { router } from "expo-router";

export default function NewProduct() {
  const { addProduct } = useContext(ProductContext);

  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    stock: "",
    price: "",
  });

  const handleSubmit = () => {
    addProduct({ ...form, id: Date.now().toString(), stock: Number(form.stock), price: Number(form.price) });
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>

      {Object.keys(form).filter(k=>k!=="id").map((field) => (
        <TextInput
          key={field}
          style={styles.input}
          placeholder={field}
          value={form[field]}
          onChangeText={(v) => setForm({ ...form, [field]: v })}
        />
      ))}

      <TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Save Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  saveBtn: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 8,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
});
```

---

# ✅ 7. EDIT PRODUCT PAGE — `/app/edit.js`

```js
import { useContext, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { ProductContext } from "../context/ProductContext";

export default function EditProduct() {
  const params = useLocalSearchParams();
  const { updateProduct } = useContext(ProductContext);

  const [form, setForm] = useState({ ...params });

  const handleSave = () => {
    updateProduct({
      ...form,
      stock: Number(form.stock),
      price: Number(form.price),
    });
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Product</Text>

      <TextInput
        style={styles.input}
        placeholder="name"
        value={form.name}
        onChangeText={(v) => setForm({ ...form, name: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="description"
        value={form.description}
        onChangeText={(v) => setForm({ ...form, description: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="stock"
        value={form.stock}
        onChangeText={(v) => setForm({ ...form, stock: v })}
      />
      <TextInput
        style={styles.input}
        placeholder="price"
        value={form.price}
        onChangeText={(v) => setForm({ ...form, price: v })}
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.btnText}>Update Product</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  saveBtn: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 8,
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 },
});
```

---

# ✅ 8. Run the App

```sh
npx expo start
```

then:

* Press **a** → Android
* Press **w** → Web
* Press **i** → iOS

---

# 🎉 Your React Native CRUD App With Router Is Ready

You can now:

✔ View product list
✔ Add product
✔ Edit product
✔ Navigate using Expo Router
✔ No backend required (in-memory state)
