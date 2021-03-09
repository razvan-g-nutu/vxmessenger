/**
 * Combines all the listening sagas and
 * it represents the entire middleware.
 */
export default function rootSaga(): Generator<import("redux-saga/effects").AllEffect<Generator<import("redux-saga/effects").AllEffect<Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>>, void, unknown>>, void, unknown>;
