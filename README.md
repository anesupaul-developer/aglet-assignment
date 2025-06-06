
# Setup Instructions

1. Git clone
   ```bash
   git clone https://github.com/anesupaul-developer/aglet-assignment
   ```

2. Navigate into the project folder
   ```bash
   cd aglet-assignment
   ```

3. Laravel Configuration
   ```bash
   cp .env.example .env
   set database credentials, set api keys at the bottom of the file TMDB_MOVIE_ACCESS_TOKEN= TMDB_MOVIE_API_KEY, set APP_URL
   php artisan key:generate
   ```

4. Install PHP dependencies
   ```bash
   composer install
   ```

5. Install JavaScript dependencies
   ```bash
   npm i
   ```

6. Compile frontend assets
   ```bash
   composer run dev
   ```

7. Seed the database
   ```bash
   php artisan db:seed
   ```

8. Download movie data
   ```bash
   php artisan app:download-movie
   ```

9. Autoload classes
   ```bash
   composer dump-autoload
   ```

10. Optimize the application
   ```bash
   php artisan optimize
   ```

11. Navigate to
   ```
   http://localhost:8000
   ```

---

### ✅ Skip the setup?
Visit the live demo: [https://app-demo.africa](https://app-demo.africa)

---

# Project Brief

This assessment involved building a basic movie website that allows users to view movie listings, see details in a modal, and mark movies as favourites. The system supports user authentication, favourites management, and dynamic data rendering.

---

## Key Features

- Movie listing with pagination and search
- Detailed movie modal view with favourite toggle
- Favourites stored per default user
- Responsive UI with Tailwind CSS
- Backend API with Laravel
- Frontend with React + Inertia.js for seamless navigation

---

## Rationale & Thinking

My approach prioritized a clean separation between backend logic and frontend presentation while keeping user experience fast and reactive. I began by designing the frontend in React for dynamic UI interactions, enhanced with Inertia.js to simplify routing while still enjoying SPA behavior.
Although I am also good in Vue and Angular, I noticed Aglet uses React so project was destined for React :-)

The key idea was to ensure a seamless user journey — e.g., clicking on a movie opens details instantly without full page reloads, and actions like "Add to Favourites" update in real-time.

Since its a basic app I did not go haywire on microservice architecture or queuing when fetching movie records, however I went with the inversion if control as demonstrated by the TmdbAdapter so in the future another movie source can be added to our website easily without re writing the entire logic.

---

## Technology Choices

- **Laravel (PHP):** Chosen for its expressive syntax, built-in authentication, and clean RESTful structure. It's well-suited for rapid backend development and provides a rich ecosystem (e.g., Eloquent ORM, validation, middleware, inversion of control) plus I am highly efficient in Laravel.

- **React.js + Inertia.js:** Used to make the frontend interactive and stateful without a full SPA setup. Inertia bridges Laravel and React smoothly, allowing server-side routing with client-side rendering — giving the best of both worlds.

- **Tailwind CSS:** Selected for its utility-first approach, which enabled quick and responsive UI prototyping without writing custom CSS.

- **PestPHP:** Chosen for testing due to its elegant syntax and fluency with Laravel, making it easier to write readable and maintainable test cases. However I did not manage to write full tests as I encountered a pest bug in laravel 12.
