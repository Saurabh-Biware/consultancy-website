# Catalyst Matrix Website

A modern, elegant business consultancy website built with Next.js 14 (App Router) and Tailwind CSS.

## Features

- **JSON-Driven Content**: All website content is stored in `data/content.json` for easy editing
- **Modern Design**: Inspired by leading SaaS companies with clean typography and vibrant gradients
- **Fully Responsive**: Optimized for all devices
- **Next.js App Router**: Using the latest Next.js architecture
- **Tailwind CSS**: Utility-first styling with custom gradients

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Editing Content

To update the website content, simply edit the `data/content.json` file. All text, headlines, and descriptions are stored there.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page with all components
│   └── globals.css      # Global styles with Tailwind
├── data/
│   └── content.json     # All website content
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies
```

## Build for Production

```bash
npm run build
npm start
```
