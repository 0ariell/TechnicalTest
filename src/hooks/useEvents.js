import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://eventflairs-apidev.azurewebsites.net/api/EventService";

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const FetchEvents = async () => {
      try {
        const res = await axios.get(`${API_URL}/GetAll`);
        setEvents(res.data.PayLoad || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    FetchEvents();
  }, []);

  return { events, loading, error };
};

export default useEvents;
