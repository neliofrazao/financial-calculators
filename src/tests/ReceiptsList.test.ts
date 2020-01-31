import { ReceiptsList } from '../app/components/ReceiptsList/ReceiptsList';

describe('test ReceiptsList', () => {
  const initialValues = [
    {
      date: 'Amanhã',
      value: '10,00',
    },
    {
      date: 'Em 15 dias',
      value: '0,00',
    },
  ];

  test('shoud output div ReceiptsList with data and values', () => {
    const newList = new ReceiptsList(initialValues);
    const list = newList.getReceiptsList();
    document.body.appendChild(list);

    const getHtmlElement = document.getElementById('receipts');
    const getItemListElement = getHtmlElement.getElementsByTagName('li');
    const getSpanElement = getHtmlElement.getElementsByTagName('span');

    expect(getItemListElement).toBeDefined();
    expect(getItemListElement.length).toBe(2);
    expect(getSpanElement[0].innerHTML).toEqual('R$ 10,00');
  });
});
