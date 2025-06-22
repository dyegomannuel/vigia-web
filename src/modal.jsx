import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onConfirm, alertData }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Detalhes do Alerta</h3>
        </div>

        <div className="modal-body">
          {alertData.imageUrl && (
            <img src={alertData.imageUrl} alt={`Denúncia de ${alertData.title}`} className="modal-alert-image" />
          )}

          <div className="alert-title-container">
            <h4>{alertData.title}</h4>
            <span className={`priority-tag ${alertData.priorityClass}`}>{alertData.priorityText}</span>
          </div>

          <div className="alert-details">
            <p><strong>Descrição:</strong> {alertData.description}</p>
            <p><strong>Localização (Coordenadas):</strong> {alertData.location}</p>
            <p><strong>Data e Hora:</strong> {alertData.detectedAt}</p>
          </div>

          <div className="responsible-org">
            <p className="org-title"><strong>Órgão Responsável</strong></p>
            <p className="org-name">{alertData.responsibleOrg}</p>
          </div>
        </div>

        <div className="modal-actions">
          {/* MODIFICADO: Texto do botão para refletir a nova ação de arquivar/deletar */}
          <button className="btn btn-primary" onClick={onConfirm}>
            Resolver e Arquivar
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
