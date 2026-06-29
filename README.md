# my-first-actions

โปรเจกต์สาธิต CI/CD Pipeline ด้วย GitHub Actions

## โครงสร้างโปรเจกต์

```
my-first-actions/
├── .github/
│   └── workflows/
│       ├── hello-world.yml   ← ตอนที่ 1: Hello World Workflow
│       └── main.yml          ← ตอนที่ 2: Deploy to GitHub Pages
├── index.html
├── style.css
├── script.js
└── README.md
```

## วิธีใช้งาน

### ตอนที่ 1: Hello World
Push โค้ดขึ้น GitHub แล้วดู Log ในแท็บ **Actions** → Job ชื่อ **build**

### ตอนที่ 2: Deploy GitHub Pages
1. Push โค้ดขึ้น GitHub
2. รอ Actions ขึ้น ✅ สีเขียว
3. ไปที่ **Settings → Pages**
4. เลือก Branch: `gh-pages` แล้วกด Save
5. รับ URL เว็บไซต์จาก GitHub

## ⚠️ สิ่งที่ต้องแก้ไขก่อน Push

ใน `.github/workflows/main.yml` บรรทัด `name: Checkout code` ให้เปลี่ยน `Somnuek-001` เป็นชื่อจริงของคุณ เช่น:
```
- name: Checkout code (actions/Somchai-123)
```
