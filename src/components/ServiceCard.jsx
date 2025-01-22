import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Home.css';

const ServiceCard = ({ title, imageSrc }) => (
  <div className="service-card">
    <div className="service-info">
      <h3 className="service-card-title">{title}</h3>
      <hr className="service-divider" />
    </div>
    <img src={imageSrc} alt={`${title} illustration`} className="service-image" />
  </div>
);

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default ServiceCard;
