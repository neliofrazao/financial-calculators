import { CreateElementFactory } from '../../utils';
import { ReceiptsListItems } from './ReceiptsListItems';
export class ReceiptsList {
  private receiptsListItems: ReceiptsListItems;

  constructor() {
    this.receiptsListItems = new ReceiptsListItems();
  }
  /**
   *
   * @param {Array<object>} dataListValue
   * @returns {HTMLElement}
   * @memberof ReceiptsList
   */
  public getReceiptsList(dataListValue: Array<object>): HTMLElement {
    const currentReceipts = document.getElementById('receipts');
    const listOfValues = this.createList(dataListValue);
    const noValuesToReceiveinfo = this.receiptsListItems.createValuesToReceiveInfo();
    const getReceiptsListValues = (Object.values(dataListValue) as unknown) as Array<number>;
    const IsReceiptsValuesGreaterThanZero = getReceiptsListValues.every(listValue => listValue > 0);
    const receiptsValues = !IsReceiptsValuesGreaterThanZero ? noValuesToReceiveinfo : listOfValues;

    if (currentReceipts) currentReceipts.remove();

    return receiptsValues;
  }
  /**
   *
   * @private
   * @param {Array<object>} dataListValue
   * @returns {HTMLElement}
   * @memberof ReceiptsList
   */
  private createList(dataListValue: Array<object>): HTMLElement {
    const list = CreateElementFactory.addElement({
      tag: 'ul',
      attributes: {
        id: 'receipts',
        class: 'receipts-list',
      },
      children: this.formatItemsList(dataListValue || []),
    });

    return list;
  }
  /**
   *
   * @private
   * @param {Array<object>} itemValues
   * @returns {Array<object>}
   * @memberof ReceiptsList
   */
  private formatItemsList(itemValues: Array<object>) {
    const getItemValues = Object.values(itemValues);
    const formatItemValues = [
      {
        date: 'Amanhã',
        value: getItemValues[0] || 0,
      },
      {
        date: 'Em 15 dias',
        value: getItemValues[1] || 0,
      },
      {
        date: 'Em 30 dias',
        value: getItemValues[2] || 0,
      },
      {
        date: 'Em 90 dias',
        value: getItemValues[3] || 0,
      },
    ];

    return this.receiptsListItems.createListItem(formatItemValues);
  }
}
