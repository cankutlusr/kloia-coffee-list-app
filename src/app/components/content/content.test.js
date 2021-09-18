import { render } from '@testing-library/react';
import Content from '.';

test('Content Test', () => {
  const {getByText} = render(<Content header="Header" description="Description" ingredients="Ingredients" />);
  getByText("Header")
  getByText("Description")
  getByText("Ingredients")
});