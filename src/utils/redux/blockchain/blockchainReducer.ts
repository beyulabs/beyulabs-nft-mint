import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../store';

// Type for our state
export interface AuthState {
  loading: boolean,
  modal:boolean,
  account: any,
  smartContract: any,
  errorMsg: string,
};

// Initial state
const initialState: AuthState = {
  loading: false,
  modal: false,
  account: null,
  smartContract: null,
  errorMsg: '',
};

export const blockchainSlice = createSlice({
  name: 'blockchain',
  initialState,
  reducers: {
    
    setLoading(state) {
      state.loading = true;
      state.errorMsg = ''
    },

    setConnectedAccount(state, action){
      state.loading = false;
      state.account = action.payload.account;
      state.smartContract =  action.payload.smartContract
      state.errorMsg = ''
    },

    failedConnection(state, action){
      state.loading = false
      state.account = null
      state.smartContract = null
      state.errorMsg = action.payload
    },

    setModal(state, action){
      state.modal = action.payload
    }
  },
});//366

export const { setConnectedAccount, setLoading, failedConnection, setModal } = blockchainSlice.actions;

export const selectAccountState = (state: AppState) => state.blockchain.account;
export const selectContractState = (state: AppState) => state.blockchain.smartContract;
export const selectLoadingState = (state: AppState) => state.blockchain.loading;
export const selectErrorState = (state: AppState) => state.blockchain.errorMsg;
export const selectModalState = (state: AppState) => state.blockchain.modal;

export default blockchainSlice.reducer;