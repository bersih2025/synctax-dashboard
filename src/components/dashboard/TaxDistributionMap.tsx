
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const TaxDistributionMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [106.8456, -6.2088], // Jakarta coordinates
      zoom: 11
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Sample data points (you can replace these with real data)
    const points = [
      { lng: 106.8456, lat: -6.2088, size: 20, color: '#FF5733', amount: '2.5M' },
      { lng: 106.8256, lat: -6.1988, size: 15, color: '#33FF57', amount: '1.8M' },
      { lng: 106.8656, lat: -6.2288, size: 25, color: '#3357FF', amount: '3.2M' }
    ];

    // Add markers for each point
    points.forEach(point => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundColor = point.color;
      el.style.width = `${point.size}px`;
      el.style.height = `${point.size}px`;
      el.style.borderRadius = '50%';
      el.style.cursor = 'pointer';

      // Add popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<strong>Pajak: Rp ${point.amount}</strong>`);

      new mapboxgl.Marker(el)
        .setLngLat([point.lng, point.lat])
        .setPopup(popup)
        .addTo(map.current);
    });

    return () => {
      map.current?.remove();
    };
  }, [token]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowTokenInput(false);
  };

  if (showTokenInput) {
    return (
      <Card className="p-4">
        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Please enter your Mapbox public token. You can find this in your Mapbox account dashboard.
            </p>
            <Input
              type="text"
              placeholder="Enter Mapbox public token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={!token}>
            Load Map
          </Button>
        </form>
      </Card>
    );
  }

  return (
    <div className="h-[400px] relative rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <style jsx>{`
        .mapboxgl-marker {
          cursor: pointer;
          transition: transform 0.2s;
        }
        .mapboxgl-marker:hover {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default TaxDistributionMap;
