import { Action } from 'redux';

import { IPlayer } from 'Tables/components/Player';

export type State = {
  id?: string;
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
    case 'CREATE_TABLE_SUCCEEDED': {
      return {
        ...state,
        id: action.payload
      };
    }
    case 'TABLE_FETCH_SUCCEEDED': {
      return {
        ...state,
        players: action.payload.players
      };
    }
    case 'JOIN_PLAYER_SUCCEEDED': {
      return {
        ...state,
        accessToken: action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
