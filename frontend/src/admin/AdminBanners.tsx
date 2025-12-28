import { useEffect, useState } from 'react';
import { apiClient } from '../api/client';

export default function AdminBanners() {
  const [banners, setBanners] = useState<any[]>([]);

  useEffect(() => {
    apiClient.get('/banners').then((response) => setBanners(response.data));
  }, []);

  return (
    <div>
      <h2>Banners</h2>
      <div className="grid">
        {banners.map((banner) => (
          <div className="card" key={banner.id}>
            <h4>{banner.translations?.[0]?.title}</h4>
            <p>{banner.translations?.[0]?.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
