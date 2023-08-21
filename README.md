# Store App

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Welcome to the Store App project! This project provides a web application for browsing and searching through a collection of products from various companies consuming Store API from [Node Course](https://www.udemy.com/course/nodejs-tutorial-and-projects-course/learn/lecture/27096960)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Store App allows users to explore a wide range of products, filter and sort them, and perform searches based on various criteria. The application offers an intuitive user interface for an enhanced shopping experience.

## Features

- Browse and search for products from different companies.
- Filter products based on name, company, price, and rating.
- Sort products by different criteria such as name, price, and rating.

## Installation

1. Clone the repository.
2. Navigate to the project's root directory.
3. Run `npm install` to install the required dependencies.

## Usage

1. Start the development server by running `npm run dev`.
2. Open your web browser and navigate to `http://localhost:5173` to access the application.
3. Use the provided filters, sorting options, and search functionality to explore the products.
4. REMEMBER to change your API URL in file config.ts to point your API endpoint like
```
export const STORE_API_URL: string = "http://127.0.0.1:3000/api/v1/products";
```
5. You have to add cors to your api to allow request from the Front End:
```
npm i cors
// In your server file import/require cors
app.use(
  cors({
    origin: ["http://127.0.0.1:3000"], // or "*" if you want to allow request from all sources
  })
);
```

## API

The Store App uses the following APIs and modules:

- `useProducts`: A custom hook that fetches and manages product data.
- `useCompanies`: A hook that retrieves a list of companies for filtering.
- `useFilter`: A hook to update URL filters based on user interactions.
- `useProductsData`: A hook to fetch additional data for filters and range sliders.
- `getProducts`: A service function to fetch products from the API.

Refer to the source code for more detailed documentation of these components.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Query: A data-fetching library for managing remote data.
- React Router: A library for routing and navigation in React applications.
- Axios: A promise-based HTTP client for making API requests.
- Lodash: A utility library for working with arrays, objects, and more.

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Create a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
