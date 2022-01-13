import useLocalStorage from "./useLocalStorage";


const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useLocalStorage('Alex', false);

    return [ darkMode, setDarkMode ];
}

export default useDarkMode;