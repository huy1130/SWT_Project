name: CI/CD Pipeline

on:
  push:
    branches:
      - main  # Chạy khi có code push lên nhánh main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  deploy:
    needs: test  # Chạy deploy sau khi test thành công
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Deploy application
        run: |
          echo "Deploying application..."
          # Lệnh deploy tùy vào ứng dụng của bạn, ví dụ:
          # ssh user@server 'cd /app && git pull && npm install && pm2 restart app'
  
