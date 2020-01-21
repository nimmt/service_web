import { Action } from 'redux';

import { IPlayer } from 'Tables/components/Player';

export type State = {
  tableId?: string;
  players: IPlayer[];
  accessToken?: string;
};

export interface TableAction extends Action {
  payload: any;
};

const initialState = {
  players: []
}

const reducer = (state: State = initialState, action: TableAction): State => {
  switch (action.type) {
    case 'FETCH_PLAYERS': {
      return {
        ...state,
        players: action.payload.players
      };
    }
    case 'ADD_PLAYER': {
      return {
        ...state,
        accessToken: action.payload.accessToken
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
