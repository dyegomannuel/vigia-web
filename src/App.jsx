import { useState } from 'react';
import TopTabs from './components/TopTabs.jsx';
import Modal from './modal.jsx';
import MapComponent from './components/MapComponent.jsx'; // Importa o novo componente de mapa
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('monitoramento');
  const [mapView, setMapView] = useState('satellite');
  const [selectedAlert, setSelectedAlert] = useState(null);

  const [notification, setNotification] = useState({ show: false, message: '' });

  // NOVO: Estado para controlar a navegação do mapa
  const [flyToPosition, setFlyToPosition] = useState(null);

  const alerts = [
    // Adicionei coordenadas para que os marcadores possam aparecer no mapa
    { id: 1, tipo: 'Lixo acumulado', local: 'Asa Norte, Quadra 312 – Brasília/DF', hora: '14:23', prioridade: 'alta', destino: 'SLU', camera: 'CAM-907', confianca: '87%', latitude: -15.7728, longitude: -47.8778 },
    { id: 2, tipo: 'Iluminação precária', local: 'Asa Norte, Quadra 312 – Brasília/DF', hora: '14:23', prioridade: 'media', destino: 'CEB', camera: 'CAM-401', confianca: '92%', latitude: -15.7830, longitude: -47.8820 },
  ];

  const prioridadeCor = { alta: 'red', media: 'orange', baixa: 'green' };

  const handleOpenModal = (alert) => {
    setSelectedAlert(alert);
  };

  const handleCloseModal = () => {
    setSelectedAlert(null);
  };
  
  // NOVO: Função chamada ao clicar em um alerta na lista para focar no mapa
  const flyToMarker = (alert) => {
    if (alert.latitude && alert.longitude) {
      setFlyToPosition([alert.latitude, alert.longitude]);
    }
  };

  const handleConfirmCleanup = () => {
    setNotification({ show: true, message: `Solicitação para "${selectedAlert.tipo}" enviada!` });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
    handleCloseModal();
  };

  return (
    <div className="app-container">
      {notification.show && (
        <div className="custom-notification">
          {notification.message}
        </div>
      )}

      <TopTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="status-boxes">
        <div className="status-box"><span className="status-title">Alertas ativos</span><div className="status-value">{alerts.length}</div></div>
        <div className="status-box"><span className="status-title">Resolvidos hoje</span><div className="status-value">156 <span className="positivo">+12</span></div></div>
        <div className="status-box"><span className="status-title">Câmeras online</span><div className="status-value">847 <span className="azul">98%</span></div></div>
      </div>

      <div className="main-content">
        <div className="map-section">
          <div className="background-map">
            <div className="map-header">
              <div className="tittle-map">
                <h3 className="map-title">Mapa de alertas - Distrito Federal</h3>
              </div>
              <div className="map-controls">
                <button className={`map-button ${mapView === 'satellite' ? 'selected' : ''}`} onClick={() => setMapView('satellite')}>Satélite</button>
                <button className={`map-button ${mapView === 'traffic' ? 'selected' : ''}`} onClick={() => setMapView('traffic')}>Tráfego</button>
              </div>
            </div>
            {/* O placeholder é substituído pelo componente do mapa */}
            <div className="map-view">
              <MapComponent alerts={alerts} flyToPosition={flyToPosition} />
            </div>
          </div>
        </div>
        <div className="alerts-section">
          <div className="alert-list">
            <div className="header-alerts"><strong>ALERTAS RECENTES</strong><span className="ativos-badge">{alerts.length} ativos</span></div>
            <div className="alerts-scroll">
              {alerts.map((alert) => (
                // Adicionado onClick para focar o mapa no marcador
                <div key={alert.id} className="alert-item" onClick={() => flyToMarker(alert)}>
                  <div className="prioridade-dot" style={{ backgroundColor: prioridadeCor[alert.prioridade] }}></div>
                  <strong>{alert.tipo}</strong>
                  <p>{alert.local}</p>
                  <p className="hora">{alert.hora}</p>
                  <div className="alert-buttons">
                    <button className="btn-encaminhar" onClick={(e) => e.stopPropagation()}>Encaminhar &gt; {alert.destino}</button>
                    <button className="btn-detalhes" onClick={(e) => { e.stopPropagation(); handleOpenModal(alert); }}>Detalhes</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {selectedAlert && (
        <Modal
          isOpen={!!selectedAlert}
          onClose={handleCloseModal}
          onConfirm={handleConfirmCleanup} 
          alertData={{
            title: selectedAlert.tipo,
            priorityClass: selectedAlert.prioridade,
            priorityText: selectedAlert.prioridade.charAt(0).toUpperCase() + selectedAlert.prioridade.slice(1),
            location: selectedAlert.local,
            detectedAt: selectedAlert.hora,
            camera: selectedAlert.camera,
            confidence: selectedAlert.confianca,
            responsibleOrg: selectedAlert.destino,
          }}
        />
      )}
    </div>
  );
}
