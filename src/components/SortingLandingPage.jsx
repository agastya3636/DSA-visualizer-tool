import { Link } from 'react-router-dom';
import './LandingPage.css'; // Ensure you have this CSS file

function SortingLandingPage() {
    return (
        <div className="landing-page">
            <Link to="/sorting/selection" className="nav-link-box">
                <h1>Selection Sort</h1>
            </Link>
            <Link to="/sorting/bubble" className="nav-link-box">
                <h1>Bubble Sort</h1>
            </Link>
            <Link to="/sorting/insertion" className="nav-link-box">
                <h1>Insertion Sort</h1>
            </Link>
            <Link to="/selection" className="nav-link-box">
                <h1>Selection Sort</h1>
            </Link>
            <Link to="/bubble" className="nav-link-box">
                <h1>Bubble Sort</h1>
            </Link>
            <Link to="/insertion" className="nav-link-box">
                <h1>Insertion Sort</h1>
            </Link>
        </div>
    );
}

export default SortingLandingPage;
