import { CreateElementFactory, MoneyFormatter } from '../../utils';

const initialValues = [
  {
    date: 'Amanhã',
    value: 0,
  },
  {
    date: 'Em 15 dias',
    value: 0,
  },
  {
    date: 'Em 30 dias',
    value: 0,
  },
  {
    date: 'Em 90 dias',
    value: 0,
  },
];

export class ReceiptsList {
  public getReceiptsList(dataListValue: Array<object> = initialValues): HTMLElement {
    const list = CreateElementFactory.addElement({
      tag: 'ul',
      attributes: {
        id: 'receipts',
        class: 'receipts-list',
      },
      children: this.getListItemValues(dataListValue),
    });
    return list;
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
