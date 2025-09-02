import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Can reuse or duplicate AuthorDashboard.css for now

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBooks: 21,
    totalUsers: 4,
    totalOrders: 2,
    totalRevenue: 950
  });

  useEffect(() => {
    const fetchAdminStats = async () => {
      try {
        const [productsRes, usersRes, ordersRes] = await Promise.all([
          axios.get('https://bookztron-server.vercel.app/api/home/products'),
          axios.get('https://bookztron-server.vercel.app/api/user/all'),
          axios.get('https://bookztron-server.vercel.app/api/order/all')
        ]);

        const products = productsRes.data.productsList || [];
        const users = usersRes.data.users || [];
        const orders = ordersRes.data.orders || [];

        const totalRevenue = orders.reduce((acc, order) => acc + (order.totalAmount || 0), 0);

        setStats({
          totalBooks: products.length,
          totalUsers: users.length,
          totalOrders: orders.length,
          totalRevenue: totalRevenue
        });

      } catch (error) {
        console.error('Failed to fetch admin stats:', error);
      }
    };

    fetchAdminStats();
  }, []);

  return (
    <div className="author-dashboard-container">
      <h2 className="dashboard-title">Admin Dashboard</h2>
      <div className="author-sales-list">
        <div className="author-item">
          <span className="author-name">Total Books</span>
          <span className="books-sold">{stats.totalBooks}</span>
        </div>
        <div className="author-item">
          <span className="author-name">Total Users</span>
          <span className="books-sold">{stats.totalUsers}</span>
        </div>
        <div className="author-item">
          <span className="author-name">Total Orders</span>
          <span className="books-sold">{stats.totalOrders}</span>
        </div>
        <div className="author-item">
          <span className="author-name">Total Revenue</span>
          <span className="books-sold">₹{stats.totalRevenue}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
