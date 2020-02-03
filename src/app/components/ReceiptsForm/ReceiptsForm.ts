import { HttpService } from '../../utils';
import { ReceiptsList } from '../ReceiptsList/ReceiptsList';
import { Loading } from '../../shared/Loading';

// hash-front-test.herokuapp.com/?timeout
// hash-front-test.herokuapp.com/?internalError
// hash-front-test.herokuapp.com/?delay=tempoEmMilissegundos
export class ReceiptsForm {
  public handlePostData(): void {
    const formReceipts = document.getElementById('form-receipts');
    formReceipts.addEventListener('submit', event => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const formatRequest = {
        amount: formData.get('amount'),
        installments: formData.get('installments'),
        mdr: formData.get('mdr'),
      };

      this.fetchReceipts(formatRequest);
    });
  }

  private async fetchReceipts(payload: object) {
    const getPlayload = await payload;

    Loading.addLoading();
    const response = HttpService.post('hash-front-test.herokuapp.com/', getPlayload)
      .then((response: Response) => response.json())
      .then((responseJson: Array<object>) => this.createReceiptsList(responseJson))
      .finally(() => {
        Loading.removeLoading();
      });

    return response;
  }

  private createReceiptsList(receiptsListValue: Array<object>): void {
    console.log(receiptsListValue);
    const containerReceipts = document.getElementById('container-receipts');
    const receiptsList = new ReceiptsList();
    const createReceiptsList = receiptsList.getReceiptsList(receiptsListValue);

    containerReceipts.append(createReceiptsList);
  }
}
