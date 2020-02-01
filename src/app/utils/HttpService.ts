import { Alert } from '../shared/Alert';

const BASE_URL = 'https';
const ERROR_TIMEOUT = 'Infelizmente estamos com problemas de conexão, tente novamente mais tarde.';
const ERROR_DEFAULT = 'Ops! Sistema instável, tente novamente mais tarde!';
const NETWORK_ERROR = 'Para utilizar o nosso sistema é necessário estar conectado a uma Rede';

export class HttpService {
  private static alertMessage = new Alert();

  public static async post(url: string, body: object): Promise<Response> {
    if (!navigator.onLine) {
      this.alertMessage.info(NETWORK_ERROR);
    } else {
      try {
        const response = await fetch(`${BASE_URL}://${url}`, {
          method: 'POST',
          mode: 'cors',
          body: JSON.stringify(body),
          headers: {
            'Content-type': 'application/json',
            credentials: 'include',
          },
        });
        HttpService.handleErrors(response);

        return response;
      } catch (error) {
        HttpService.handleStatusCodeMenssage(error.message);
      }
    }
  }

  private static handleErrors(response: Response): Response {
    const { ok, status } = response;
    if (!ok) throw Error(status.toString());

    return response;
  }

  private static async handleStatusCodeMenssage(statusCode: string) {
    const getStatusCode = await statusCode;
    if (getStatusCode === '408') this.alertMessage.warning(ERROR_TIMEOUT);
    else this.alertMessage.error(ERROR_DEFAULT);
  }
}
