# Smart Issue Board

A simple issue tracking system built as part of an internship assignment.
The goal was to focus on practical problem-solving rather than over-engineering.

---

## 🚀 Tech Stack

- **Frontend:** React (Vite)
- **Backend / Database:** Firebase Firestore
- **Authentication:** Firebase Auth (Email & Password)
- **Hosting:** Vercel
- **Code Hosting:** GitHub

---

## ✅ Features

- User authentication (Sign up / Login)
- Create issues with:
  - Title, Description
  - Priority (Low / Medium / High)
  - Status (Open / In Progress / Done)
  - Assigned To
  - Created By & Created Time
- Similar issue detection while creating a new issue
- Filter issues by status and priority
- Issues sorted by newest first
- Status validation (Issue cannot move directly from Open to Done)

---

## 🧠 Why React?

React provides a clean component-based structure, easy state management,
and works very well with Firebase. It allowed me to quickly build
a production-ready UI without unnecessary complexity.

---

## 📂 Firestore Data Structure

### Collection: `issues`

```json
{
  "title": "Login button not working",
  "description": "Click does nothing",
  "priority": "High",
  "status": "Open",
  "assignedTo": "admin@gmail.com",
  "createdBy": "user@gmail.com",
  "createdAt": "Firestore Timestamp"
}
