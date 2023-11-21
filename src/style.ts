import styled, { createGlobalStyle } from 'styled-components'

export const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0px;
  box-sizing:border-box;
  list-style:none;
}
`

export const ContainerPrincipal = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  width: 100%;
  background-color: #f44;
  height: 100vh;
`
