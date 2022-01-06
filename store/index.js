import JWTDecoder from 'jwt-decode';
import CookieParser from 'cookieparser';

export const actions = {
  nuxtServerInit({ commit }, { req }){
    if(process.server && process.static) return;
    if(!req.headers.cookie) return;

    const Parsed = CookieParser.parse(req.headers.cookie);
    const userAccessToken = Parsed.AccessToken;

    if(!userAccessToken) return;

    const Decoded = JWTDecoder(userAccessToken);
    if(Decoded){
      commit('Authentication/SET_USER', {
        uid: Decoded.user_id,
        email : Decoded.email,
        emailVerified: Decoded.emailVerified,
        photoURL : Decoded.photoURL
      })
    }
  }
}
