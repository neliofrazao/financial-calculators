import '../style/main.scss';

import { ReceiptsForm } from './components/ReceiptsForm';
import { MoneyInput } from './utils';

{
  const receiptsForm = new ReceiptsForm();
  receiptsForm.init();
  MoneyInput.format('#amount');
}
