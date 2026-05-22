# 📢 Release Notes - Phallo v1.0.0

We are excited to announce the first stable release of **Phallo (v1.0.0)**! 

Phallo is a fully responsive, lightweight, and modern Django e-commerce storefront tailored for custom shoe enthusiasts. This release establishes a solid foundation, including database models for categorizing shoe products, uploading banner sliders dynamically, and showcasing themed footwear through a responsive Bootstrap interface.

---

## 🚀 Key Highlights & Features

### 💻 Modern Responsive Storefront
*   **Stunning Hero Slider:** Fully dynamic homepage slider displaying high-resolution promotion banners from the admin backend.
*   **Grid Product Display:** Organized Bootstrap-based grid layout displaying product cards with responsive columns.
*   **Collections Page:** Dedicated display for structured shoe catalogs.

### 📂 Organized Collections & Categories
*   **Three themed shoe categories included by default:** Anime Shoes, Pokémon Shoes, and Superhero Shoes.
*   **Structured Filtering:** Ability to filter and render specific collections dynamically.

### 🛡️ Secure Configuration & Admin Controls
*   **Django Admin Integration:** Complete backend controls to add, update, or remove categories, banner sliders, and custom shoes.
*   **Dotenv Configs (`.env`):** Decoupled secret key, debug toggle, and allowed hosts variables to prevent sensitive data exposure in version control.
*   **Optimized File Control:** Configured clean Git ignore definitions separating static blueprints from dynamic uploads and local SQLite assets.

---

## 🛠️ Requirements & Environment

*   **Python:** >= 3.8
*   **Django:** 6.0.x
*   **Pillow:** >= 10.0.0
*   **Database:** SQLite (Default, dev-ready)

---

## 🔧 Installation Recap

1.  Copy `.env.example` to `.env` and configure your settings.
2.  Run `pip install -r requirements.txt` to install project dependencies.
3.  Migrate your database with `python manage.py migrate`.
4.  Create your first admin login via `python manage.py createsuperuser`.
5.  Launch the application using `python manage.py runserver`!
