import * as React from 'react';
import AltinnButton from '../../../../shared/src/components/AltinnButton';

export interface IRedirectComponentProvidedProps {
  redirectUrl: string;
  classes: any;
}

export class RedirectComponent extends
  React.Component<IRedirectComponentProvidedProps, any> {

  public openManualTesting = () => {
    const altinnWindow: any = window;
    const { org, service } = altinnWindow;
    // tslint:disable-next-line:max-line-length
    const url = `${altinnWindow.location.origin}/${this.props.redirectUrl}?ReturnUrl=%2Fruntime%2F${org}%2F${service}%2FManualTesting`;
    // tslint:disable-next-line:jsx-self-close
    window.open(url, '_newWindow');
  }

  public render() {

    return (
      <React.Fragment>
        <div style={{ paddingLeft: 80, paddingTop: 10 }}>
          <AltinnButton
            id='manual-test-button'
            btnText='Åpne manuell testing i nytt vindu'
            onClickFunction={this.openManualTesting}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default RedirectComponent;
