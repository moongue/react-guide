import React from 'react';
import { useAlert } from './AlertContext';

export default function Alert() {
  const alert = useAlert();

  if (!alert.alert) return null;

  return (
    <div className="danger">
      <h2>Ошибка!</h2>
    </div>
  )
}
