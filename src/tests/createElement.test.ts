import { CreateElement } from '../app/shared/createElement';

test('shoud output tag h1 with className', () => {
  const h1Title = { tag: 'h1', className: 'title' };
  CreateElement.addElement(h1Title);
  const getTitile = document.getElementsByTagName('h1');

  expect(getTitile).toBeDefined();
});
