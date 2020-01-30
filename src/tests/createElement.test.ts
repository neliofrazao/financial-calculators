import { CreateElementFactory } from '../app/shared/createElementFactory';

describe('test CreateElementFactory', () => {
  test('shoud output div tag with text and id', () => {
    const newHtmlElement = CreateElementFactory.addElement({
      tag: 'div',
      textContent: 'element text',
      attributes: {
        id: 'root',
      },
    });
    document.body.appendChild(newHtmlElement);
    const getHtmlElement = document.getElementById('root');

    expect(getHtmlElement).toBeDefined;
    expect(getHtmlElement.innerHTML).toBe('element text');
  });
});
