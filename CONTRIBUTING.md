# 🤝 Contributing to Phallo

Thank you for showing interest in contributing to **Phallo**! We love receiving contributions from the developer community, whether they are bug fixes, feature requests, or documentation improvements.

Follow these simple guidelines to make the contributing process smooth and efficient for everyone:

---

## 🙋 Getting Help or Reporting Issues

### 🔍 Did You Find a Bug?
*   **Search existing issues:** First, check if the bug has already been reported.
*   **Open a new issue:** If you can't find an open issue, feel free to create one. Please include:
    *   A clear and descriptive title.
    *   Steps to reproduce the bug.
    *   Expected vs. actual behavior.
    *   Your operating system and Python/Django versions.

### 💡 Do You Have a Feature Suggestion?
*   Open an issue with the tag `enhancement` or `feature-request` detailing what you'd like to see, why it is valuable, and how it could be implemented.

---

## 🛠️ How to Contribute Code

To contribute code changes (bug fixes, refinements, or new features), please follow these steps:

### 1. Fork and Clone
Fork the repository on GitHub, then clone your fork locally:
```bash
git clone https://github.com/your-username/phallo.git
cd phallo
```

### 2. Set Up a Branch
Create a new branch off the `main` branch to isolate your changes. Give it a descriptive name:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

### 3. Implement Your Changes
*   Write clean, readable Python and HTML/CSS.
*   Keep your changes focused on resolving the specific issue or implementing the single feature.
*   Verify that the development server runs without syntax errors or warnings:
    ```bash
    python manage.py check
    python manage.py runserver
    ```

### 4. Commit and Push
Write clear, descriptive, and concise commit messages:
```bash
git add .
git commit -m "feat: Add shopping cart UI element to navbar"
git push origin feature/your-feature-name
```

### 5. Submit a Pull Request (PR)
*   Go to the original Phallo repository on GitHub.
*   Click **Compare & pull request**.
*   Write a clear description of what your PR resolves and link any relevant issues.
*   Wait for review and feedback!

---

## 🎨 Coding Standards
*   Follow [PEP 8](https://peps.python.org/pep-0008/) style guidelines for Python code.
*   Maintain clear comments and document models and views appropriately.
*   Ensure custom CSS remains isolated to static sheets rather than inline styling.
