export interface Result {
  created: string;
  name: string;
  uuid: string;
  data: {
    due_date: {
      text: string,
      validation_error: boolean;
    };
    fund_name: {
      text: string,
      validation_error: boolean;
    };
    price: {
      text: string,
      validation_error: boolean;
    };
  };
}
