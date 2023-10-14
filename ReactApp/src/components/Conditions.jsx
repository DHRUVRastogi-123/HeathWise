import React from 'react';
import { Link } from 'react-router-dom';

function Conditions() {
  return (
    <ul id="drop-list">
      <li>
        <Link to="/diabetes">Diabetes</Link> {/* Link to the "Diabetes" route */}
      </li>
      <li>Influenza (flu)</li>
      <li>COVID-19</li>
      <li>Pneumonia</li>
      <li>Diabetes</li>
      <li>Hypertension</li>
      <li>Asthama</li>
      <li>Migraine</li>
      <li>Rheumatoid Arthritis</li>
      <li>Osteoporosis</li>
      <li>Vitiligo</li>
    </ul>
  );
}
export default Conditions;