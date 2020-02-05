export class MoneyFormatter {
  /**
   *
   *
   * @static
   * @param {number} value
   * @returns {string}
   * @memberof MoneyFormatter
   */
  public static format(value: number): string {
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });

    return formatter.format(value);
  }
}
