import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import finanza from '../assets/img/finanza.png';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../components/Home.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';

function Reports() {
  const [show, setShow] = useState(true);

  const reportList = [
    {
      name: "Reporte de ventas del mes",
      date: "01/04/2024",
      total: "$10,000.000"
    },
    {
      name: "Reporte de gastos generales",
      date: "05/04/2024",
      total: "$5,000.000"
    },
    {
      name: "Reporte de desempeño del equipo",
      date: "11/04/2024",
      total: "$15,000.000"
    },
    {
      name: "Reporte de seguimiento de proyectos",
      date: "15/04/2024",
      total: "$20,000.000"
    },
    {
      name: "Reporte de análisis de datos",
      date: "01/05/2023",
      total: "$8,000.000"
    }
  ];

  return (
    <>
      <div>
        <h2 className='titulo' style={{ textAlign: 'center', scrollMarginBottom: '20px' }}>
          LISTA DE REPORTES
        </h2>
        <Alert show={show} variant="primary" style={{ width: '1200px', height: '150px', transform: 'translate(90px, 110px)', }}>
          <Alert.Heading>¡Recordatorio!</Alert.Heading>
          <p>
            Solo un recordatorio amistoso para informarte que los reportes se realizan cada 15 días.
            Asegúrate de tener todos los datos necesarios para el próximo reporte.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-primary" size="sm">
              Cerrar
            </Button>
          </div>
          {!show && <Button onClick={() => setShow(true)} size="sm">Show Alert</Button>}
        </Alert>
        <div className='reports'>
          <div className="row">
            <div className="col-lg-12">
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nombre del reporte</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Total</th>
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
          <img src={finanza} width="680" height="400" style={{ transform: 'translate(10px, 120px)' }} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Reports;
