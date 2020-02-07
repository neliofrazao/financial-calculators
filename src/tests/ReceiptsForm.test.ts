import { ReceiptsForm } from '../app/components/ReceiptsForm';
import { HttpService, MoneyInput } from '../app/utils';
import * as fs from 'fs';
import * as path from 'path';
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

jest.dontMock('fs');
const fetchMock = fetch as any;

beforeEach(() => {
  document.documentElement.innerHTML = html.toString();
  const receiptsForm = new ReceiptsForm();
  receiptsForm.init();
});

afterEach(() => {
  jest.resetModules();
});

jest.useFakeTimers();
describe('test ReceiptsForm component', () => {
  test('shoud print required field message', () => {
    const getAmount: any = document.getElementById('amount');
    const getInstallments: any = document.getElementById('installments');

    getAmount.value = '12122';
    getInstallments.value = '1';

    document.getElementById('send').click();
    jest.advanceTimersByTime(100);
    const getAlert = document.getElementById('alert');

    expect(getAlert.innerHTML).toContain('Por favor, preencha os itens corretamente!');
  });

  test('shoud post data without error', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ 1: 11417, 15: 11581, 30: 11758, 90: 11758 }), {
      status: 200,
    });

    await ReceiptsForm;
    const getAlert = document.getElementById('alert');
    const receiptsLits = document.getElementById('receipts');
    const getAmount: any = document.getElementById('amount');
    const getInstallments: any = document.getElementById('installments');
    const getMdr: any = document.getElementById('mdr');
    getAmount.value = 'R$ 2.323,99';
    getInstallments.value = '1';
    getMdr.value = '3';
    document.getElementById('send').click();

    expect(getAlert).toBeNull();
    expect(receiptsLits).toBeDefined();
  });
});
