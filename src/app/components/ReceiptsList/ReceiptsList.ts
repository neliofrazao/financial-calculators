import { CreateElementFactory, MoneyFormatter } from '../../utils';
export class ReceiptsList {
  /**
   *
   *
   * @param {Array<object>} dataListValue
   * @returns {HTMLElement}
   * @memberof ReceiptsList
   */
  public getReceiptsList(dataListValue: Array<object>): HTMLElement {
    const currentAlert = document.getElementById('receipts');
    if (currentAlert) currentAlert.remove();
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
   *
   * @private
   * @param {Array<object>} itemValues
   * @returns
   * @memberof ReceiptsList
   */
  private getListItemValues(itemValues: Array<object>) {
    const listItems = itemValues.map((listItem: { date: string; value: number }) => {
      const mountReceiptsListItems = {
        tag: 'li',
        textContent: listItem.date,
        children: [
          {
            tag: 'span',
            textContent: MoneyFormatter.format(listItem.value),
            attributes: {
              class: 'receipts-list-value',
            },
          },
        ],
      };
      return mountReceiptsListItems;
    });
    return listItems;
  }
  /**
   *
   *
   * @private
   * @param {Array<object>} itemValues
   * @returns
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

    return this.getListItemValues(formatItemValues);
  }
}
