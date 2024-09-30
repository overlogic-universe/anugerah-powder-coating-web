'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

const MapComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const initializeLeaflet = async () => {
      const L = await import('leaflet');

      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });
    };

    // Panggil fungsi untuk inisialisasi leaflet hanya di client-side
    initializeLeaflet();
  }, []);

  if (!isClient) {
    return <p>Loading map...</p>;
  }

  return (
    <MapContainer
      className="rounded-3xl"
      center={[-6.964771050766204, 111.43800955050327]}
      zoom={13}
      style={{ height: '200px', width: '90%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-6.964771050766204, 111.43800955050327]}>
        <Popup>
          <span className="font-bold">Anugerah Powder Coating Blora</span>
          <br />
          <span>
            Dekat Jl. KNPI 17, Kec. Blora, Kabupaten Blora, Jawa Tengah 58219, Kabupaten Blora, Jawa Tengah 58216
          </span>
          <br />
          <br />
          <a href="https://maps.app.goo.gl/PNUJp13UD7F4guy89" target="_blank" rel="noopener noreferrer">
            View Larger Map
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
