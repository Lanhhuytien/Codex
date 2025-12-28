import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMe } from '../api/auth';

interface Props {
  children: React.ReactElement;
}

export default function AdminRoute({ children }: Props) {
  const [authorized, setAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    fetchMe()
      .then((data) => {
        setAuthorized(data.roles.includes('admin'));
      })
      .catch(() => setAuthorized(false));
  }, []);

  if (authorized === null) {
    return <div>Loading...</div>;
  }

  if (!authorized) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
