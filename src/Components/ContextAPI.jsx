import { createContext, useContext, useEffect, useReducer } from 'react'


const AppContext = createContext();


const initialState = {
    name: "",
    image: "",
    service: []
}

const Context = ({ children }) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case "HOME_UPDATE": {
                return {
                    ...state,
                    name: action.payload.name,
                    image: action.payload.image,

                }
            }
            case "ABOUT_UPDATE": {
                return {
                    ...state,
                    name: action.payload.name,
                    image: action.payload.image,

                }


            }
            case "GET_SERVICES": {
                return {
                    ...state,
                    service: action.payload
                }
            }

            default: {
                throw new Error('Something went wrong...')
            }
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);






    const UpdateHome = () => {
        return dispatch({
            type: 'HOME_UPDATE',
            payload: {
                name: " Himanshu Kumar",
                image: "./images/hero.svg"

            }

        })
    }
    const UpdateAbout = () => {
        return dispatch({
            type: 'ABOUT_UPDATE',
            payload: {
                name: "Frontend Developer",
                image: "./images/about1.svg"

            }

        })
    }



    const getServices = async () => {
        try {
            const data = await fetch(`https://reqres.in/api/users`)
            const finalData = await data.json();
            

            
            dispatch({
                type: 'GET_SERVICES',
                payload: finalData.data
            })

        } catch (error) {
            console.log('error')
        }

    }


    useEffect(() => {
        getServices()
    }, [])



    return (
        <AppContext.Provider value={{ ...state, UpdateAbout, UpdateHome }}>
            {children}
        </AppContext.Provider>
    )

}

// Global Custom hook

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { Context, useGlobalContext };

