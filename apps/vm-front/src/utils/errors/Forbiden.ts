export class ForbidenError extends Error {
  constructor() {
    super('Forbiden');
    this.name = 'Forbiden';
  }
}