import useLocalStorage from "./useLocalStorage";


const useDarkMode = (initTheme) => {
    const [ darkMode, setDarkMode ] = useLocalStorage('darkMode', initTheme);

    return [ darkMode, setDarkMode ];
}

export default useDarkMode;