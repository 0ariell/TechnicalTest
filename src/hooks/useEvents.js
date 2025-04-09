import axios from "axios";
import { useEffect, useState } from "react";

const useEventById = (id) => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Fetching
    const fetchEvent = async () => {
      try {
        const res = await axios.get(
          `https://eventflairs-apidev.azurewebsites.net/api/Event/Get/${id}`,
          {
            //Header de Swagger (think)
            headers: {
              Accept: "text/plain",
            },
          }
        );

        console.log("Full Response:", res);
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

//Props usables

  return { event, loading, error };
};

export default useEventById;
