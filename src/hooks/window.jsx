// APW
// Hooks
// Ancho de la ventana

// NOTA: Código tomado de la presentación: "Making Sense of React Hooks" de Dan Abramov

import { useState, useEffect } from 'react';

const useWindow = () => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    // Por convención (de los hooks) esta es una función de limpieza...
    return () => window.removeEventListener('resize', handleResize);

  });

  return width;

}

export default useWindow;

// [lock-all/]
