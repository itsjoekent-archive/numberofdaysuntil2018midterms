import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';
import Timer from './Timer';
import * as style from './style';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideActionPanel: true,
    };
  }

  componentDidMount() {
    injectGlobal(style.sReset);
  }

  render() {
    const { hideActionPanel } = this.state;

    const Panel = ({ children }) => {
      const PanelComponent = hideActionPanel ? style.Panel : style.PanelBlue;

      return (
        <PanelComponent>{ children }</PanelComponent>
      );
    };

    return (
      <Panel>
        <style.Container>
          <style.CenterPosition>
            <style.Hero>
              <Timer presentation={style.HeroCopy} />
            </style.Hero>
            <style.ContainerPadded>
              <style.SubheaderCopy>
                days until the
              </style.SubheaderCopy>
              <style.SubheaderCopyBold>
                2018 midterms
              </style.SubheaderCopyBold>
            </style.ContainerPadded>
          </style.CenterPosition>
          <style.CenterOffsetPosition>
            <style.ContainerPadded>
              <style.ListHeaderCopy>Take action</style.ListHeaderCopy>
            </style.ContainerPadded>
          </style.CenterOffsetPosition>
        </style.Container>
      </Panel>
    );
  }
}

export default App;
