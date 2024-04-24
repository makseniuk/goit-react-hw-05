import { Link, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>404 - Not Found Page</h1>
      <p>Go back <Link to="/">Home Page</Link>.</p>
      <button onClick={handleGoHome}>Go back to home page</button>
    </div>
  );
};

export default NotFoundPage;