import { CreateElementFactory } from '../../shared/createElementFactory';

const ReceiptsList = () => {
  const app = document.querySelector('#receipts');
  const list = CreateElementFactory.addElement({
    tag: 'ul',
    attributes: {
      class: 'receipts-list',
    },
    children: [
      {
        tag: 'li',
        textContent: 'Amanhã',
        children: [
          {
            tag: 'span',
            textContent: 'R$ 0,00',
            attributes: {
              class: 'receipts-list-value',
            },
          },
        ],
      },
      {
        tag: 'li',
        textContent: 'Em 15 dias',
        children: [
          {
            tag: 'span',
            textContent: 'R$ 0,00',
            attributes: {
              class: 'receipts-list-value',
            },
          },
        ],
      },
      {
        tag: 'li',
        textContent: 'Em 30 dias',
        children: [
          {
            tag: 'span',
            textContent: 'R$ 0,00',
            attributes: {
              class: 'receipts-list-value',
            },
          },
        ],
      },
      {
        tag: 'li',
        textContent: 'Em 90 dias',
        children: [
          {
            tag: 'span',
            textContent: 'R$ 0,00',
            attributes: {
              class: 'receipts-list-value',
            },
          },
        ],
      },
    ],
  });

  return app.append(list);
};

ReceiptsList();
