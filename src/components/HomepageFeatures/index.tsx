import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import {
  RocketLaunchIcon,
  Icon,
  StackIcon,
  CodeIcon,
  ChecksIcon,
  LightbulbIcon,
  FeatherIcon
} from '@phosphor-icons/react';

type FeatureItem = {
  title: string;
  Icon: Icon;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Blazing-Fast Performance',
    Icon: RocketLaunchIcon,
    description: (
      <>
        Built with native browser APIs to minimize JavaScript overhead and keep your application's bundle size small and efficient.
      </>
    ),
  },
  {
    title: 'Comprehensive Component Suite',
    Icon: StackIcon,
    description: (
      <>
        A rich set of components including layouts, data tables, carousels, and a full suite of form inputs.
      </>
    ),
  },
  {
    title: 'Modern Developer Experience',
    Icon: CodeIcon,
    description: (
      <>
        Full ES Modules and TypeScript support with bundled types and out-of-the-box compatibility with modern frameworks like Next.js.
      </>
    ),
  },
  {
    title: 'Powerful Form Handling',
    Icon: ChecksIcon,
    description: (
      <>
        Seamlessly integrates with popular libraries like react-hook-form and includes powerful built-in validation.
      </>
    ),
  },
  {
    title: 'Accelerated Prototyping',
    Icon: LightbulbIcon,
    description: (
      <>
        Perfect for experimentation, AI interfaces, and rapidly building and testing new ideas.
      </>
    ),
  },
  {
    title: 'Light-weight',
    Icon: FeatherIcon,
    description: (
      <>
        Supports tree-shaking with all modern bundlers. Makes minimal bundle footprint due to browser API reliance.
      </>
    ),
  },
];

function Feature({title, description, Icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon weight="duotone" size={166} className={styles.featureIcon} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
