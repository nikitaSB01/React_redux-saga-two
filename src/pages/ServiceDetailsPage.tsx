import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchServiceDetails } from "../features/services/detailsSlice";
import { RootState } from "../app/types";
import Loader from "../components/Loader";
import ErrorBlock from "../components/ErrorBlock";
import type { AppDispatch } from "../app/store"; // путь может отличаться

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { item, loading, error } = useSelector(
    (state: RootState) => state.details
  );

  useEffect(() => {
    if (id) dispatch(fetchServiceDetails(+id));
  }, [dispatch, id]);

  const handleRetry = () => {
    if (id) dispatch(fetchServiceDetails(+id));
  };

  if (loading) return <Loader />;
  if (error) return <ErrorBlock message={error} onRetry={handleRetry} />;

  if (!item)
    return <ErrorBlock message="Услуга не найдена" onRetry={handleRetry} />;

  return (
    <div>
      <h2>{item.name}</h2>
      <p>
        <strong>Цена:</strong> {item.price}
      </p>
      <p>
        <strong>Описание:</strong> {item.content}
      </p>
    </div>
  );
};

export default ServiceDetailsPage;
