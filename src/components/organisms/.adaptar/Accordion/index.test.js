// SD
// Pruebas
// Accordion (Acordeón)
// Raul Salinas <raul.teo.salinas@cic.unam.mx>

import { render } from '@testing-library/react';

import Accordion from './index';

test('Componente <Accordion/>', () => {
  render(<Accordion><Accordion.Item /></Accordion>);
});
