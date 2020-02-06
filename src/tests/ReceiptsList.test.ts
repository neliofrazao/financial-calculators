import { ReceiptsList } from '../app/components/ReceiptsList/index';

describe('test ReceiptsList', () => {
  const newList = new ReceiptsList();

  test('shoud output empty results menssage in receipts info', () => {
    const apiResponseValue = { 1: 0, 15: 0, 30: 0, 90: 0 };
    const list = newList.getReceiptsList(apiResponseValue);
    document.body.appendChild(list);
    const getHtmlElement = document.getElementById('receipts');

    expect(getHtmlElement.innerHTML).toContain('Você não possui valores a receber');
  });

  test('shoud output receipts list with values', () => {
    const apiResponseValue = { 1: 1118, 15: 11404, 30: 11637, 90: 11637 };
    const list = newList.getReceiptsList(apiResponseValue);
    document.body.appendChild(list);

    const getHtmlElement = document.getElementById('receipts');
    const getItemListElement = getHtmlElement.getElementsByTagName('li');
    const tomorrow = getItemListElement[0].innerHTML;
    const inFifteenDays = getItemListElement[1].innerHTML;
    const inThirtyDays = getItemListElement[2].innerHTML;
    const inNinetyDays = getItemListElement[3].innerHTML;

    expect(tomorrow).toContain('1,118.00');
    expect(inFifteenDays).toContain('11,404.00');
    expect(inThirtyDays).toContain('11,637.00');
    expect(inNinetyDays).toContain('11,637.00');
    expect(getItemListElement.length).toBe(4);
  });
});
