import { useState, useEffect } from 'react';
import loader, { calculateAndDisplayRoute } from './loader';



const Map = ({ from, to, through }:DirectionProps) => {
    const [map, setMap] = useState<google.maps.Map>();
    useEffect(() => {
        let latLng = { lat: 0, lng: 0 };
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            latLng.lat = lat;
            latLng.lng = lng;
        });

        loader.load().then(() => {
            const google = window.google; // Fix for ESLint Err google is not defined
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const map = new google.maps.Map(document.getElementById('map') as HTMLDivElement, {
                zoom: 20,
                center: latLng,
                mapTypeControl: false
            });

            directionsRenderer.setMap(map);
            document.getElementById('go')?.addEventListener(
                'click',
                calculateAndDisplayRoute.bind(
                    this,
                    directionsService,
                    directionsRenderer,
                    from,
                    to,
                    through
                )
            );
            document.getElementById('go')?.click();


            //GEOCODER
            // const geocoder = new window.google.maps.Geocoder();
            // geocoder.geocode({ address }, (results, status) => {
            //   if (status === 'OK') {
            //     const mapOptions = {
            //       center: results && results[0].geometry.location,
            //       zoom: 16,
            //     };
            //     const newMap = new window.google.maps.Map(
            //       document.getElementById('map') as HTMLDivElement,
            //       mapOptions
            //     );
            //     const marker = new window.google.maps.Marker({
            //       position: results && results[0].geometry.location,
            //       map: newMap,
            //     });
            //     setMap(newMap);
            //   }
            // });
        
        });
    },[from, to]);

    return (
    <div>
        <div id="map" style={{ height: '400px' }}></div>
    </div>);
  };

  export default Map;