import { HttpService } from '../../utils';
import { ReceiptsList } from '../ReceiptsList/ReceiptsList';
import { Loading } from '../../shared/Loading';

// hash-front-test.herokuapp.com/?timeout
// hash-front-test.herokuapp.com/?internalError
// hash-front-test.herokuapp.com/?delay=tempoEmMilissegundos

const formData = {
  amount: 15000,
  installments: 3,
  mdr: 6,
};

export class ReceiptsForm {
  private getFormDataResponse: Array<object>;
  private receiptsList: ReceiptsList;

  constructor() {
    this.receiptsList = new ReceiptsList();
  }

  public async fetchReceipts() {
    const payload = await formData;
    const receiptsList = document.getElementById('container-receipts');
    Loading.addLoading();
    const response = HttpService.post('hash-front-test.herokuapp.com/', payload)
      .then((response: Response) => response.json())
      .then((responseJson: Array<object>) => (this.getFormDataResponse = responseJson))
      .finally(() => {
        Loading.removeLoading();
        const addReceiptsList = this.receiptsList.getReceiptsList(this.getFormDataResponse);
        receiptsList.append(addReceiptsList);
      });

    return response;
  }

  public handleFormSubmit() {
    document.getElementById('send-data').addEventListener('click', () => {
      this.fetchReceipts();
    });
  }
}
