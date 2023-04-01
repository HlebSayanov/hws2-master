const initState = {
    themeId: 1,
}
export type initStateTypeHW12 = typeof initState

export const themeReducer = (state = initState, action: ChangeThemeIdType):initStateTypeHW12=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
        return {...state, themeId: action.id}
        default:
            return state
    }
}

type ChangeThemeIdType = {
    type:'SET_THEME_ID',
    id:number
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id } as const) // fix any
