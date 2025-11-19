import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Home() {
    return(
        <View style={styles.container}>
            <Link href="/contact">Contact Api Access</Link>
            <Link href="/location">Location Api Access</Link>
            <Link href="/battery">Battery Api Access</Link>
        </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 }
});