import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Default icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Map updater for changing center & zoom
function MapUpdater({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const BangladeshMap = ({ coverageData }) => {
  // Load saved search, center, zoom from localStorage
  const [search, setSearch] = useState(
    () => localStorage.getItem("search") || ""
  );
  const [mapCenter, setMapCenter] = useState(() => {
    const saved = localStorage.getItem("mapCenter");
    return saved ? JSON.parse(saved) : [23.685, 90.3563];
  });
  const [mapZoom, setMapZoom] = useState(() => {
    const saved = localStorage.getItem("mapZoom");
    return saved ? JSON.parse(saved) : 7;
  });

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("search", search);
    localStorage.setItem("mapCenter", JSON.stringify(mapCenter));
    localStorage.setItem("mapZoom", mapZoom);
  }, [search, mapCenter, mapZoom]);

  const handleSearch = () => {
    const district = coverageData.find(
      (d) => d.district.toLowerCase() === search.toLowerCase()
    );
    if (district) {
      const center = [district.latitude, district.longitude];
      setMapCenter(center);
      setMapZoom(12);
    } else {
      alert("District not found!");
    }
  };

  return (
    <div className="relative h-[175] w-full px-10">
      {/* Search Box */}
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-50 bg-white p-3 rounded-md shadow-md flex space-x-2">
        <input
          type="text"
          placeholder="Search district..."
          className="border px-3 py-1 rounded-md w-64"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-1 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Map */}
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        scrollWheelZoom={true}
        className="h-full w-full rounded-2xl z-0 shadow-lg"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapUpdater center={mapCenter} zoom={mapZoom} />

        {coverageData.map((district, idx) => (
          <Marker
            key={idx}
            position={[district.latitude, district.longitude]}
          >
            <Popup>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">{district.district}</h3>
                <p><strong>Region:</strong> {district.region}</p>
                <p><strong>City:</strong> {district.city}</p>
                <p>
                  <strong>Covered Areas:</strong>{" "}
                  {district.covered_area.join(", ")}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
