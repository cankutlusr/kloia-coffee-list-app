import { render } from '@testing-library/react';
import StyledMenu from '.';

const categories = ["All Coffees", "Hot", "Iced"]

test('Menu Test', () => {
  const { getAllByText } = render(<StyledMenu items={categories}/>);
  getAllByText("All Coffees")
  getAllByText("Hot")
  getAllByText("Iced")
});