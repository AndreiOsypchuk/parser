export interface TableItem {
  id: string;
  name: string;
  price: number;
}
export interface DataStateInterface {
  table: TableItem[];
}

const InitialState: DataStateInterface = {
  table: [],
};

interface DataAction {
  type: string;
  payload?: TableItem[];
}

export const DataReducer = (store = InitialState, action: DataAction) => {
  switch (action.type) {
    case "LOAD_TABLE": {
      return { ...store, table: action.payload };
    }
    case "LOG_OUT": {
      return InitialState;
    }
    default:
      return store;
  }
};
