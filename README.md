:root {
  --bg: #0a1020;
  --bg-soft: #101a2c;
  --card: rgba(17, 24, 39, 0.72);
  --card-alt: #f4f7fb;
  --primary: #7c5cff;
  --primary-2: #45d0ff;
  --text: #e5ecff;
  --muted: #aabdcc;
  --dark: #0f172a;
  --line: rgba(255, 255, 255, 0.08);
  --success: #1ec98a;
  --shadow: 0 22px 56px rgba(12, 18, 40, 0.32);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #0a1020 0%, #101827 100%);
  color: var(--text);
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.header {
  position: sticky;
  top: 0;
  z-index: 200;
  backdrop-filter: blur(14px);
  background: rgba(10, 16, 32, 0.72);
  border-bottom: 1px solid var(--line);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
}

.brand {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.08em;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.nav-links a {
  color: var(--text);
  opacity: 0.8;
  transition: opacity 0.2s ease;
}

.nav-links a:hover {
  opacity: 1;
}

.nav-button {
  padding: 10px 16px;
  background: rgba(124, 92, 255, 0.12);
  border: 1px solid rgba(124, 92, 255, 0.25);
  border-radius: 999px;
}

.hero {
  padding: 72px 0 52px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.74rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--primary-2);
  margin-bottom: 18px;
}

.eyebrow.dark {
  color: #5b6df5;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.8rem, 4vw, 5rem);
  line-height: 0.95;
  letter-spacing: -0.07em;
  margin-bottom: 22px;
}

.hero p,
.feature-card p,
.service-item p,
.project-card p,
.contact-section p {
  color: var(--muted);
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 30px 0 34px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 14px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), #9d7bff);
  color: #fff;
  box-shadow: 0 18px 35px rgba(124, 92, 255, 0.38);
}

.secondary-btn {
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.full-width {
  width: 100%;
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.hero-stats div {
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.hero-stats strong {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.85rem;
}

.hero-card {
  padding: 26px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: radial-gradient(circle at top, rgba(124, 92, 255, 0.24), rgba(16, 24, 39, 0.8));
  box-shadow: var(--shadow);
}

.mini-label {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #d3dcff;
  margin-bottom: 18px;
}

.chart {
  display: flex;
  align-items: end;
  gap: 12px;
  height: 170px;
  margin: 26px 0 18px;
  padding: 20px 8px 8px;
  background: rgba(15, 23, 42, 0.6);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.bar {
  flex: 1;
  border-radius: 12px 12px 0 0;
  background: linear-gradient(180deg, var(--primary-2), var(--primary));
}

.bar-1 { height: 40%; }
.bar-2 { height: 58%; }
.bar-3 { height: 76%; }
.bar-4 { height: 92%; }
.bar-5 { height: 68%; }

.metric-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.metric-row:last-child {
  border-bottom: none;
}

.section {
  padding: 92px 0;
}

.section-light {
  background: #f5f7fb;
  color: var(--dark);
}

.section-light .feature-card,
.section-light .project-card {
  background: #fff;
  color: var(--dark);
}

.section-heading {
  max-width: 720px;
  margin-bottom: 38px;
}

.section-heading h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
  margin-bottom: 0;
}

.left {
  margin-left: 0;
}

.feature-grid,
.services-grid,
.project-grid {
  display: grid;
  gap: 22px;
}

.feature-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.service-item,
.project-card {
  border-radius: 24px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  padding: 28px 24px;
}

.feature-card .icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-size: 1.6rem;
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.12), rgba(69, 208, 255, 0.1));
  margin-bottom: 18px;
}

.services-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.service-item {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--line);
}

.service-item span {
  display: inline-block;
  font-weight: 700;
  color: var(--primary-2);
  margin-bottom: 14px;
}

.project-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.project-tag {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(124, 92, 255, 0.1);
  color: #5d4ddd;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: center;
}

.contact-form {
  padding: 28px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
}

.contact-form label {
  display: block;
  font-size: 0.92rem;
  color: var(--muted);
  margin-bottom: 18px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-top: 8px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  padding: 14px 16px;
  font: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: 2px solid rgba(124, 92, 255, 0.45);
  border-color: transparent;
}

.success-box {
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: 14px;
  background: rgba(30, 201, 138, 0.1);
  border: 1px solid rgba(30, 201, 138, 0.25);
  color: #8ef0c0;
}

.footer {
  border-top: 1px solid var(--line);
  padding: 20px 0 32px;
}

.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 18px;
  color: var(--muted);
}

.messages-page {
  min-height: 100vh;
}

.messages-wrap {
  padding: 64px 0 100px;
}

.table-wrap {
  overflow: auto;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 22px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 18px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  vertical-align: top;
}

th {
  color: #d7def6;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

tbody tr:hover {
  background: rgba(124, 92, 255, 0.04);
}

.empty-state {
  padding: 32px;
  color: var(--muted);
}

@media (max-width: 840px) {
  .hero-grid,
  .contact-grid,
  .feature-grid,
  .services-grid,
  .project-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .footer-row {
    flex-direction: column;
  }
}
