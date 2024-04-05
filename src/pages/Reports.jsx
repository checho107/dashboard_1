import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import reporte from '../assets/img/reporte.png';

function Reports() {
  const reportList = [
    {
      name: "Reporte de ventas del mes",
      date: "01/01/2023",
      total: "$10,000"
    },
    {
      name: "Reporte de gastos generales",
      date: "01/02/2023",
      total: "$5,000"
    },
    {
      name: "Reporte de desempeño del equipo",
      date: "01/03/2023",
      total: "$15,000"
    },
    {
      name: "Reporte de seguimiento de proyectos",
      date: "01/04/2023",
      total: "$20,000"
    },
    {
      name: "Reporte de análisis de datos",
      date: "01/05/2023",
      total: "$8,000"
    }
  ];

  return (
    <div>
    <br></br>
    <img className='foto_reporte' src={reporte} />
    <h1 className='titulo text-success'>LISTA DE REPORTES</h1>
    <div className='reports'>
      <table className="table table-sm table-bordered table-striped">
        <thead className="thead-dark">
          <tr className="bg-success">
            <th>Nombre del reporte</th>
            <th>Fecha</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {reportList.map((report, index) => (
            <tr key={index}>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>{report.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  
  );
}

export default Reports;
