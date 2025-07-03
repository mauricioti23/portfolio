import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Remover marcadores de listas */
  ul, ol {
    list-style: none;
    padding-left: 0;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;

    @media (max-width: 768px) {
      padding-top: 16px;
    }

    /* Fonte Inter aplicada no body */
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }

`
