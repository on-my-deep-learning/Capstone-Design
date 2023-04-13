import {create} from 'zustand';

const useStore = create(set => ({
  set({storeId}) {
    set({storeId: id});
  },
}));
export default useStore;
