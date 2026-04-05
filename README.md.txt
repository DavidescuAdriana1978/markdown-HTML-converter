# markdown-HTML-converter
# 📝 Markdown to HTML Converter

A simple and user-friendly web application that converts **Markdown text into HTML** in real time.
Built using **HTML, CSS, and JavaScript**, this project is perfect for learning text parsing and DOM manipulation.

---

## ✨ Features

* 🔄 Convert Markdown to HTML instantly
* 🧾 View **raw HTML output**
* 👀 Live **HTML preview rendering**
* 📱 Responsive and clean UI
* ⚡ Lightweight (no frameworks)

---

## 📸 Preview

The app consists of three main sections:

1. **Markdown Input** – Write your Markdown here
2. **Raw HTML Output** – See the generated HTML code
3. **HTML Preview** – View the rendered result

---

## 📁 Project Structure

```
markdown-to-html-converter/
├── index.html      # Main structure
├── style.css       # Styling
├── script.js       # Conversion logic
└── README.md       # Documentation
```
This is still a basic parser, so it:

❌ doesn’t support nested lists properly
❌ no tables
❌ no full Markdown spec
❌ simple <ul> wrapping (can duplicate)
---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/markdown-converter.git
cd markdown-converter
```

### 2. Open the project

Simply open `index.html` in your browser:

```bash
open index.html
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling & layout
* **JavaScript (Vanilla)** – Markdown parsing & interactivity

---

## 🧪 Example Markdown to Try

````markdown
# Hello World

This is **bold** and this is *italic*.

## List
- Item 1
- Item 2

## Code
```js
console.log("Hello!");
````

```

---

## 📌 How It Works

1. User types Markdown in the textarea  
2. JavaScript reads the input  
3. Converts Markdown → HTML  
4. Displays:
   - Raw HTML in one panel  
   - Rendered HTML in preview panel  

---

## ⚠️ Limitations

- Basic Markdown support (depends on your `script.js`)
- No backend or file saving
- No advanced parsing (like full Markdown spec)

---

## 💡 Future Improvements

- Add full Markdown parser (like `marked.js`)
- Add **copy HTML button**
- Add **download as HTML**
- Add **dark mode 🌙**
- Improve mobile UI

---

## 📄 License

This project is open-source and free to use for learning purposes.

---

## 👩‍💻 Author

Created by **Adriana Davidescu**  
Junior Web Developer

---
```
