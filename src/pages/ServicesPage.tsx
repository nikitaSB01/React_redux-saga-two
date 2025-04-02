import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../features/services/servicesSlice";
import { RootState } from "../app/types";
import Loader from "../components/Loader";
import ErrorBlock from "../components/ErrorBlock";
import { Link } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.services
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchServices());
  };

  return (
    <div>
      <h1>Услуги</h1>

      {loading && <Loader />}

      {error && <ErrorBlock message={error} onRetry={handleRetry} />}

      {!loading && !error && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`/${item.id}/details`}>
                {item.name} — {item.price}₽
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServicesPage;
