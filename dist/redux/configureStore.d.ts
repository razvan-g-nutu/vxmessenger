/** Store */
declare const store: import("redux").Store<import("./store").default, import("redux-actions").Action<import("./interfaces").IPayload<any>>> & {
    dispatch: unknown;
};
export default store;
