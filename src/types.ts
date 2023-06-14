type HelloState = {
    name: [string, (value: string) => void];
}

type NimState = {
    name: [string, (value: string) => void];
    checked: [boolean, (value: boolean) => void];
}

export type ContextType = {
    hello: HelloState,
    nim: NimState,
};
