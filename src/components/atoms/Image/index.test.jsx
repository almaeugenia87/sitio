// SD
// Componentes
// Image (Imagen) - Pruebas
// José Esteva <josesteva@soft4pilot.net>
//

import { render } from '@testing-library/react';
import Image from './index';

test('Componente <Image/>', () => {
  render(<Image src='https://picsum.photos/320/240' />);
});
