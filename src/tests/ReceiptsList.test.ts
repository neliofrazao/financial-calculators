import { ReceiptsList } from '../app/components/ReceiptsList/ReceiptsList';

describe('test ReceiptsList', () => {
  const newList = new ReceiptsList();

  test('shoud output div ReceiptsList with data and values', () => {
    const initialValues = [
      {
        date: 'Amanhã',
        value: 12436,
      },
      {
        date: 'Em 15 dias',
        value: 12831,
      },
      {
        date: 'Em 30 dias',
        value: 11094,
      },
      {
        date: 'Em 90 dias',
        value: 12900,
      },
    ];
    const list = newList.getReceiptsList(initialValues);
    document.body.appendChild(list);

    const getHtmlElement = document.getElementById('receipts');
    const getItemListElement = getHtmlElement.getElementsByTagName('li');

    expect(getItemListElement).toBeDefined();
    expect(getItemListElement.length).toBe(4);
  });

  test('shoud output div ReceiptsList with default values for another dates', () => {
    const initialValues = [
      {
        date: 'Amanhã',
        value: 12436,
      },
    ];
    const list = newList.getReceiptsList(initialValues);
    document.body.appendChild(list);

    const getHtmlElement = document.getElementById('receipts');
    const getItemListElement = getHtmlElement.getElementsByTagName('li');

    expect(getItemListElement).toBeDefined();
    expect(getItemListElement.length).toBe(4);
  });
});
