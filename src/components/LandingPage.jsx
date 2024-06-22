import { Link } from 'react-router-dom';
import './LandingPage.css'; // Ensure you have this CSS file

function LandingPage() {
    return (
        <div className="landing-page">
            <Link to="/sorting" className="nav-link-box">
                <h1>Sorting</h1>
            </Link>
            <Link to="/searching" className="nav-link-box">
                <h1>Searching</h1>
            </Link>
            <Link to="/pathfinding" className="nav-link-box">
                <h1>Pathfinding</h1>
            </Link>

        </div>
    );
}

export default LandingPage;
