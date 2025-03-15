# To-Do-List-BackEnd
Development  To-do list application
NestJs with Swagger for API.

# Project Goals
- User Authentication:
Login screen and registration of new users using secure authentication.
- Task Management: 
Create, edit, delete and list tasks.
Mark tasks as completed.
Filter tasks by status (pending, completed).


# Branch Pattern for your Project
Main Structure
main → Stable and production-ready version.
staging → Test environment before going to production.
develop → Main branch for continuous development.
Workflow
🔹 Feature Branches (New Features)
Created from the develop branch.
Default name: feature/feature-name
🔹 Bugfix Branches (Bug Fixes)
Created from staging or development (if it is a bug found in the testing environment). Default name: bugfix/bug-name
Example:
bugfix/fix-login
bugfix/error-in-task-listing
🔹 Hotfix Branches (Critical Fixes in Production)
Created from main to fix an urgent bug without waiting for a new release.
Default name: hotfix/hotfix-name
🔹 Release Branches (Preparation for Deployment)
Created from development, stabilized the version before going to main.
Default name: release/vX.X.X
  Complete Flow
 - Feature Development

Create a feature/new-feature branch from development.
Develop, test, and merge into the development branch.
- Testing and Release Preparation

When a set of features is ready, create a release/vX.X.X branch from development.
Test and fix any bugs before merging into staging.
- Deploy to Staging

Merge release/vX.X.X into the staging branch.
Test the application in staging.
- Deploy to Production
