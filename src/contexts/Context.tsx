import React from "react";
import { Context } from "../types/Context";
import { Bike } from "../types/Bikes";

export const ContextConsumer = React.createContext<Context>({
  bike: undefined,
  setBike: undefined,
});

interface ContextProviderProps {
  children: JSX.Element;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [bike, setBike] = React.useState<Bike | undefined>(undefined);

  return (
    <ContextConsumer.Provider value={{ bike, setBike }}>
      {children}
    </ContextConsumer.Provider>
  );
};
