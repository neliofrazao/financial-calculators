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

  test('shoud create element with children', () => {
    const newHtmlElement = CreateElementFactory.addElement({
      tag: 'ul',
      attributes: {
        id: 'list',
      },
      children: [
        {
          tag: 'li',
          textContent: 'liste item',
        },
        {
          tag: 'li',
          textContent: 'liste item',
        },
      ],
    });
    document.body.appendChild(newHtmlElement);
    const getHtmlElement = document.getElementById('list');
    const getListElements = getHtmlElement.getElementsByTagName('li');

    expect(getHtmlElement).toBeDefined;
    expect(getListElements.length).toBe(2);
  });
});
