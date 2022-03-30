import { useState } from 'react';
import { Fetch, Error } from '../Action/ActionConstant';

const initialState = useState(
    {
        data: [],
        error: '',
        isLoading: true
    }
);

const RootRuducer = (state = { initialState }, action) => {

    switch (action.type) {
        case Fetch:
            {
                return state;

            }
        case Error:
            {
                return state;
            }
        default:
            {
                return state;
            }
    }
}