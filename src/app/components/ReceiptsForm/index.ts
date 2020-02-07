/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpService, MoneyInput } from '../../utils';
import { ReceiptsList } from '../ReceiptsList';
import { Loading } from '../../shared/Loading';
import { Alert } from '../../shared/Alert';

export class ReceiptsForm {
  private alertMessage: Alert;
  private receiptsList: ReceiptsList;

  constructor() {
    this.alertMessage = new Alert();
    this.receiptsList = new ReceiptsList();
  }
  /**
   *
   * @memberof ReceiptsForm
   */
  public init() {
    this.handlePostData();
    MoneyInput.format('#amount');
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
      const getForm: any = document.getElementById('form-receipts');
      const getAmount: any = document.getElementById('amount');
      const requestFormated = this.formatRequest();
      const isAmountEmpty = getAmount.value.length <= 3;
      const isValidityForm = !getForm.checkValidity();

      if (isValidityForm && isAmountEmpty) {
        this.alertMessage.error('Por favor, preencha os itens corretamente!');
        return false;
      }

      this.fetchReceipts(requestFormated);
    });

    return getDataReceipts;
  }
  /**
   *
   * @private
   * @returns {object}
   * @memberof ReceiptsForm
   */
  private formatRequest(): object {
    const getAmount: any = document.getElementById('amount');
    const getInstallments: any = document.getElementById('installments');
    const getMdr: any = document.getElementById('mdr');
    const formatRequest = {
      amount: getAmount.value.replace(/[^0-9]+/g, ''),
      installments: getInstallments.value,
      mdr: getMdr.value,
    };

    return formatRequest;
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
  private createReceiptsList(receiptsListValue: object): void {
    const containerReceipts = document.getElementById('container-receipts');
    const createReceiptsList = this.receiptsList.getReceiptsList(receiptsListValue);

    containerReceipts.append(createReceiptsList);
  }
}
