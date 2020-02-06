import { HttpService } from '../../utils';
import { ReceiptsList } from '../ReceiptsList/ReceiptsList';
import { Loading } from '../../shared/Loading';
import { Alert } from '../../shared/Alert';

export class ReceiptsForm {
  private alertMessage: Alert;
  private receiptsList: ReceiptsList;
  private getForm: any;

  constructor() {
    this.alertMessage = new Alert();
    this.receiptsList = new ReceiptsList();
    this.getForm = document.getElementById('form-receipts');
  }
  /**
   *
   * @memberof ReceiptsForm
   */
  public init() {
    this.handlePostData();
  }
  /**
   *
   * @private
   * @memberof ReceiptsForm
   */
  private handlePostData(): void {
    const formReceipts = window.document.getElementById('form-receipts');

    const getDataReceipts = formReceipts.addEventListener('submit', event => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const formatRequest = {
        amount: formData.get('amount'),
        installments: formData.get('installments'),
        mdr: formData.get('mdr'),
      };

      if (!this.getForm.checkValidity()) {
        this.alertMessage.error('Por favor, preencha os itens corretamente!');
        return false;
      }

      this.fetchReceipts(formatRequest);
    });

    return getDataReceipts;
  }
  /**
   *
   * @private
   * @param {object} payload
   * @returns
   * @memberof ReceiptsForm
   */
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
  /**
   *
   * @private
   * @param {Array<object>} receiptsListValue
   * @memberof ReceiptsForm
   */
  private createReceiptsList(receiptsListValue: Array<object>): void {
    const containerReceipts = document.getElementById('container-receipts');
    const createReceiptsList = this.receiptsList.getReceiptsList(receiptsListValue);

    containerReceipts.append(createReceiptsList);
  }
}
