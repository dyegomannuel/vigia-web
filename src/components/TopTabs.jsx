import './TopTabs.css'
import logo from '../assets/logo.png'

export default function TopTabs({ activeTab, setActiveTab }) {
  // Função para lidar com cliques nos botões/links
  const handleModelClick = () => {
    // Abre o link em uma nova aba do navegador
    window.open('https://cidade-segura.streamlit.app/', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="header">
      <div className="logo-header">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="header-title">
        <h1>SISTEMA DE SEGURANÇA URBANA INTELIGENTE</h1>
        <p>Polícia Militar do Distrito Federal - Central de Monitoramento</p>
      </div>
      <div className="top-tabs">
        {/* Botão de Monitoramento continua controlando o estado local */}
        <button
          onClick={() => setActiveTab('monitoramento')}
          className={`tab-button1 ${activeTab === 'monitoramento' ? 'active' : ''}`}
        >
          Monitoramento
        </button>
        
        {/* O botão de Modelo de Predição agora chama a função para abrir o link */}
        <button
          onClick={handleModelClick}
          className="tab-button2" // Mantém a mesma classe para o estilo
        >
          Modelo de predição
        </button>
      </div>
    </div>
  )
}
