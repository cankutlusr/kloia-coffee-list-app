import { render } from '@testing-library/react';
import StyledNavLink from '.';

test('StyledNavLink Test', () => {
  const {getByText} = render(<StyledNavLink label="Test"/>);
  getByText("Test");
});