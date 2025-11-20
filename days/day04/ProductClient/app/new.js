import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { router } from "expo-router";
import { BASE_URL } from "../config";

export default function NewProduct() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    description: "",
    stock: "",
    price: "",
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    setSaving(true);
    const newProduct = {...form, id:0, 
          stock:parseFloat(form.stock), 
          price:parseFloat(form.price)}
    
    const response = await fetch(`${BASE_URL}/products`, {
        method : 'POST', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
    });
    setSaving(false);
    router.push("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Product</Text>

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

      {saving && (<Text>Saving Product...</Text>)}
      {(!saving) &&
      (<TouchableOpacity style={styles.saveBtn} onPress={handleSubmit}>
        <Text style={styles.btnText}>Save Product</Text>
      </TouchableOpacity>)}
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