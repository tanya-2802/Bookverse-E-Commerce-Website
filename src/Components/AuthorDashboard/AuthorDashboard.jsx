import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AuthorDashboard.css';

const AuthorDashboard = () => {
  const [authorSales, setAuthorSales] = useState({});

  useEffect(() => {
    const fetchAuthorSales = async () => {
      try {
        const res = await axios.get('https://bookztron-server.vercel.app/api/home/products');
        const products = res.data.productsList;

        const sales = {};

        products.forEach(product => {
          const author = product.author;
          const sold = product.sold || 0;
          if (author) {
            sales[author] = (sales[author] || 0) + sold;
          }
        });

        setAuthorSales(sales);
      } catch (error) {
        console.error('Failed to fetch product data:', error);
      }
    };

    fetchAuthorSales();
  }, []);

  return (
    <div className="author-dashboard">
      <h2>Author Sales Dashboard</h2>
      <div className="author-grid">
        {Object.entries(authorSales).map(([author, sold]) => (
          <div key={author} className="author-card">
            <div className="author-name">{author}</div>
            <div className="author-sales">{sold} book(s) sold</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthorDashboard;
