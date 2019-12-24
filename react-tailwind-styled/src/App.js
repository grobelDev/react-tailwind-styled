import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
// Style 1: Only requires the tw import.
const Spacer = tw.div`py-4`;
const Paragraph = tw.p`flex items-center py-8 justify-center text-xl text-white bg-blue-500`;
// Style 2: Requires both the styled and tw imports.
const Container = styled.div`
  ${tw`flex justify-center`}
`;
const Button = styled.button`
  ${tw`px-8 py-4 text-xl font-semibold text-blue-700 bg-transparent border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent`}
`;
function App() {
  return (
    <div className='App'>
      <Spacer></Spacer>
      <Paragraph>
        Hello Create React App + Tailwind + Styled Components!
      </Paragraph>
      <Container>
        <Button>Button</Button>
      </Container>
    </div>
  );
}
export default App;
