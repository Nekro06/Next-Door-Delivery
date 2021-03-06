import  React, {useState, createRef} from 'react';

export const UserContext = React.createContext({user: {}, 
                        setUser: ((value) => {})
                    });
export const TypeContext = React.createContext({types: '',
                        setTypes: ((value) => {})
                    });

export const StoreContext = React.createContext({store: {},
                        setStore: ((value) => {}) });

export const ProductContext = React.createContext({product: {},
                        setProduct: ((value) => {}) });

export const ListProductContext = React.createContext({listProduct: {},
                        setListProduct: ((value) => {}) });

export const filterTypeContext = React.createContext({filterType: '',
                        setFilterType: ((value) => {})
                    });

export const UserReqContext = React.createContext({userReq: '',
                        setUserReq: ((value) => {})
                    });