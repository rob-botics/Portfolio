import React, { useEffect, useRef } from 'react';
import { Map, Popup } from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapWidget = ({ restaurant }) => {
  const mapRef = useRef(null);

  const initialView = {
    longitude: -98.35,
    latitude: 39.50,
    zoom: 2.5
  };

  useEffect(() => {
    if (restaurant && mapRef.current) {
      mapRef.current.flyTo({
        center: [restaurant.longitude, restaurant.latitude],
        zoom: 15,
        speed: 1.2,        // optional, how fast it flies
        curve: 1            // optional, smoothness
      });
    }
  }, [restaurant]);

  return (
    <div className='map'>
      <Map
        ref={mapRef}
        initialViewState={initialView}
        style={{ borderRadius: '16px' }}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
      >
        {restaurant && <Popup
          latitude={restaurant?.latitude}
          longitude={restaurant?.longitude}
          closeOnClick={false}
          focusAfterOpen={false}
        >
          <div className='popup-container'>
            <img src={restaurant.img} alt={restaurant.id}/>
            <address>{restaurant.address}</address>
            <a href={restaurant.website} rel="noreferrer" target='_blank'><span>{restaurant.id}</span></a>
          </div>
        </Popup>}
      </Map>
    </div>
  );
};

export default MapWidget;
