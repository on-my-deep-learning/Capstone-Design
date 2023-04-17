import {create} from 'zustand';

const useStore = create(set => ({
  id: '',
  setId: id => set({id}),
  token: '',
  setToken: token => set({token}),
}));

export default useStore;
