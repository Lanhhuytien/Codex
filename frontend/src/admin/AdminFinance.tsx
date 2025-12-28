import { useEffect, useState } from 'react';
import { fetchRevenue } from '../api/admin';

export default function AdminFinance() {
  const [period, setPeriod] = useState<'daily' | 'monthly'>('daily');
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    fetchRevenue(period).then(setRows);
  }, [period]);

  return (
    <div>
      <h2>Financial reports</h2>
      <select value={period} onChange={(event) => setPeriod(event.target.value as 'daily' | 'monthly')}>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
      </select>
      <div className="grid">
        {rows.map((row) => (
          <div className="card" key={row.period}>
            <h4>{row.period}</h4>
            <p>Revenue: {row.revenue}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
