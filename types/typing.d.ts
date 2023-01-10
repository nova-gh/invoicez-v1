export type clientAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
export type senderAddress = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};
export type items = {
  id: number;
  name: string;
  quantity: string;
  price: string;
  total: string;
};
export type InvoicePlus = {
  id: string;
  creatorId: string;
  createdAt: Date;
  paymentDue: Date;
  description: string;
  clientName: string;
  clientEmail: string;
  status: boolean;
  total: number;
  paymentTerms: number;
  clientAddress: clientAddress;
  senderAddress: senderAddress;
  items: items[];
};
