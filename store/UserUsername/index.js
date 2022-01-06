import { Database } from '@/plugins/firebase';
import { doc, getDoc } from 'firebase/firestore';

export const state = () => ({
  userUsername : null
});

export const mutations = {
  SET_USERUSERNAME : (state, userData) => {
    state.userUsername = userData
  }
};

export const actions = {
  async getUserUsername({ commit }, currentUserUID){
    try{

      const userDataSnapshot = await getDoc(doc(Database, "CSTUsersUID", currentUserUID));
      if(userDataSnapshot.exists()){
        console.log(userDataSnapshot.data().Username);
        commit('SET_USERUSERNAME', userDataSnapshot.data().Username)
      }else {
        console.log("Error!!!!!!");
      }

    }catch (e){
      throw e;
    }
  }
};

export const getters = {
  loadUserUsername(state){
    return state.userUsername;
  }
}


