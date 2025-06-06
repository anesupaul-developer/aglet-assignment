
# Setup Instructions

1. Git clone
   ```bash
   git clone https://github.com/anesupaul-developer/aglet-assignment
   ```

2. Navigate into the project folder
   ```bash
   cd aglet-assignment
   ```

3. Install PHP dependencies
   ```bash
   composer install
   ```

4. Install JavaScript dependencies
   ```bash
   npm i
   ```

5. Compile frontend assets
   ```bash
   composer run dev
   ```

6. Seed the database
   ```bash
   php artisan db:seed
   ```

7. Download movie data
   ```bash
   php artisan app:download-movie
   ```

8. Autoload classes
   ```bash
   composer dump-autoload
   ```

9. Optimize the application
   ```bash
   php artisan optimize
   ```

10. Navigate to
   ```
   http://localhost:8000
   ```

---

### ✅ Skip the setup?
Visit the live demo: [https://app-demo.africa](https://app-demo.africa)

---

### ⚡ Shortcut Method

1. Make the deploy script executable
   ```bash
   chmod +x deploy.sh
   ```

2. Run the deploy script
   ```bash
   ./deploy.sh
   ```

---

# Project Brief

This assessment involved building a basic movie website that allows users to view movie listings, see details in a modal, and mark movies as favourites. The system supports user authentication, favourites management, and dynamic data rendering.

---

## Key Features

- Movie listing with pagination and search
- Detailed movie modal view with watchlist/favourite toggle
- Favourites stored per authenticated user
- Responsive UI with Tailwind CSS
- Backend API with Laravel
- Frontend with React + Inertia.js for seamless navigation

---

## Rationale & Thinking

My approach prioritized a clean separation between backend logic and frontend presentation while keeping user experience fast and reactive. I began by designing the backend API in Laravel, focusing on proper resource controllers and model relationships. On the frontend, I used React for dynamic UI interactions, enhanced with Inertia.js to simplify routing while still enjoying SPA behavior.

The key idea was to ensure a seamless user journey — e.g., clicking on a movie opens details instantly without full page reloads, and actions like "Add to Favourites" update in real-time.

---

## Technology Choices

- **Laravel (PHP):** Chosen for its expressive syntax, built-in authentication, and clean RESTful structure. It's well-suited for rapid backend development and provides a rich ecosystem (e.g., Eloquent ORM, validation, middleware).

- **React.js + Inertia.js:** Used to make the frontend interactive and stateful without a full SPA setup. Inertia bridges Laravel and React smoothly, allowing server-side routing with client-side rendering — giving the best of both worlds.

- **Tailwind CSS:** Selected for its utility-first approach, which enabled quick and responsive UI prototyping without writing custom CSS.

- **PestPHP:** Chosen for testing due to its elegant syntax and fluency with Laravel, making it easier to write readable and maintainable test cases.
