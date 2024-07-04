// SD
// Pruebas
// Tabs (Pestañas)
// Raul Salinas <raul.teo.salinas@cic.unam.mx>

import { render } from '@testing-library/react';

import Tabs from './index';

test('Componente <Tabs/>', () => {
  render(<Tabs><Tabs.Item /></Tabs>);
});
