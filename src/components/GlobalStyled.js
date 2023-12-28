import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.link {
  text-decoration: none;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
  margin-left: 4px;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const theme = {
  colors: {
    white: '#F2EFEE',
    black: '#212121',
    light: '#E8DBD1',
    lightBlue: '#87CEEB',
    purple: '#320D51',
    red: 'tomato',
    green: '#8BD538',
    darkGreen: '#488026',
  },

  radii: {
    s: '4px',
    m: '12px',
    l: '16px',
  },

  spacing: value => `${value * 4}px`,
};
