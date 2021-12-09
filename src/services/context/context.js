import React, { createContext, useState, useContext } from "react";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [openMenu, setOpenMenu] = useState('50px');
  const [nameLogo, setNameLogo] = useState('Home');
  const [status, setStatus] = useState('');
  const [valueName, setValueName] = useState('')
  const [valueEmail, setValueEmail] = useState('')
  const [valueCpf, setValueCpf] = useState('')
  const [valueCep, setValueCep] = useState('')
  const [valueData, setValueData] = useState('')
  const [valueSenha, setValueSenha] = useState('')
  const [displayUsuariosCadastrados, setDisplayUsuariosCadastrados] = useState('none')
  const [buttonTudoOk, setButtonTudoOk] = useState('')

  return (
    <MenuContext.Provider
      value={{
        openMenu, setOpenMenu,
        nameLogo, setNameLogo,
        status, setStatus,
        valueName, setValueName,
        valueEmail, setValueEmail,
        valueCpf, setValueCpf,
        valueCep, setValueCep,
        valueData, setValueData,
        valueSenha, setValueSenha,
        displayUsuariosCadastrados, setDisplayUsuariosCadastrados,
        buttonTudoOk, setButtonTudoOk,
  
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext() {
  const context = useContext(MenuContext);
  if (!context) throw new Error("useMenuContext must be used within a MenuProvider");
  const { 
    openMenu, nameLogo, 
    setOpenMenu, setNameLogo, 
    status, setStatus,
    valueName, setValueName,
    valueEmail, setValueEmail,
    valueCpf, setValueCpf,
    valueCep, setValueCep,
    valueData, setValueData,
    valueSenha, setValueSenha,
    displayUsuariosCadastrados, setDisplayUsuariosCadastrados,
    buttonTudoOk, setButtonTudoOk,

  } = context;
  return { 
    openMenu, nameLogo, 
    setOpenMenu, setNameLogo, 
    status, setStatus,
    valueName, setValueName,
    valueEmail, setValueEmail,
    valueCpf, setValueCpf,
    valueCep, setValueCep,
    valueData, setValueData,
    valueSenha, setValueSenha,
    displayUsuariosCadastrados, setDisplayUsuariosCadastrados,
    buttonTudoOk, setButtonTudoOk,
    
  };
}