# 📌 To-Do-List-BackEnd

A **To-Do List** application built with **NestJS**, featuring **Swagger** for API documentation.

## 🚀 Project Goals

### ✅ User Authentication
- Secure user authentication with login and registration.
- Password hashing using **bcrypt**.
- JWT-based authentication for secure access.

### ✅ Task Management
- Create, edit, delete, and list tasks.
- Mark tasks as **completed**.
- Filter tasks by status (**pending** or **completed**).

---

## 🏗️ **Branching Strategy**

We follow a **Git Flow**-inspired branching model to ensure a well-organized and scalable codebase.

### 📌 **Main Branches**
- **`main`** → Stable and production-ready version.
- **`staging`** → Test environment before deployment.
- **`develop`** → Main branch for continuous development.

### 📌 **Workflow**
#### 🔹 **Feature Branches (New Features)**
- Created from `develop`.
- Default naming: `feature/<feature-name>`.
- Example:  
  - `feature/authentication-jwt`
  - `feature/task-crud`

#### 🔹 **Bugfix Branches (Bug Fixes)**
- Created from `staging` or `develop` (if found in testing).
- Default naming: `bugfix/<bug-name>`.
- Example:
  - `bugfix/fix-login`
  - `bugfix/task-list-error`

#### 🔹 **Hotfix Branches (Critical Fixes in Production)**
- Created from `main` for urgent fixes.
- Default naming: `hotfix/<hotfix-name>`.
- Example:
  - `hotfix/fix-expired-token`
  - `hotfix/fix-500-error`

#### 🔹 **Release Branches (Pre-Release Preparation)**
- Created from `develop` for version stabilization.
- Default naming: `release/vX.X.X`.
- Example:
  - `release/v1.0.0`
  - `release/v1.1.0`

---

## 🔄 **Complete Git Flow**
1️⃣ **Feature Development**
   - Create a `feature/<new-feature>` branch from `develop`.
   - Develop, test, and merge back into `develop`.

2️⃣ **Testing and Release Preparation**
   - When a set of features is ready, create a `release/vX.X.X` branch from `develop`.
   - Test and fix any bugs before merging into `staging`.

3️⃣ **Deploy to Staging**
   - Merge `release/vX.X.X` into `staging`.
   - Test the application in the staging environment.

4️⃣ **Deploy to Production**
   - If everything is stable, merge `release/vX.X.X` into `main`.
   - Deploy the `main` branch to production.

---

## 📖 API Documentation
- This project includes **Swagger** for API documentation.
- Once the server is running, visit:
