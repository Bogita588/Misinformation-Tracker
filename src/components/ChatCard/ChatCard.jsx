// src/components/ChartCard/ChartCard.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import data from '../../data/kenya_fake_news_data_2025.json';
import styles from './ChatCard.module.css';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#0088FE'];

export default function ChartCard({ type, title }) {
  let chartContent = null;

  if (type === 'line') {
    // Line Chart: count posts per day
    const dateCounts = {};
    data.forEach(item => {
      const date = new Date(item.date).toLocaleDateString();
      dateCounts[date] = (dateCounts[date] || 0) + 1;
    });

    const chartData = Object.entries(dateCounts).map(([date, count]) => ({
      date, count
    }));

    chartContent = (
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    );
  } else if (type === 'pie') {
    // Pie Chart: category distribution
    const categoryCount = {};
    data.forEach(item => {
      categoryCount[item.category] = (categoryCount[item.category] || 0) + 1;
    });

    const chartData = Object.entries(categoryCount).map(([name, value]) => ({
      name, value
    }));

    chartContent = (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            outerRadius={90}
            label
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {chartContent}
    </div>
  );
}
