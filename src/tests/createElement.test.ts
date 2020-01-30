import { CreateElementFactory } from '../app/shared/createElementFactory';

test('shoud output tag h1 with className', () => {
  const h1Title = { tag: 'h1', className: 'title' };
  CreateElementFactory.addElement(h1Title);
  const getTitile = document.getElementsByTagName('h1');

  expect(getTitile).toBeDefined();
});
