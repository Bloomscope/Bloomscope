import {createAuthProvider} from 'react-token-auth';


export const {useAuth, authFetch, login, logout, getSession, getSessionState} =
    createAuthProvider({
        accessTokenKey: 'access_token',
        getAccessToken: (token) => token.access_token
        // onUpdateToken: (token) => fetch('/api/login', { //refresh??
        //     method: 'POST',
        //     body: token.access_token
        // })
        // .then(r => r.json())
    });