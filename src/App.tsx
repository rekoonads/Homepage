import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';

import { useUser } from '@clerk/clerk-react';
import Home from './pages/Home';

function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const { user, isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (isLoaded && isSignedIn && pathname === '/') {
      window.location.replace('/dashboard');
    }
  }, [isLoaded, isSignedIn, pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
