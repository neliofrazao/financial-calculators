export class ReceiptsList {
  private getListItemValues(itemValues: Array<object>) {
    const listItems = itemValues.map((listItem: { date: string; value: string }) => {
      const mountReceiptsListItems = {
        tag: 'li',
        textContent: listItem.date,
        children: [
          {
            tag: 'span',
            textContent: listItem.value,
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
