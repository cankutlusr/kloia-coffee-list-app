import { render } from '@testing-library/react';
import PageLayout from '.';

test('PageLayout Test', () => {
  const {getByText} = render(<PageLayout sidebar="Sidebar" content="Content"/>);
  getByText("Sidebar")
  getByText("Content")  
});