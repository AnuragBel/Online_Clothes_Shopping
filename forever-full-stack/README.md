# 🛍️ The Aesthetic Store — Online Clothing Shopping Platform

![Project Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-PHP%20%7C%20MySQL%20%7C%20HTML%20%7C%20CSS%20%7C%20JS-blue)
![Type](https://img.shields.io/badge/Type-Academic%20Mini%20Project-orange)

> A full-stack online clothing shopping web application that allows users to browse, filter, and purchase fashion products through a clean and responsive interface.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## 📖 About the Project

**The Aesthetic Store** is an e-commerce web application built as an academic mini project. It simulates a real-world online clothing store where customers can:

- Browse and discover clothing products
- Filter items by category, gender, or price
- Add products to a shopping cart
- Register/login to their account
- Place and track orders

This project demonstrates practical knowledge of full-stack web development, relational database design, and core e-commerce workflows.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🏠 Home Page | Landing page with featured and trending products |
| 🔍 Search & Filter | Filter products by category, gender, price range |
| 🛒 Shopping Cart | Add, update, or remove items dynamically |
| 👤 User Authentication | Register, login, and manage user profiles |
| 📦 Order Management | Place orders and view order history |
| 💳 Checkout Flow | Simple and smooth purchase process |
| 🗂️ Admin Panel | Manage products, orders, and users (if included) |
| 📱 Responsive Design | Works across desktop and mobile screens |

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

### Backend
- PHP (Core PHP)

### Database
- MySQL

### Local Server
- XAMPP (Apache + MySQL)

---

## 📁 Project Structure

```
Online_Clothes_Shopping/
│
├── index.php               # Home / Landing page
├── login.php               # User login page
├── register.php            # User registration page
├── products.php            # Product listing page
├── product_detail.php      # Single product detail page
├── cart.php                # Shopping cart page
├── checkout.php            # Checkout page
├── orders.php              # Order history page
├── logout.php              # Logout handler
│
├── admin/                  # Admin panel (if applicable)
│   ├── dashboard.php
│   ├── manage_products.php
│   └── manage_orders.php
│
├── includes/               # Reusable PHP components
│   ├── db.php              # Database connection
│   ├── header.php
│   └── footer.php
│
├── assets/                 # Static files
│   ├── css/
│   ├── js/
│   └── images/
│
└── database/
    └── aesthetic_store.sql # SQL dump file
```

---

## 🗄️ Database Schema

### Main Tables

| Table | Description |
|---|---|
| `users` | Stores user registration and login data |
| `products` | Clothing product catalog |
| `categories` | Product categories (Men, Women, Kids, etc.) |
| `cart` | Active cart items per user |
| `orders` | Placed order records |
| `order_items` | Line items within each order |

---

## 🚀 Getting Started

### Prerequisites

- [XAMPP](https://www.apachefriends.org/) installed
- A browser (Chrome / Firefox)

### Installation Steps

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/AnuragBel/Online_Clothes_Shopping.git
   ```

2. **Move project to XAMPP's htdocs folder**
   ```
   C:/xampp/htdocs/Online_Clothes_Shopping/
   ```

3. **Start XAMPP**
   - Start **Apache** and **MySQL** from the XAMPP Control Panel

4. **Import the database**
   - Open [phpMyAdmin](http://localhost/phpmyadmin)
   - Create a new database named `aesthetic_store`
   - Click **Import** → select `database/aesthetic_store.sql`

5. **Configure database connection**
   - Open `includes/db.php`
   - Update credentials if needed:
     ```php
     $host = "localhost";
     $user = "root";
     $password = "";
     $database = "aesthetic_store";
     ```

6. **Run the project**
   - Open your browser and go to:
     ```
     http://localhost/Online_Clothes_Shopping/
     ```

---

## 📸 Screenshots

> *(Add screenshots of your Home Page, Product Listing, Cart, and Login pages here)*

| Page | Preview |
|---|---|
| Home Page | *(screenshot)* |
| Product Listing | *(screenshot)* |
| Shopping Cart | *(screenshot)* |
| Checkout | *(screenshot)* |

---

## 🔮 Future Improvements

- [ ] Payment gateway integration (Razorpay / Stripe)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email order confirmation
- [ ] REST API backend (Node.js / Django)
- [ ] React.js frontend migration

---

## 👨‍💻 Author

**Anurag Belgudri**
- GitHub: [@AnuragBel](https://github.com/AnuragBel)
- LinkedIn: [linkedin.com/in/anuragbelgudri](https://linkedin.com/in/anuragbelgudri)

---

## 📄 License

This project is built for academic purposes.
Feel free to use it as a reference for learning.

---

> ⭐ If you found this helpful, consider giving the repo a star!
