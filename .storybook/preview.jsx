import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "@styles/GlobalStyle";
import * as mixin from "@styles/mixin";
import color from "@styles/color";

const theme = {mixin, color};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff'
      }
    ]
  }
}

export const decorators = [
  /**
     * @param Story 스토리북 UI에서 현재 선택한 컴포넌트에 대한 렌더링 이벤트
  */
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Story/>
    </ThemeProvider>
  )
]

const Wrapper = styled.div`
  width: 100%;
`