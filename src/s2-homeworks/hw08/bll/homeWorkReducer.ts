import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            // sort() создаёт новый массив? или нужно в ручную?...
            const stateCopy = [...state]
            if (action.payload === 'up') {
                stateCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    } else if (a.name < b.name) {
                        return -1
                    } else {
                        return 0
                    }
                })
            }
            if (action.payload === 'down') {
                stateCopy.sort((a, b) => {
                    if (a.name > b.name) {
                        return -1
                    } else if (a.name < b.name) {
                        return 1
                    } else {
                        return 0
                    }
                })
            }
            return stateCopy
            // need to fix
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
            return state.filter(el => el.age > 18) // need to fix
        }
        default:
            return state
    }
}
