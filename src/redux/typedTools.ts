// Core
import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";

// Contracts
export type BaseContact<State, T = any> = CaseReducer<State, PayloadAction<T>>;
