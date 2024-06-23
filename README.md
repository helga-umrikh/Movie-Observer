# Movie Observer

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This document will provide you with an overview of the app and guide you through the process of setting it up and starting it.

**About the App**
My app is an interface for a movies site. It provides users with access to a wide range of movies and its description. The app consists of three pages: page with list of all movies with filters, page with movie details and page with movies that was added to "favorites"

The app is built using React, MobX and utilizes the Material framework, which offers a set of pre-designed UI components and styling options.

# Getting Started

To start using the app, follow the steps below:

1.  **Get the RapidAPI Key:**
    Visit the [Kinopoisk API Documentation](https://api.kinopoisk.dev/documentation#/) and follow instructions to get token for 'X-RapidAPI-Key'.

2.  **Add the Access Key to the .env file:**
    Open the `.env` file in the root of the project and replace `undefined` with the key you obtained from the RapidAPI website.

```cpp
REACT_APP_ACCESS_KEY= undefined
```

## Installation

To install the app and its dependencies, follow the steps below:

1.  **Clone the repository:**
    Start by cloning the repository to your local machine using the following command:
    ```cpp
    git clone https://github.com/helga-umrikh/Movie-Observer
    ```
2.  **Navigate to the project directory:**
    Once the repository is cloned, navigate to the project directory using the following command:
    ```cpp
    cd movie-observer
    ```
3.  **Install dependencies:**
    Before running the app install the package manager npm to install all the dependencies.
    ```cpp
    npm install
    ```

## Starting the App

To start the app, run the following command:

```cpp
npm start
```

This will start the development server and open the app in your default web browser. You should now be able to navigate to the main page and explore movies available on the site.
