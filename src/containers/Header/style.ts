import styled from 'styled-components'

export const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  h1 {
    color: white;
  }

  ul {
    display: flex;
    column-gap: 40px;
    li {
      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`
