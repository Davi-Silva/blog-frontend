import React from 'react';

import SettingsContent from './content/settings/settingsContent.component';

import {
  H6,
  Panel,
  Main,
} from '../../../styled-components/admin.styled-components';

export default function SettingsPanel() {
  return (
    <Panel style={{ marginLeft: '13px', marginTop: '3px' }}>
      <header style={{ paddingBottom: '10px' }}>
        <H6>SETTINGS</H6>
      </header>
      <section>
        <Main>
          <SettingsContent />
        </Main>
      </section>
    </Panel>
  );
}
