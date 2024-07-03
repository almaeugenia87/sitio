// Soft4pilot
// Mecanismos (Hooks)
// Desplazamiento vertical (scroll)
// José Esteva <josesteva@soft4pilot.net>

// Código adaptado de: https://www.codemzy.com/blog/react-hook-scroll-direction-event-listener

import { useState, useEffect } from 'react';

const useScroll = () => {

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {

    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {

      // Obtener la magnitud del desplazamiento
      const scrollY = window.pageYOffset;

      // Determinar la posición del desplazamiento
      const direction = scrollY > lastScrollY ? "down" : "up";

      // Si se detecta un moviniemto de más de 16 pixeles
      if (direction !== scrollDirection && (scrollY - lastScrollY > 16 || scrollY - lastScrollY < -16)) {

          // Registrar la dirección del movimiento
          setScrollDirection(direction);
      }

      // Registar la última magnitud del desplazamiento
      lastScrollY = scrollY > 0 ? scrollY : 0;

    };

    // Observar el movimiento vertical
    window.addEventListener("scroll", updateScrollDirection);

    // Dejar de observar el movimiento vertical (destructor)
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    }

  }, [scrollDirection]);

  return scrollDirection;

}

export default useScroll;

// [lock-all/]
