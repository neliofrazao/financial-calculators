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

    expect(getHtmlElement).toBeDefined();
    expect(getHtmlElement.innerHTML).toEqual('element text');
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
          textContent: 'list item',
        },
        {
          tag: 'li',
          textContent: 'list item',
        },
      ],
    });
    document.body.appendChild(newHtmlElement);
    const getHtmlElement = document.getElementById('list');
    const getListElements = getHtmlElement.getElementsByTagName('li');

    expect(getListElements.length).toBe(2);
    expect(getListElements[0].innerHTML).toEqual('list item');
  });

  test('shoud create element with nested children', () => {
    const newHtmlElement = CreateElementFactory.addElement({
      tag: 'div',
      textContent: 'element text',
      attributes: {
        id: 'nested',
      },
      children: [
        {
          tag: 'h1',
          textContent: 'Title',
          children: [
            {
              tag: 'span',
              textContent: 'some text',
            },
          ],
        },
      ],
    });
    document.body.appendChild(newHtmlElement);
    const getHtmlElement = document.getElementById('nested');
    const getTitleElement = getHtmlElement.getElementsByTagName('h1');
    const getSpanElement = getHtmlElement.getElementsByTagName('span');

    expect(getSpanElement.length).toBe(1);
    expect(getTitleElement.length).toBe(1);
    expect(getSpanElement[0].innerHTML).toEqual('some text');
  });
});
