import { createGlobalStyle } from 'styled-components';
import AltaRegular from './components/assets/fonts/Alta_regular.otf'
import AltaLight from './components/assets/fonts/Alta_light.otf'
import AltaCaption from './components/assets/fonts/Alta_caption.otf'

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'altaregular';
  src: url(${AltaRegular});
}
@font-face {
  font-family: 'altalight';
  src: url(${AltaLight});
}
@font-face {
  font-family: 'altacaption';
  src: url(${AltaCaption});
}

    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'lato', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    
    ul, li {
      list-style: none;
    }
`;