import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRestaurantApi = (latitude, longitude) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const lat = 'lat='.concat(latitude);
    const lng = 'lng='.concat(longitude);
    
    const baseURL = 'http://localhost:8000/api/';
    let restAPI = baseURL.concat(lat + '&' + lng + '/?format=json');
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const result = await axios(restAPI);

                setData(result.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [restAPI]);
    return [{ data, isLoading, isError }];
}
