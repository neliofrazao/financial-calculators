import '../style/main.scss';
import { ReceiptsList } from './components/ReceiptsList/ReceiptsList';
import { SimulationForm } from './components/SimulationForm/SimulationForm';

{
  const receiptsList = document.querySelector('#receipts');
  const newList = new ReceiptsList();
  const teste = new SimulationForm();
  const list = newList.getReceiptsList();
  teste.sendData();

  receiptsList.append(list);
}