import React from 'react';
import * as kovalComponents from 'koval-ui';
import {AlienIcon, IconProps, FlyingSaucerIcon} from '@phosphor-icons/react';
import * as cellDemoComponents from './../../components/cellDemoComponents';
import {generateData, mocks, demoColumns} from '../../data-table-mocks';

// Add react-live imports you need here
const ReactLiveScope: unknown = {
  React,
  ...React,
  ...kovalComponents,
  ...cellDemoComponents,
  AlienIcon: (props: IconProps) => <AlienIcon weight="fill" {...props} />,
  FlyingSaucerIcon: (props: IconProps) => <FlyingSaucerIcon weight="fill" {...props} />,
  generateData,
  mocks,
  demoColumns,
};

export default ReactLiveScope;
