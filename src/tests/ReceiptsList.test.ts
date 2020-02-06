import { ReceiptsList } from '../app/components/ReceiptsList/index';

describe('test ReceiptsList', () => {
  const newList = new ReceiptsList();

  test('shoud output div ReceiptsList with data and values', () => {
    const initialValues = { 1: 0, 15: 0, 30: 0, 90: 0 };
    const list = newList.getReceiptsList(initialValues);
    document.body.appendChild(list);
    const getHtmlElement = document.getElementById('receipts');
    expect(getHtmlElement.innerHTML).toContain('Você não possui valores a receber');
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

    // expect(getItemListElement).toBeDefined();
    // expect(getItemListElement.length).toBe(4);
  });
});
