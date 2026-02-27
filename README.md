# Shivaji Gandham - Personal Portfolio 🚀

A high-performance, security-focused portfolio website designed for System Administrators, Security Researchers, and Cryptography experts.

## 📁 Project Structure
- `index.html`: Main content and structure.
- `style.css`: Modern dark-mode styling with terminal aesthetics.
- `script.js`: Interactive typing effects and UI enhancements.

---

## 🚀 How to Host on GitHub Pages (Free)

1.  **Initialize Git:**
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Portfolio launch"
    ```
2.  **Create a Repository:** Go to [GitHub](https://github.com/new) and create a public repository named `portfolio`.
3.  **Push your code:**
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git branch -M main
    git push -u origin main
    ```
4.  **Enable GitHub Pages:**
    - Go to your repo **Settings** > **Pages**.
    - Under **Branch**, select `main` and `/ (root)`.
    - Click **Save**. Your site will be live at `https://YOUR_USERNAME.github.io/portfolio/`.

---

## ☁️ How to Host on AWS (S3 + CloudFront)

For professional-grade hosting with global CDN and SSL:

### 1. Create S3 Bucket
- Create a bucket (e.g., `shivaji-portfolio`).
- Uncheck "Block all public access".
- Upload these files (`index.html`, `style.css`, `script.js`).
- Under **Properties**, enable **Static website hosting**.

### 2. Set Up CloudFront (CDN)
- Create a CloudFront distribution.
- Set **Origin domain** to your S3 bucket endpoint.
- Under **Default cache behavior**, select **Redirect HTTP to HTTPS**.
- Request an SSL certificate via AWS Certificate Manager (ACM) for your domain.

### 3. CI/CD with GitHub Actions (Optional)
Create `.github/workflows/deploy.yml` to auto-deploy to AWS on every push:

```yaml
name: Deploy to S3
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to S3
        run: aws s3 sync . s3://YOUR-BUCKET-NAME --exclude ".git/*" --exclude ".github/*"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'us-east-1'
```

---

## 🛠 Features
- **Dark Mode Terminal Aesthetic:** Signals technical depth.
- **Responsive Design:** Works on all devices.
- **Monospace Fonts:** High readability for code and technical details.
- **Optimized Performance:** Built with vanilla JS/CSS for near-instant loading.
- **A+ Security Focused:** Designed with best practices in mind.

---
Created with 💚 for Shivaji Gandham.
# portfolio
