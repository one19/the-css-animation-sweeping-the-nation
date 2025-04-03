import { MDXProvider } from '@mdx-js/react';
import Intro from './slides/intro.mdx';
import Setup from './slides/setup.mdx';
import LayingGroundwork from './slides/layingGroundwork.mdx';
import DoneInJS from './slides/doneInJS.mdx';
import CSSIdea from './slides/theCSSIdea.mdx';
import CSSAside1 from './slides/theCSSAside1.mdx';
import CSSAside2 from './slides/theCSSAside2.mdx';
import WaitCrap from './slides/waitCrap.mdx';
import WhyItDoesntWork from './slides/whyItDoesntWork.mdx';
import Compromise from './slides/compromise.mdx';
import Finale from './slides/finale.mdx';
import WrapUp from './slides/wrapUp.mdx';
import { Deck } from './Deck';
import { mdxComponents } from './MDXComponents';

const App = () => (
  <MDXProvider components={mdxComponents}>
    <Deck
      slides={[
        <Intro key="1" />,
        <Setup key="2" />,
        <LayingGroundwork key="3" />,
        <DoneInJS key="4" />,
        <CSSIdea key="5" />,
        <CSSAside1 key="6" />,
        <CSSAside2 key="7" />,
        <WaitCrap key="8" />,
        <WhyItDoesntWork key="9" />,
        <Compromise key="10" />,
        <Finale key="11" />,
        <WrapUp key="12" />,
      ]}
    />
  </MDXProvider>
);

export default App;
