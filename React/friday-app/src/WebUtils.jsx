import styled from 'styled-components'

function TitleComponent (){
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
return(
  <Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper>
);
}

function H1Component (){
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #BF4F74;
    `;
    
    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;
    
    // Use Title and Wrapper like any other React component – except they're styled!
    return(
        <Title>
          Hello H1
        </Title>
    );
    }

    function Button(){
      const Title = styled.button`
      font-size: 1.5em;
      text-align: center;
      color: #BF4F74;
    `;

    return (<Title>
      button
    </Title>)
    }

export {
    TitleComponent, 
    H1Component, 
    Button
}