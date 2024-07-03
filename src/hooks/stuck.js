// Soft4pilot
// Mecanismos (Hooks)
// Componente semi-fijo (sticky)
// José Esteva <josesteva@soft4pilot.net>

// Código adaptado de: https://dev.to/producthackers/intersection-observer-using-react-49ko

import { useRef, useEffect, useState } from 'react';

const useStuck = () => {

  // Referencia al componente
  const stuckRef = useRef(null);

  // Estado del componente
  const [stuck, setStuck] = useState(false);


  // Detectar cambio de posicion
  const stuckChange = entries => {

    const [ entry ] = entries;
    setStuck(!entry.isIntersecting);

  }

  // Crear un observador de la posición del componente
  useEffect(() => {

    let currentRef = stuckRef.current;  // Es necesario copiar la referencia a una variable...

    const observer = new IntersectionObserver ( stuckChange, { root:null, threshold:1 } );
    if (currentRef) observer.observe(currentRef);

    // Por convención (de los hooks) debe incluirse una función de limpieza...
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    }

  }, [ stuckRef ]); // eslint-disable-next-line

  return [ stuck, stuckRef ];

}

export default useStuck;

// [lock-all/]
