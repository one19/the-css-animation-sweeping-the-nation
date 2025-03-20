import { MDXProvider } from '@mdx-js/react';
import Intro from './slides/intro.mdx';
import Setup from './slides/setup.mdx';
import DoneInJS from './slides/doneInJS.mdx';
import { Deck } from './Deck';
import { mdxComponents } from './MDXComponents';

const App = () => (
  <MDXProvider components={mdxComponents}>
    <Deck
      slides={[<Intro key="1" />, <Setup key="2" />, <DoneInJS key="3" />]}
    />
  </MDXProvider>
);

export default App;
