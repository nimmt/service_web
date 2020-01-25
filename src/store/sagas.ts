import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

function* createTable() {
  const apiCreateTable = () => (
    fetch('http://localhost:8000/tables', { method: 'POST' })
      .then(response => response.json())
  );

  try {
    const table = yield call(apiCreateTable);
    yield put({ type: 'CREATE_TABLE_SUCCESSED', payload: table.id });
    yield put(push(`/tables/${table.id}`));
  } catch (e) {
    yield put({ type: 'CREATE_TABLE_FAILED', message: e.message });
  }
}

function* fetchTable({ payload: { tableId } }: { payload: { tableId: string }; }) {
  const apiTableFetch = (tableId: String) => (
    fetch(`http://localhost:8000/tables/${tableId}`)
      .then(response => response.json())
  );
  
  try {
    const table = yield call(apiTableFetch, tableId);
    yield put({ type: 'TABLE_FETCH_SUCCEEDED', payload: table });
  } catch (e) {
    yield put({type: 'TABLE_FETCH_FAILED', message: e.message});
  }
}

function* joinTable({ payload: { tableId, name } }: { payload: { tableId: string, name: string } }) {
  const apiJoinTable = (tableId: String, name: string) => (
    fetch(
      `http://localhost:8000/tables/${tableId}/players`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name
        })
      }
    ).then(response => response.json())
  );
  
  try {
    const accessToken = yield call(apiJoinTable, tableId, name);
    yield put({ type: 'JOIN_PLAYER_SUCCEEDED', payload: accessToken });
  } catch (e) {
    yield put({type: 'JOIN_PLAYER_FAILED', message: e.message});
  }
}

function* sagas() {
  yield takeLatest('CREATE_TABLE_REQUESTED' as any, createTable);
  yield takeLatest('TABLE_FETCH_REQUESTED' as any, fetchTable);
  yield takeLatest('JOIN_TABLE_REQUESTED' as any, joinTable);
}

export default sagas;
