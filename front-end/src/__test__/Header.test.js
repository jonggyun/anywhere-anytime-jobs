import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import Header from 'components/common/Header';

describe('<Header />', () => {
  it('Has title', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    getByText('Anywhere Anytime Jobs');
  });
});
