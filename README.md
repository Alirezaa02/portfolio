# Alireza Saeb — Portfolio

Personal portfolio website built as a full-stack application, showcasing experience, projects, skills, and education.

**Live site:** [alirezasaeb.com](https://www.alirezasaeb.com)

---

## Tech Stack

**Frontend**
- React 19 + Vite
- React Router v7 (client-side routing)
- Framer Motion (animations, page transitions, scroll reveals)
- Tailwind CSS + custom CSS variables
- EmailJS (contact form)

**Backend**
- FastAPI (Python)
- SQLAlchemy + SQLite
- JWT authentication (python-jose + passlib/bcrypt)
- Deployed on Render

**Deployment**
- Frontend → Vercel
- Backend → Render

---

## Features

- Animated loading screen with letter-by-letter reveal
- Page transitions and scroll-triggered animations
- Projects section gated behind login/signup
- Contact form with email delivery via EmailJS
- Admin dashboard to manage projects, experience, and skills
- JWT-based authentication
- Custom 404 page
- Scroll progress bar + back to top button
- Google Analytics (GA4)
- Fully responsive (mobile hamburger menu)
- SEO meta tags + Open Graph

---

## Project Structure

```
├── src/
│   ├── assets/          # Images, icons, CV PDF
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, About, Skills, Experience preview
│   │   └── ui/          # Reveal, LoadingScreen, PageTransition, BackToTop, ScrollProgress
│   ├── context/         # AuthContext (JWT token management)
│   ├── data/            # Static data (projects, experience, skills, education)
│   ├── lib/             # api.js, keepAlive.js
│   ├── pages/           # All route pages
│   └── styles/          # CSS per component
├── backend/
│   ├── routers/         # auth, projects, experience, skills, users
│   ├── main.py          # FastAPI app + CORS
│   ├── models.py        # SQLAlchemy models
│   ├── schemas.py       # Pydantic schemas
│   ├── auth.py          # JWT + password hashing
│   └── database.py      # SQLite connection
└── public/              # Favicon, OG image, project screenshots
```

---

## Running Locally

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
pip3 install -r requirements.txt
python3 -m uvicorn main:app --reload --port 8000
```

Create a `.env` file in the project root:

```
VITE_API_URL=http://localhost:8000
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Then visit `/admin` to manage content.

---

## Deployment

| Service | Purpose |
|---------|---------|
| Vercel | Frontend — auto-deploys on push to `main` |
| Render | Backend API — free tier (spins down after inactivity) |

Set these environment variables in Vercel:
- `VITE_API_URL`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

---

## Contact

**Alireza Saeb** — [saebalireza02@gmail.com](mailto:saebalireza02@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/alireza-saeb/) · [GitHub](https://github.com/Alirezaa02)
