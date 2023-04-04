import { createContext, useContext, useState, useEffect } from "react";
import Loading from 'react-fullscreen-loading';

const StateContext = createContext({
    loading: null,
    setLoading: () => { },
})

export const ContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);


    return (
        <StateContext.Provider value={{
            setLoading,
            loading
        }}>

            <Loading loading={loading} background="#ffffffb8" loaderColor="#45b0c9" />
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
