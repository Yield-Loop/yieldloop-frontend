
## 🌀 YieldLoop Frontend

This is the frontend codebase for YieldLoop— a decentralized yield protocol. This repo is actively in development.

---

### 🚧 Project Status

* **Figma Design:** [View on Figma](https://www.figma.com/proto/dmfaKbC9of6ZzLuc8augBG/YieldLoop?page-id=0%3A1&node-id=65-33&viewport=262%2C-74%2C0.71&t=LMZ9lV11IR39F4iC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=65%3A33)

* **Frontend Framework:** Next.js 15 + React 19 + TypeScript + Tailwind CSS v4
* **Branch Strategy:** All active development happens on the `staging` branch.

---

### 🛠️ Getting Started

```bash
git clone https://github.com/Yield-Loop/yieldloop-frontend.git
cd yieldloop-frontend
git checkout staging
npm install
npm run dev
```

---

### 🔁 Contribution Workflow

#### 1. **Create Your Branch from `staging`**

```bash
git checkout staging
git pull origin staging
git checkout -b feat/your-feature-name
```

#### 2. **Do Your Work Locally**

* Follow the design on Figma.
* Make sure your section/component is responsive.
* Keep code clean and commit often.

#### 3. **Push to GitHub**

```bash
git add .
git commit -m "feat: added [your feature]"
git push origin feat/your-feature-name
```

#### 4. **Open a Pull Request**

* Go to GitHub → Pull Requests → New
* **Base branch:** `staging`
* **Compare branch:** `feat/your-feature-name`
* Add description .
* **Tag `@Kanasjnr` for review.**

#### 5. **Merge to `main`**

* Once approved, `@kanasjnr` will handle merging to `main` for production/stable updates.

---

### 📁 Folder Structure

```
/src
  /app          # Next.js App Router pages
  /components   # Reusable React components
  /assets       # Static assets (images, icons, etc.)
  /hooks        # Custom React hooks
  /utils        # Utility functions
```

---

### 📬 Contact

For questions or support, please reach out to Kanas_01 on Telegram.


