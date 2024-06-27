// Firebase Imports
import { auth, db } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth';
import { ref, get, set, update } from 'firebase/database';

const state = {
    userId: null,
    userData: null,
}

const mutations = {
    setUserId(state, payload) {
        console.log('Setting user id', payload);
        state.userId = payload;
    },
    setUserData(state, payload) {
        console.log('Setting user data', payload);
        state.userData = payload;
    }
}

const actions = {
    async signIn(context, payload) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, payload.email, payload.password);
          context.commit('setUserId', userCredential.user.uid);
          await context.dispatch('syncUserData');
        } catch (error) {
          throw new Error(error.message || 'Failed to sign in');
        }
      },
      async signOut(context) {
        try {
          await signOut(auth);
          context.commit('setUserId', null);
          context.commit('setUserData', null);
        } catch (error) {
          throw new Error(error.message || 'Failed to sign out');
        }
      },
      async signUp(context, payload) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
          context.commit('setUserId', userCredential.user.uid);
    
          delete payload.password;
          await context.dispatch('saveUserData', payload);
        } catch (error) {
          throw new Error(error.message || 'Failed to sign up');
        }
      },
      async saveUserData(context, payload) {
        const userRef = dbRef(db, 'users/' + context.state.userId);
        try {
          await set(userRef, payload);
          await context.dispatch('syncUserData');
        } catch (error) {
          throw new Error(error.message || 'Failed to save user data');
        }
      },
    async updateUserData(context, payload) {
        console.log('Updating user', payload);
        const userRef = ref(db, 'users/' + context.state.userId);
        
        await update(userRef, payload)
            .then(() => {
                console.log('User data updated');
                context.dispatch('syncUserData');
            })
            .catch((error) => {
                console.log('Error updating user data', error);
                throw new Error(error.message || 'Failed to update user data');
            });
    },
    async syncUserData(context) {
        console.log('Syncing user data');
        const userRef = ref(db, 'users/' + context.state.userId);
        
        await get(userRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log('User data retrieved', snapshot.val());
                    context.commit('setUserData', snapshot.val());
                } else {
                    console.log('No user data found');
                }
            })
            .catch((error) => {
                console.log('Error syncing user data', error);
                throw new Error(error.message || 'Failed to sync user data');
            });
    }
}

const getters = {
    userId(state) {
        return state.userId;
    },
    userData(state) {
        return state.userData;
    },
    isAuthenticated(state) {
        return !!state.userId;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}