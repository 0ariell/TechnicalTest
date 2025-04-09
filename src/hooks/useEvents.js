import axios from "axios";
import { useEffect, useState } from "react";

const useEventById = (id) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `https://eventflairs-apidev.azurewebsites.net/api/Event/Get/${id}`,
          {
            headers: {
              Accept: "text/plain", // Este es el header que Swagger usa
            },
          }
        );

        console.log("Full Response:", res);
        // Verificamos si hay PayLoad
        setEvent(res.data.PayLoad || res.data.payLoad || null);
      } catch (err) {
        console.error("Error fetching event:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchEvent();
  }, [id]);

  return { event, loading, error };
};

export default useEventById;
