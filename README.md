# 👟 Phallo - Themed Shoe Storefront

[![Python Version](https://img.shields.io/badge/python-3.8%20%7C%203.9%20%7C%203.10%20%7C%203.11-blue.svg)](https://www.python.org/)
[![Django Version](https://img.shields.io/badge/django-3.2%20%7C%204.x%20%7C%205.x%20%7C%206.0-green.svg)](https://www.djangoproject.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Phallo** is a modern, responsive, and dynamic Django e-commerce storefront designed exclusively to showcase and categorize custom, themed shoes. Featuring themed footwear collections inspired by **Anime**, **Pokémon**, and **Superheroes**. Phallo provides a modern catalog browsing experience for exploring themed footwear collections. Equipped with a database-driven backend, a stunning homepage hero banner slider, and a sleek Bootstrap user interface, Phallo offers a high-end showcase for custom footwear.

---

## ✨ Features

*   **📱 Responsive Shoe Showcase:** Optimized for mobile, tablet, and desktop viewports using a clean HTML, CSS, and Bootstrap framework.
*   **🎠 Homepage Banner Slider:** Premium hero slider to showcase limited releases, seasonal drops, or featured custom footwear collections.
*   **📂 Themed Shoe Categories:** Structured catalog layout allowing users to filter and browse exclusively through **Anime Shoes**, **Pokémon Shoes**, and **Superhero Shoes**.
*   **🖼️ Dynamic Media Management:** Upload and manage high-quality shoe images and banner assets dynamically via the Django Admin panel.
*   **🗄️ Database-Driven Display:** Dynamic product rendering directly from the SQLite database to eliminate static template hardcoding.
*   **⚙️ Secure Configurations:** Integrated environment variables (`.env`) to protect keys and ensure production readiness.

---

## 🛠️ Tech Stack

*   **Backend:** Python 3.x, Django Web Framework
*   **Database:** SQLite 3 (Default, easily swappable to PostgreSQL or MySQL)
*   **Frontend:** HTML5, CSS3, JavaScript, Bootstrap 5 (CSS Framework)
*   **Media & Image Processing:** Pillow (Python Imaging Library)
*   **Environment Configuration:** Python-Dotenv

---

## 📂 Repository Structure

```text
phallo/
├── manage.py             # Django command-line utility
├── db.sqlite3            # Local development SQLite database (Git ignored)
├── .env.example          # Template for environment variables
├── .gitignore            # Git exclusion rules
├── LICENSE               # MIT License details
├── requirements.txt      # Python dependencies list
├── phallo/               # Core Project Configuration
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py       # Core application settings (Secured with .env)
│   ├── urls.py           # Global routing definitions
│   └── wsgi.py
├── store/                # Main Storefront Application
│   ├── __init__.py
│   ├── admin.py          # Admin panel model registrations
│   ├── apps.py
│   ├── models.py         # Product and Category data models
│   ├── urls.py           # Store routing rules
│   ├── views.py          # Dynamic catalog & category logic
│   ├── migrations/       # Database migrations history
│   ├── static/           # Static assets (custom styling, custom scripts)
│   └── templates/        # HTML templates for views (layout, home, products)
└── media/                # User Uploaded Product Media (Folders tracked, uploads Git ignored)
    ├── banners/          # Carousel & collection header images
    └── products/         # Individual product showcase images
```

---

## 🚀 Installation & Local Setup

Get your local copy of **Phallo** up and running in minutes by following these simple steps:

### 1. Prerequisites
Ensure you have **Python 3.8+** and **Git** installed on your system.

### 2. Clone the Repository
```bash
git clone https://github.com/Aswajith-K/phallo.git
cd phallo
```

### 3. Create a Virtual Environment
Isolate project dependencies by setting up a local virtual environment:

*   **On Windows (Command Prompt/PowerShell):**
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```
*   **On macOS/Linux:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```

### 4. Install Dependencies
Install all the required Python packages:
```bash
pip install -r requirements.txt
```

### 5. Setup Environment Variables
1. Copy the environment variables template to create your local environment file:
   ```bash
   cp .env.example .env
   ```
2. Open the `.env` file and customize your settings, or generate a new secret key.

### 6. Perform Database Migrations
Apply database migrations to set up the default tables and product structures:
```bash
python manage.py migrate
```

### 7. Create a Superuser Account
To upload products and banners dynamically, create a Django administrator account:
```bash
python manage.py createsuperuser
```
Follow the prompts to configure your username, email, and password.

### 8. Run the Development Server
```bash
python manage.py runserver
```
Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in your web browser to view the live storefront! Access the Admin dashboard at [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) to begin adding categories, products, and banners.

---

## 🔮 Future Improvements

Here are some potential features to expand this custom shoe storefront:
1.  **🛒 Shopping Cart:** Implement session-based cart functionality to allow users to add and manage shoe selections.
2.  **💳 Payment Gateway Integration:** Add secure checkout pipelines via Stripe or PayPal for seamless sneaker purchases.
3.  **🔑 User Authentication:** Enable user registration, login, and profiles to track purchase history and save shoe sizes.
4.  **🔍 Smart Shoe Search:** Implement keyword search and filtering by shoe sizes or colorways.
5.  **📈 Stock Alerts:** Automatically flag out-of-stock items and display remaining sizing counts.

---

## 🤝 Contributing

Contributions are welcome! Please check out [CONTRIBUTING.md](CONTRIBUTING.md) to understand how you can help improve Phallo.

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## ✍️ Author

*   **Aswajith K** - *Full Stack Developer* - [Your GitHub Profile](https://github.com/Aswajith-K)

---

*Thank you for exploring Phallo! If you like this project, please consider giving it a ⭐!*
