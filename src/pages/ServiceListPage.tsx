import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServices } from "../features/services/servicesSlice";
import { AppDispatch } from "../app/store";
import { RootState } from "../app/types";

import Loader from "../components/Loader";
import ErrorBlock from "../components/ErrorBlock";
import type { Service } from "../features/services/types";

const ServiceListPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.services
  );

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleRetry = () => {
    dispatch(fetchServices());
  };

  if (loading) return <Loader />;
  if (error) return <ErrorBlock message={error} onRetry={handleRetry} />;

  return (
    <ul>
      {items.map((service: Service) => (
        <li key={service.id}>
          <Link to={`/${service.id}/details`}>{service.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ServiceListPage;
