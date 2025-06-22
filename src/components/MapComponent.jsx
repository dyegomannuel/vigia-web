import React, { useState, useMemo, useCallback } from 'react';
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from '@react-google-maps/api';
import './MapComponent.css'; // Vamos criar este CSS a seguir

// Coloque sua chave da API do Google Maps aqui
const REACT_APP_GOOGLE_API_KEY = "AIzaSyD9fMVdU3kMGvNI8pb1nX5Z5PkI4trfVQo"; 
const libraries = ["places"];

const MapComponent = () => {
  // Estados para o mapa e as caixas de busca
  const [map, setMap] = useState(null);
  const [searchBoxA, setSearchBoxA] = useState(null);
  const [searchBoxB, setSearchBoxB] = useState(null);

  // Estados para os pontos de origem e destino
  const [pointA, setPointA] = useState(null);
  const [pointB, setPointB] = useState(null);

  // Estados para o serviço de direções
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [response, setResponse] = useState(null);

  // Posição inicial do mapa (ex: centro de Florianópolis)
  const initialPosition = {
    lat: -15.7801,
    lng: -47.9292,
  };

  // Funções de carregamento para as caixas de busca
  const onLoadA = (ref) => setSearchBoxA(ref);
  const onLoadB = (ref) => setSearchBoxB(ref);

  // Função chamada quando um local é selecionado na primeira caixa
  const onPlacesChangedA = () => {
    const places = searchBoxA.getPlaces();
    const place = places[0];
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setPointA(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null); // Limpa a rota anterior
    map.panTo(location);
  };

  // Função chamada quando um local é selecionado na segunda caixa
  const onPlacesChangedB = () => {
    const places = searchBoxB.getPlaces();
    const place = places[0];
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setPointB(location);
    setOrigin(null);
    setDestination(null);
    setResponse(null); // Limpa a rota anterior
    map.panTo(location);
  };

  // Função do botão "Traçar rota"
  const traceRoute = () => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  };

  // Memoiza as opções para o serviço de direções
  const directionsServiceOptions = useMemo(() => {
    if (!origin || !destination) {
      return null;
    }
    return {
      origin,
      destination,
      travelMode: "DRIVING",
    };
  }, [origin, destination]);

  // Callback para receber a resposta do serviço de direções
  const directionsCallback = useCallback((res) => {
    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("Erro na resposta de direções: ", res);
        alert("Não foi possível traçar a rota. Verifique os endereços.");
      }
    }
  }, []);

  // Memoiza as opções para o renderizador de direções
  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <div className="map-page-container">
      <LoadScript
        googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
        libraries={libraries}
      >
        <GoogleMap
          onLoad={setMap}
          mapContainerClassName="map-container"
          center={initialPosition}
          zoom={15}
        >
          <div className="address-box">
            <StandaloneSearchBox
              onLoad={onLoadA}
              onPlacesChanged={onPlacesChangedA}
            >
              <input
                className="address-field"
                placeholder="Digite o endereço de partida"
              />
            </StandaloneSearchBox>
            <StandaloneSearchBox
              onLoad={onLoadB}
              onPlacesChanged={onPlacesChangedB}
            >
              <input
                className="address-field"
                placeholder="Digite o endereço de destino"
              />
            </StandaloneSearchBox>
            <button onClick={traceRoute} className="route-button">
              Traçar Rota
            </button>
          </div>

          {/* Mostra os marcadores apenas se a rota não estiver traçada */}
          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {/* Renderiza o serviço e a rota quando a origem e o destino são definidos */}
          {directionsServiceOptions && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
