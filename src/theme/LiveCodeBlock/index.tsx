import React, {type ReactNode} from 'react';
import {Provider} from 'koval-ui';
import LiveCodeBlock from '@theme-original/LiveCodeBlock';
// @ts-expect-error Docusaurus fail
import type LiveCodeBlockType from '@theme/LiveCodeBlock';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LiveCodeBlockType>;

export default function LiveCodeBlockWrapper(props: Props): ReactNode {
  return (
    <>
      <LiveCodeBlock {...props} />
    </>
  );
}
