import { useState, useEffect } from "react";
import { API } from "../apis/axios";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;
        
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            setData(null);
            setError(false);

            try {
                const response = await API.get(url);
                if (isMounted) {
                    setData(response.data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.response?.data?.message || "데이터를 불러오는 중 오류 발생");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
