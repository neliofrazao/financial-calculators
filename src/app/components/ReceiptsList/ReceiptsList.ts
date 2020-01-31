import { MoneyFormatter } from './../../shared/MoneyFormatter';
import { CreateElementFactory } from '../../shared/CreateElementFactory';
export class ReceiptsList {
  private dataListValue: Array<object>;

  constructor(receiptsListValue: Array<object>) {
    this.dataListValue = receiptsListValue;
  }

  public getReceiptsList(): HTMLElement {
    const list = CreateElementFactory.addElement({
      tag: 'ul',
      attributes: {
        id: 'receipts',
        class: 'receipts-list',
      },
      children: this.getListItemValues(this.listItemsValues),
    });
    return list;
  }

  public get listItemsValues() {
    return this.dataListValue;
  }

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
}
