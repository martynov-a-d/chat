//---- import / export ----//
export const SetUserName = "PROFILE@@CHRCK_BOX_TOGGLE"
export const SignIn = "PROFILE@@SIGN__IN"
export const SignOut = "PROFILE@@SIGN_OUT"

export const setUserName = (elem) => ({
    type: SetUserName,
    name: elem,
})

export const signIn = () => ({
    type: SignIn,
})

export const singOut = () => ({
    type: SignOut,
})