import { Alert } from '../shared/Alert';

const ERROR_TIMEOUT = 'Infelizmente estamos com problemas de conexão, tente novamente mais tarde.';
const ERROR_DEFAULT = 'Ops! Sistema instável, tente novamente mais tarde!';

export class HttpService {
  public static async post(url: string, body: object): Promise<Response> {
    const BASE_URL = 'https';
    try {
      const response = await fetch(`${BASE_URL}://${url}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json',
        },
      });
      HttpService.handleErrors(response);
      return response;
    } catch (error) {
      HttpService.handleStatusCodeMenssage(error.message);
    }
  }

  private static handleErrors(response: Response): Response {
    const { ok, status } = response;
    if (!ok) throw Error(status.toString());

    return response;
  }

  private static async handleStatusCodeMenssage(statusCode: number) {
    const alertMessage = new Alert();
    const getStatusCode = await statusCode;
    if (getStatusCode == 408) alertMessage.warning(ERROR_TIMEOUT);
    else alertMessage.error(ERROR_DEFAULT);
  }
}
