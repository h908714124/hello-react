type HelloState = {
    name: [string, (value: string) => void];
}

type NimState = {
    checked: [boolean, (value: boolean) => void];
}

export type ContextType = {
    hello: HelloState,
    nim: NimState,
    model: any
};
