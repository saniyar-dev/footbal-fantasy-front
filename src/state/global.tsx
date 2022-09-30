import {atom} from 'recoil'

export const _userEmail = atom<string | undefined>({
    key: "_userEmail",
    default: ''
})