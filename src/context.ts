import React from 'react';
import { ContextType } from './types';

const Context = React.createContext<ContextType>({} as ContextType);

export default Context;
