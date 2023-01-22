export interface Result {
  created: string;
  name: string;
  uuid: string;
  data: {
    due_date: {
      text: string,
      validation_error?: string;
    };
    fund_name: {
      text: string,
      validation_error?: string;
    };
    price: {
      text: string,
      validation_error?: string;
    };
  };
}

export type FormType = 'date' | 'name' | 'price';

export type SortType = 'date' | 'name' | 'fundName';
