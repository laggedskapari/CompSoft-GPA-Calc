import { Database } from '@/plugins/firebase';
import { getDoc, doc } from 'firebase/firestore';

export default async function ({store, route, redirect}){
  const currentUser = store.state.Authentication.user;
  const AuthenticatedRoutes = /\/user\/*/g;

  if(!currentUser && route.path.match(AuthenticatedRoutes)){
    redirect('/');
  }else if( currentUser && !route.path.match(AuthenticatedRoutes)){
    const currentUserDataSnapshot = await getDoc(doc(Database, "CSTUsersUID", currentUser.uid));
    if(currentUserDataSnapshot.exists()){
      redirect(`/user/${currentUserDataSnapshot.data().Username}`);
    }else {
      alert('Error');
    }
  }
}
