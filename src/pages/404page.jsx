import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/404page.css';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="nf-main">
        <p className="nf-label">PAGE NOT FOUND</p>
        <div className="nf-number" aria-hidden="true">404</div>
        <h1 className="nf-heading">This page does not exist.</h1>
        <p className="nf-body">
          The page you are looking for may have been moved or removed.<br />
          Let us take you back.
        </p>
        <Link to="/" className="nf-btn btn btn--primary">
          BACK TO HOME <span className="nf-arrow">→</span>
        </Link>
      </main>
    </>
  );
}
