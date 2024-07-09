"use client";
import React from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const dataPie = {
  labels: ["Departamentos", "Edificios", "Casas de campo"],
  datasets: [
    {
      data: [79, 20, 1],
      backgroundColor: ["#6366F1", "#F472B6", "#FBBF24"],
    },
  ],
};

const dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Tráfico Mensual",
      data: [75, 75, 75, 50, 25, 10, 50, 75, 50, 25, 10, 100],
      backgroundColor: "#6366F1",
    },
  ],
};

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Pie Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">Visitas Propiedades</h2>
            <Pie data={dataPie} />
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-4 rounded-lg shadow-md col-span-2">
            <h2 className="text-xl font-bold mb-2">Tráfico Mensual</h2>
            <Bar
              data={dataBar}
              options={{ scales: { y: { beginAtZero: true } } }}
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h2 className="text-xl font-bold mb-2">Usuarios</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2">Nombre</th>
                <th className="py-2">País</th>
                <th className="py-2">Progreso</th>
                <th className="py-2">Último Acceso</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src="https://via.placeholder.com/150"
                    alt="Yiorgos Avraamu"
                  />
                  Yiorgos Avraamu
                </td>
                <td className="py-2">🇺🇸</td>
                <td className="py-2">50%</td>
                <td className="py-2">10 sec ago</td>
              </tr>
              <tr>
                <td className="py-2 flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src="https://via.placeholder.com/150"
                    alt="Avram Tarasios"
                  />
                  Avram Tarasios
                </td>
                <td className="py-2">🇧🇷</td>
                <td className="py-2">10%</td>
                <td className="py-2">5 minutes ago</td>
              </tr>
              <tr>
                <td className="py-2 flex items-center">
                  <img
                    className="h-8 w-8 rounded-full mr-2"
                    src="https://via.placeholder.com/150"
                    alt="Quintin Ed"
                  />
                  Quintin Ed
                </td>
                <td className="py-2">🇮🇳</td>
                <td className="py-2">74%</td>
                <td className="py-2">1 hour ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
