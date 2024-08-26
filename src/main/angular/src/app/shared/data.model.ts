export interface Property {
  id: string;
  name: string;
  in: Option[];
  out: Option[];
  categories: string[];
}

export interface Option {
  id: string;
  name: string;
}

export interface Transaction {
  propertyId: string;
  category: string;
  optionId: string;
  amount: number;
  paymentForm: string;
  date: string;
  comment: string;
  transactionId?: number;
  dateAdded?: string;
  dateModified?: string;
}

export interface TransactionDelta {
  comment?: string;
  amount?: number;
}

export interface TransactionFilter {
  propertyId: string | undefined;
  category: string | undefined;
  optionId: string | undefined;
  dateStart: string | undefined;
  dateEnd: string | undefined;
  paymentForm: string | undefined;
}
