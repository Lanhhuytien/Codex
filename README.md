# Mobile Store (Laravel 11 + React)

Production-ready e-commerce project for selling mobile phones with Laravel 11 API and React (Vite + TypeScript) frontend.

## Stack
- Backend: Laravel 11 (API-first, Sanctum)
- Frontend: React + Vite + TypeScript
- Database: MySQL (SQL import for phpMyAdmin / XAMPP)
- Server: XAMPP + Apache

## Project Structure
- `backend/` Laravel API source
- `frontend/` React app source
- `database/mobile_store.sql` MySQL schema

## Backend Setup (Laravel 11)
1. Import SQL schema in phpMyAdmin:
   - Open phpMyAdmin (XAMPP) → Import → `database/mobile_store.sql`.
2. Configure `.env` in `backend/`:
   - Copy `.env.example` → `.env`
   - Update DB credentials.
3. Install dependencies and run:
   ```bash
   composer install
   php artisan key:generate
   php artisan storage:link
   php artisan serve --host=0.0.0.0 --port=8000
   ```
4. API base URL for frontend:
   ```
   http://localhost/{project}/backend/public/api
   ```

## Frontend Setup (React)
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Create `.env` in `frontend/`:
   ```
   VITE_API_BASE_URL=http://localhost/{project}/backend/public/api
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

## Auth & Roles
- Auth via Laravel Sanctum.
- Roles: `admin`, `customer`.
- Admin APIs are under `/api/admin/*` and protected by role middleware.

## Internationalization
- Backend: locale via `Accept-Language` (`vi` or `en`).
- Frontend: `react-i18next` with language persisted in `localStorage`.

## Notes
- All calculations and status transitions are handled in the backend.
- Frontend is UI-only; always rely on backend for totals, stock checks, and order states.
