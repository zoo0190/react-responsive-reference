import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { PC, Tablet, Mobile } from './MediaQuery';

function App() {
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width:321px) and (max-width:1023px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:320px)',
  });

  return (
    <div className="App">
      {isPc && <div>PC</div>}
      {isTablet && <div>Tablet</div>}
      {isMobile && <div>Mobile</div>}
      <PC>
        <div>PC크기인 경우 나옵니다</div>
      </PC>
      <Tablet>
        <div>Tablet크기인 경우 나옵니다</div>
      </Tablet>
      <Mobile>
        <div>Mobile크기인 경우 나옵니다</div>
      </Mobile>
    </div>
  );
}

export default App;
