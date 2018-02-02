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

    this.flipPanel = this.flipPanel.bind(this);
  }

  componentDidMount() {
    injectGlobal(style.sReset);
  }

  flipPanel() {
    this.setState({
      hideActionPanel: ! this.state.hideActionPanel,
    });
  }

  render() {
    const { hideActionPanel } = this.state;

    const Panel = ({ children }) => {
      const PanelComponent = hideActionPanel ? style.Panel : style.PanelBlue;

      return (
        <PanelComponent>{ children }</PanelComponent>
      );
    };

    const Ticker = () => (
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
          <style.ContainerPadded>
            <style.CallToAction onClick={this.flipPanel}>Take Action</style.CallToAction>
          </style.ContainerPadded>
        </style.CenterPosition>
      </style.Container>
    );

    const ActionItem = ({ title, link }) => (
      <style.ListItem>
        <a href={link} target="_blank">{title}</a>
      </style.ListItem>
    );

    const Action = () => (
      <style.ContainerPadded>
        <style.ListHeaderCopy>Ways to get involved</style.ListHeaderCopy>
          <style.List>
            <ActionItem title="Let America Vote" link="https://www.letamericavote.org/" />
            <ActionItem title="Run For Something" link="https://www.runforsomething.net/" />
            <ActionItem title="Flippable" link="https://flippable.org/" />
            <ActionItem title="Swing Left" link="https://swingleft.org/" />
          </style.List>
        <style.ListHeaderCopy>About</style.ListHeaderCopy>
        <style.ListCopy>
          Created by <a href="https://twitter.com/@itsjoekent">@itsjoekent</a>
        </style.ListCopy>
      </style.ContainerPadded>
    );

    const Content = () => {
      const ContentComponent = hideActionPanel ? Ticker : Action;

      return (
        <Panel>
          <ContentComponent />
        </Panel>
      );
    };

    return (
      <Content />
    );
  }
}

export default App;
