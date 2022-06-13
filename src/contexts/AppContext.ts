import { createContext } from 'react';

import { User } from '../types/User';

export interface IAppContext {
  user: User | null;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);