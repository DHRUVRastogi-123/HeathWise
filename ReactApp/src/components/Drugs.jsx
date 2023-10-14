import React from 'react';
import { Link } from 'react-router-dom';

export default function Conditions() {
  return (
    <ul id="drop-list">
      <li>
        <Link to="/diabetes">Diabetes</Link> {/* Link to the "Diabetes" route */}
      </li>
      <li>Lungs</li>
      <li>Kidney</li>
      <li>Brain</li>
      <li>Brain</li>
      <li>Brain</li>
      <li>Brain</li>
      <li>Brain</li>
      <li>Brain</li>
      <li>Brain</li>
      <Link to="/drugsPage"><li>View More</li></Link>
      <li>
        <Link to="/drugs">View More</Link>
      </li>    </ul>
  );
}
