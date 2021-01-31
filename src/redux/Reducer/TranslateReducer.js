const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE';

let initialState = {
    setLanguage: 'cz',

};

export const TranslateReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_LANGUAGE:
            return {
                ...state,
                setLanguage: action.lang
            };
        default: 
        return state
    }
};


//action creators
export const updateLanguage = (lang) => {
    return {type: UPDATE_LANGUAGE, lang}
};