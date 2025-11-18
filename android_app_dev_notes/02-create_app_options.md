# **`--template` options** you can use with:

```
npx create-expo-app my-app --template <template-name>
```

---

# ✅ **Official Expo Templates**

| Template Name           | Command                        | Description                        |
| ----------------------- | ------------------------------ | ---------------------------------- |
| **blank** (default JS)  | `--template blank`             | A minimal Expo app with JavaScript |
| **blank-typescript**    | `--template blank-typescript`  | Same as blank but with TypeScript  |
| **tabs**                | `--template tabs`              | Bottom tab navigation (JS)         |
| **tabs-typescript**     | `--template tabs-typescript`   | Tab navigation (TS)                |
| **drawer**              | `--template drawer`            | Side drawer navigation (JS)        |
| **drawer-typescript**   | `--template drawer-typescript` | Drawer navigation (TS)             |
| **stack**               | `--template stack`             | Stack navigation example           |
| **blank-sqlite**        | `--template blank-sqlite`      | Example with SQLite usage          |
| **expo-template-blank** | same as blank                  | JS blank template                  |
| **expo-template-tabs**  | same as tabs                   | JS tab navigation template         |

---

# 🎯 **Most commonly used**

### **Blank TypeScript**

```
npx create-expo-app my-app --template blank-typescript
```

### **Blank JavaScript**

```
npx create-expo-app my-app --template blank
```

### **Tabs Navigation (TS)**

```
npx create-expo-app my-app --template tabs-typescript
```

---

# 📌 CLI will show template list (interactive)

If you omit `--template`, Expo will show choices:

```
? Choose a template
  › blank
    blank (TypeScript)
    tabs
    tabs (TypeScript)
```

---

# ⭐ Recommended for you

Since you want a **simple calculator app**, use:

### **JavaScript**

```
npx create-expo-app my-calculator --template blank
```

### **TypeScript**

```
npx create-expo-app my-calculator --template blank-typescript
```


```
```

Expo also supports **`--example`** to create a new project **from GitHub example repositories**.

It works like this:

```
npx create-expo-app my-app --example <github-url-or-example-name>
```

---

# ✅ **What `--example` does**

* Clones an **example app** from a GitHub repo
* Installs all dependencies
* Sets up the project exactly like that example
* Useful for learning advanced patterns or using full app demos

---

# ⭐ Official Expo Examples (built-in shortcuts)

You can use any GitHub repo as an example, but Expo provides some common ones:

| Example                       | Command                               | Description                   |
| ----------------------------- | ------------------------------------- | ----------------------------- |
| **with-router**               | `--example with-router`               | Example using Expo Router     |
| **with-local-authentication** | `--example with-local-authentication` | Uses fingerprint/face unlock  |
| **with-sqlite**               | `--example with-sqlite`               | SQLite storage example        |
| **with-web-browser**          | `--example with-web-browser`          | Opening links & OAuth         |
| **with-typescript**           | `--example with-typescript`           | Full TS example               |
| **with-react-native-paper**   | `--example with-react-native-paper`   | UI framework demo             |
| **with-nextjs**               | `--example with-nextjs`               | Next.js + Expo web support    |
| **with-reanimated**           | `--example with-reanimated`           | Reanimated animations example |
| **with-redux**                | `--example with-redux`                | Redux state management        |
| **with-maps**                 | `--example with-maps`                 | React Native Maps             |

---

# 🎯 Syntax Examples

### **1. From Expo’s example library**

```
npx create-expo-app biometric-app --example with-local-authentication
```

### **2. Using TypeScript example**

```
npx create-expo-app ts-app --example with-typescript
```

### **3. Using Redux example**

```
npx create-expo-app redux-demo --example with-redux
```

### **4. Maps example**

```
npx create-expo-app my-maps --example with-maps
```

---

# 🚀 **Using any GitHub repo**

You can pass *any* GitHub URL:

```
npx create-expo-app custom-app --example https://github.com/expo/examples/tree/master/with-web-browser
```

---

# 📌 Tip

Use `--example` when:

* You want a **ready-made app** to modify
* You want to learn best practices quickly
* You need a working reference

Use `--template` when:

* You want a **fresh project** with basic folders
* You want TypeScript or JS setup only
* You want to build your own folder structure

```
```

Expo’s **`create-expo-app`** has only a *small number of CLI flags*, because Expo tries to stay simple.

The **main options** you can use are:

# ✅ **1. `--template`**

Creates a project using official Expo templates:

```
npx create-expo-app my-app --template blank
npx create-expo-app my-app --template blank-typescript
```

---

# ✅ **2. `--example`**

Creates a project from an **example repo** (GitHub or Expo Examples):

```
npx create-expo-app my-app --example with-router
```

---

# 🟦 **3. `--npm`**

Force **npm** instead of yarn/pnpm:

```
npx create-expo-app my-app --npm
```

---

# 🟪 **4. `--yarn`**

Force install using **yarn**:

```
npx create-expo-app my-app --yarn
```

---

# 🟩 **5. `--pnpm`**

Install dependencies using **pnpm**:

```
npx create-expo-app my-app --pnpm
```

---

# 🟧 **6. `--no-install`**

Creates project **without installing dependencies**:

```
npx create-expo-app my-app --no-install
```

Use this if:

* You want to inspect files before installing
* Package managers are causing issues
* You plan to install manually later

---

# 🟨 **7. `--yes`** or `-y`

Skips all prompts and uses default options:

```
npx create-expo-app my-app -y
```

---

# 🟥 **8. `--overwrite`**

Overwrite existing folder if project already exists:

```
npx create-expo-app my-app --overwrite
```

---

# 📌 FULL LIST — All available flags

| Flag                   | Meaning                      |
| ---------------------- | ---------------------------- |
| `--template <name>`    | Choose official template     |
| `--example <url/name>` | Clone example project        |
| `--npm`                | Use npm                      |
| `--yarn`               | Use yarn                     |
| `--pnpm`               | Use pnpm                     |
| `--no-install`         | Skip installing dependencies |
| `--yes`, `-y`          | Skip prompts, use defaults   |
| `--overwrite`          | Replace existing directory   |

---

# 📌 Rare options (used internally)

These may exist depending on Expo version but rarely used manually:

| Option              | Use                                  |
| ------------------- | ------------------------------------ |
| `--non-interactive` | No prompts (for CI/CD)               |
| `--skip-cache`      | Forces fresh download (internal use) |

---

# ⭐ Best options for you (BEGINNER)

Use these:

```
npx create-expo-app my-app --template blank
```

or TypeScript:

```
npx create-expo-app my-app --template blank-typescript
```

```
```

