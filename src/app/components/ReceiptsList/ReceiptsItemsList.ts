import { CreateElementFactory, MoneyFormatter } from '../../utils';
export class ReceiptsItemsList {
  /**
   *
   *
   * @returns {HTMLElement}
   * @memberof ReceiptsListItems
   */
  public createValuesToReceiveInfo(): HTMLElement {
    const valuesToReceiveInfo = CreateElementFactory.addElement({
      tag: 'p',
      textContent: 'Você não possui valores a receber!',
      attributes: {
        id: 'receipts',
        class: 'receipts-info',
      },
    });

    return valuesToReceiveInfo;
  }
  /**
   *
   * @param {Array<object>} itemValues
   * @returns
   * @memberof ReceiptsItemsList
   */
  public createListItem(itemValues: Array<object>) {
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
}
