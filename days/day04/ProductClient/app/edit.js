import {  useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { BASE_URL } from "../config";


export default function EditProduct() {
  const params = useLocalSearchParams();

  const [form, setForm] = useState({ ...params });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    const newProduct = {...form, 
          stock:parseFloat(form.stock), 
          price:parseFloat(form.price)}
    
    const response = await fetch(`${BASE_URL}/products/${params.id}`, {
        method : 'PUT', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct)
    });
    setSaving(false);
    router.push("/");
  };

  const readProduct = async () => {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/products/${params.id}`);
      const queried_product = await response.json();
      setForm(queried_product);
      setLoading(false);
  };

  useEffect( () => {
    readProduct();
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Product</Text>

      {loading && (<Text>Loading Products...</Text>) }
      {(!loading) &&
      (<>
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
        (<TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.btnText}>Update Product</Text>
        </TouchableOpacity>)}
      </>)}
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