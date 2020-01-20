import { IPlayer } from './components/Player';

export type State = {
  tableId: string;
  players: IPlayer[];
  accessToken?: string;
};

export type Action = {
  type: string;
  payload: any;
};

const reducer = (state: State, action: Action): State => {
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
