// https://github.com/EOSIO/eosjs/blob/master/src/eosjs-rpc-interfaces.ts#L10
export interface ABIProps {
  version: string;
  types: { new_type_name: string; type: string }[];
  structs: {
    name: string;
    base: string;
    fields: { name: string; type: string }[];
  }[];
  actions: ABIActionsProps[];
  tables: ABITableProps[];
  ricardian_clauses: { id: string; body: string }[];
  error_messages: { error_code: number; error_msg: string }[];
  abi_extensions: { tag: number; value: string }[];
  variants?: { name: string; types: string[] }[];
  action_results?: { name: string; result_type: string }[];
  kv_tables?: {
    [key: string]: {
      type: string;
      primary_index: { name: string; type: string };
      secondary_indices: { [key: string]: { type: string } }[];
    };
  }[];
}

export interface ABITableProps {
  name: string;
  type: string;
  index_type: string;
  key_names: string[];
  key_types: string[];
}

export interface ABIActionsProps {
  name: string;
  type: string;
  ricardian_contract: string;
}

// https://github.com/EOSIO/eosjs/blob/master/src/eosjs-rpc-interfaces.ts#L135
export interface FetchABIProps {
  account_name: string;
  abi?: ABIProps;
}
