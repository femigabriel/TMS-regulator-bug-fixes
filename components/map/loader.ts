import { Loader } from '@googlemaps/js-api-loader';

export const calculateAndDisplayRoute = async function (directionsService:any, directionsRenderer:any, from?: string, to?: string, through?:string[]) {
   
    let fmtWaypoints = through?.map(waypoint => ({ location: waypoint }));
    // console.log({from, to, fmtWaypoints})
    try {
      const google = window.google; // Fix for ESLint Err google is not defined
      const res = await directionsService.route({
        origin: {
            placeId: from,
        },
        destination: {
            placeId: to,
        },
        waypoints: fmtWaypoints,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: false,
        avoidHighways: false,
        drivingOptions: {
          departureTime: new Date(Date.now()),
          trafficModel: 'pessimistic',
        },
      });
    //   console.log(res);
      directionsRenderer.setDirections(res);
    } catch (e:any) {
      console.log(`Directions request failed 
          Code: ${e.code} 
          Message: ${e.message} `);
    }
  };

  console.log({env: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY})
const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    version: 'weekly',
    libraries: ["places"]
});


export const mapOptions = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 4
};

export default loader;