import type {ReactNode} from 'react';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  return (
    <Layout title="Chaos Foundry" description="Chaos Foundry">
      <main>
        <div style={{padding: '2rem', textAlign: 'center'}}>
          <h1>Chaos Foundry</h1>
          <p>Coming soon.</p>
        </div>
      </main>
    </Layout>
  );
}
