# ✅ **React Native Styles – Full Table**

### **📌 1. Layout (Flexbox & Positioning)**

| Style Property               | Syntax                     | Usage / Meaning                                | When to Use                       |
| ---------------------------- | -------------------------- | ---------------------------------------------- | --------------------------------- |
| **flex**                     | `flex: 1`                  | Fills remaining space                          | Make container expand             |
| **flexDirection**            | `flexDirection: "row"`     | Direction of children                          | Horizontal or vertical layout     |
| **justifyContent**           | `justifyContent: "center"` | Vertical alignment (column) / Horizontal (row) | Center, space-between, flex-start |
| **alignItems**               | `alignItems: "center"`     | Horizontal alignment (column) / Vertical (row) | Align items inside container      |
| **alignSelf**                | `alignSelf: "flex-end"`    | Override alignment for one item                | Position a specific child         |
| **flexWrap**                 | `flexWrap: "wrap"`         | Wrap items to next line                        | Chips, tags, images grid          |
| **gap**                      | `gap: 10`                  | Space between children                         | New RN versions support this      |
| **rowGap / columnGap**       | `rowGap: 10`               | Row/Column spacing                             | More control over spacing         |
| **position**                 | `position: "absolute"`     | Absolute / relative positioning                | Floating buttons, overlays        |
| **top, left, right, bottom** | `top: 10`                  | Position for absolute elements                 | Position overlays & icons         |

---

### **📌 2. Size & Spacing**

| Style Property                   | Syntax                  | Usage            | When to Use           |
| -------------------------------- | ----------------------- | ---------------- | --------------------- |
| **width**                        | `width: 200`            | Set width        | Fixed size components |
| **height**                       | `height: 100`           | Set height       | Banner, image size    |
| **maxWidth / minWidth**          | `maxWidth: 300`         | Limits size      | Responsive layouts    |
| **margin**                       | `margin: 10`            | Outside spacing  | Gap around component  |
| **marginTop / marginLeft...**    | `marginTop: 10`         | Specific margin  | Precise placement     |
| **padding**                      | `padding: 15`           | Inside spacing   | Space inside box      |
| **paddingHorizontal / vertical** | `paddingHorizontal: 20` | Smart padding    | Input boxes, buttons  |
| **borderWidth**                  | `borderWidth: 2`        | Border thickness | Cards, text inputs    |
| **borderColor**                  | `borderColor: "gray"`   | Border color     | Highlight input       |

---

### **📌 3. Typography**

| Style Property         | Syntax                 | Usage                    | When to Use          |
| ---------------------- | ---------------------- | ------------------------ | -------------------- |
| **fontSize**           | `fontSize: 20`         | Text size                | All text             |
| **fontWeight**         | `fontWeight: "bold"`   | Bold text                | Titles and headings  |
| **fontFamily**         | `fontFamily: "Roboto"` | Custom font              | Branding             |
| **color**              | `color: "#333"`        | Text color               | Dark/light mode      |
| **textAlign**          | `textAlign: "center"`  | Center/left/right        | Center headings      |
| **lineHeight**         | `lineHeight: 30`       | Line spacing             | Paragraph text       |
| **letterSpacing**      | `letterSpacing: 2`     | Space between characters | Logo text            |
| **textDecorationLine** | `"underline"`          | Underline / strike       | Links, removed items |

---

### **📌 4. Background & Border Styles**

| Style Property             | Syntax                     | Usage                  | When to Use         |
| -------------------------- | -------------------------- | ---------------------- | ------------------- |
| **backgroundColor**        | `backgroundColor: "#fff"`  | Background color       | Box styling         |
| **borderRadius**           | `borderRadius: 10`         | Rounded corners        | Cards, buttons      |
| **borderTopLeftRadius...** | `borderTopRightRadius: 20` | Specific corner radius | Chip, custom shapes |
| **borderStyle**            | `"dashed"`                 | Border style           | Highlighted boxes   |
| **opacity**                | `opacity: 0.5`             | Transparency           | Overlay backgrounds |

---

### **📌 5. Shadows (iOS + Android)**

| Style Property            | Syntax                                | Usage           | When to Use             |
| ------------------------- | ------------------------------------- | --------------- | ----------------------- |
| **elevation** *(Android)* | `elevation: 5`                        | Shadow          | Cards, floating buttons |
| **shadowColor**           | `shadowColor: "#000"`                 | iOS shadow      | Cards                   |
| **shadowOpacity**         | `shadowOpacity: 0.3`                  | iOS shadow      | Smooth look             |
| **shadowOffset**          | `shadowOffset: {width: 0, height: 4}` | iOS shadow      | Direction               |
| **shadowRadius**          | `shadowRadius: 4`                     | iOS blur shadow | Soft shadows            |

---

### **📌 6. Image Styles**

| Style Property | Syntax                            | Usage                | When to Use             |
| -------------- | --------------------------------- | -------------------- | ----------------------- |
| **resizeMode** | `"contain"` `"cover"` `"stretch"` | Image scaling        | Profile photos, banners |
| **tintColor**  | `tintColor: "red"`                | Colorize icon images | Changing icon colors    |

---

### **📌 7. Container & Box Decoration**

| Style Property   | Syntax            | Usage              | When to Use      |
| ---------------- | ----------------- | ------------------ | ---------------- |
| **overflow**     | `"hidden"`        | Clip child content | Rounded images   |
| **zIndex**       | `zIndex: 10`      | Stack order        | Floating buttons |
| **alignContent** | `"space-between"` | Multi-row content  | FlexWrap grids   |

---

### **📌 8. Platform Specific**

| Style Property         | Syntax            | Usage                | When to Use        |
| ---------------------- | ----------------- | -------------------- | ------------------ |
| **display**            | `display: "none"` | Show/hide            | Toggle UI elements |
| **direction**          | `"rtl"`           | Right-to-left layout | Arabic, Hebrew     |
| **backfaceVisibility** | `"hidden"`        | Hide flipped element | Flipped cards      |

---

# 🎉 **BONUS: Most Common Style Patterns**

### **📌 Center everything**

```js
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}
```

### **📌 Card style**

```js
card: {
  padding: 20,
  backgroundColor: "#fff",
  borderRadius: 12,
  elevation: 5
}
```

### **📌 Row spacing**

```js
row: {
  flexDirection: "row",
  justifyContent: "space-between"
}
```

### **📌 Input box**

```js
input: {
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 10,
  borderRadius: 8
}
```

---
