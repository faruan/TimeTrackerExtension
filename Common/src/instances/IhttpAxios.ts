interface IErro {
  Mensagem: string;
}

export interface IErrorServiceResponse {
  Data: string;
  Origem: string;
  Erros: IErro[];
}