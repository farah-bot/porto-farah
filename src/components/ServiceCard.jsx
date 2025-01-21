import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function ServiceCard({ title, imageSrc, iconSrc }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const services = [
    { title: 'Web Design', imageSrc: 'web-design.jpg' },
    { title: 'Mobile App Development', imageSrc: 'mobile-app.jpg' },
    { title: 'SEO Optimization', imageSrc: 'seo.jpg' },
    { title: 'Graphic Design', imageSrc: 'graphic-design.jpg' },
    { title: 'Cloud Hosting', imageSrc: 'cloud-hosting.jpg' },
    { title: 'Digital Marketing', imageSrc: 'digital-marketing.jpg' }
  ];


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = services.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="service-card-container">
        {currentItems.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-content">
              <div className="service-card-img-container">
                <img
                  loading="lazy"
                  src={service.imageSrc}
                  alt={`${service.title} service background`}
                  className="object-cover w-full h-[200px]"
                />
                <div className="service-card-details p-4">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">
                    lorem ipsum blalalalalalaalalalala
                  </p>
                  <Link to="/projects" className="button-link mt-4 inline-block text-white bg-green-600 px-5 py-2 rounded-md hover:bg-green-700">
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="circle-button z-100">
              <i className="fas fa-plus button-icon"></i>
            </div> */}
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(services.length / itemsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
