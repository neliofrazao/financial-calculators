import '../style/main.scss';
import { ReceiptsList } from './components/ReceiptsList/ReceiptsList';
import { SimulationForm } from './components/SimulationForm/SimulationForm';

{
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

  const receiptsList = document.querySelector('#receipts');
  const newList = new ReceiptsList(initialValues);
  const teste = new SimulationForm();
  const list = newList.getReceiptsList();
  teste.sendData();

  receiptsList.append(list);
}