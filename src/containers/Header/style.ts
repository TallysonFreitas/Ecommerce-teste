import styled from 'styled-components'

export const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;

  h1 {
    color: white;
    font-size: 40px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  ul {
    display: flex;
    column-gap: 36px;
    li {
      transition: all ease 0.1s;
      &:hover {
        transform: translateY(4px);
      }
      a {
        padding: 4px;
        font-size: 22px;
        &:hover {
          color: #ccc;
        }
      }
    }
  }
`
