# Geek Up Dashboard

## Table of Contents

* [1. Introduction](#1-introduction)
* [2. Implementation Planning](#2-implementation-planning)
* [3. Tech Stack](#3-tech-stack)
* [4. Environment Variables](#4-environment-variables)
* [5. Getting Started](#5-getting-started)

## 1. Introduction

A technical assessment project for Geek Up. This project demonstrates a frontend dashboard implementation using modern web technologies such as React, TypeScript, and more.

## 2. Implementation Planning

### Project Structure

* `components/` – Custom and reusable UI components.
* `config/` – Application configuration settings.
* `pages/` – Main page components.
* `types/` – Centralized TypeScript types (e.g., `User`, `Album`, `Photo`).
* `service/` – API service layer for external calls.

## 3. Tech Stack

* **React.js** – UI library for building interactive interfaces.
* **TypeScript** – Static typing for JavaScript.
* **Ant Design (Antd)** – UI component library.
* **TanStack Query** – Data fetching and caching (formerly React Query).
* **React Router v7** – Declarative routing.
* **Vercel** – Deployment platform for frontend apps.

## 4. Environment Variables

To run this project locally, create a `.env.local` file in the root directory and add the following environment variable:

```env
VITE_API_URL="https://jsonplaceholder.typicode.com"
```

## 5. Getting Started

### Prerequisites

Ensure you have the following installed:

* **Node.js** (v16+ recommended)
* **npm** (v8+)

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Access the app at `http://localhost:5173` (or as specified in the terminal).

### Build for Production

```bash
npm run build
```

The output will be located in the `dist/` folder and can be deployed to any static hosting service.
