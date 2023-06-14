type HelloState = {
    name: [string, (value: string) => void];
}

export type ContextType = {
    hello: HelloState,
    nim: HelloState,
};
