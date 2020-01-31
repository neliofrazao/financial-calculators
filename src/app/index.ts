import '../style/main.scss';
import { ReceiptsList } from './components/ReceiptsList/ReceiptsList';

{
  const initialValues = [
    {
      date: 'Amanhã',
      value: '0,00',
    },
    {
      date: 'Em 15 dias',
      value: '0,00',
    },
    {
      date: 'Em 30 dias',
      value: '0,00',
    },
    {
      date: 'Em 90 dias',
      value: '0,00',
    },
  ];

  const receiptsList = document.querySelector('#receipts');
  const newList = new ReceiptsList(initialValues);
  const list = newList.getReceiptsList();
  receiptsList.append(list);
}
