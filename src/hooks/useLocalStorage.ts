export const useLocalStorage = () => {

    const get = (key: string) => {
        const localstorageValue = localStorage.getItem(key);
        return localstorageValue ? JSON.parse(localstorageValue) : undefined;
    };

    const set = (key: string, value: unknown) =>
        localStorage.setItem(key, JSON.stringify(value));

    return { get, set };
};
