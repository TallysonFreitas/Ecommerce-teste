import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0px;
  box-sizing:border-box;
  list-style:none;
  font-family:'Poppins', sans-serif;
}

body{
  background-color:#111144;
}
`

export const ContainerPrincipal = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  width: 100%;
  height: 100vh;
`
