import { Authenticator } from '@/plugins/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Cookie from 'js-cookie';

export const state = () => ({
  user : null
});

export const mutations = {
  SET_USER: (state, currentUser) => {
    state.user = currentUser;
  }
}

export const actions = {

  async userSignUp({ commit }, UserCredentials){
    try{

      await createUserWithEmailAndPassword(Authenticator, UserCredentials.email, UserCredentials.password);
      const UserToken = await Authenticator.currentUser.getIdToken();
      const { email, photoURL, emailVerified, uid } = Authenticator.currentUser;
      Cookie.set('AccessToken', UserToken);
      commit('SET_USER', { email, uid, emailVerified, photoURL});

    }catch (e) {
      throw e;
    }
  },

  async userSignIn({ commit }, UserCredentials){

    try {

      await signInWithEmailAndPassword(Authenticator, UserCredentials.email, UserCredentials.password);
      const UserToken = await Authenticator.currentUser.getIdToken();
      const { email, uid, emailVerified, photoURL } = Authenticator.currentUser;
      Cookie.set('AccessToken', UserToken);
      commit('SET_USER', { email, uid, emailVerified, photoURL});

    }catch (e) {

      throw e;

    }

  }

}

export const getters = {
  getCurrentUserUID(state){
    return state.user.uid;
  }
}




