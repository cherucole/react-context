import React, {createContext} from 'react';

const Context = {
  firstname: '',
  lastname: '',
  backgroundColor: '',
};

const context = createContext(Context);
export default context;
