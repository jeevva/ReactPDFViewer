import React from 'react';
import CustomNavigation, {
  CustomPrevButton,
  CustomNextButton,
  CustomPages,
} from './Navigation';

import PDFViewer from './mgr-pdf-viewer-react';
import sources from './source';

import './App.css';

const exampleWrapperStyle = {
  width: '50%',
};

const FromUrl = () => (<div style={exampleWrapperStyle}>
  <h1>Fetch PDF by URL</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}/>
</div>);

const FromBase64 = () => (<div style={exampleWrapperStyle}>
  <h1>Load PDF from base 64 string</h1>
  <PDFViewer
    document={{
      base64: sources.base64
    }} />
</div>);

const WithCustomLoader = () => (<div style={exampleWrapperStyle}>
  <h1>Custom loader element</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    loader={<h2 style={{color: '#fa5b35'}}>Custom loader element</h2>}/>
</div>);

const WithCustomStartingPage = () => (<div style={exampleWrapperStyle}>
  <h1>Custom starting page</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    page={5} />
</div>);

const WithCustomScale = () => (<div style={exampleWrapperStyle}>
  <h1>Custom scale</h1>
  <PDFViewer
    document={{
      base64: sources.base64
    }}
    scale={0.5} />
</div>);

const WithCustomNavigationStyles = () => (<div style={exampleWrapperStyle}>
  <h1>Custom css classes</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    css="customViewer"
    navigation={{
      css: {
        previousPageBtn: 'customPrevBtn',
        nextPageBtn: 'customNextBtn',
        pages: 'customPages',
        wrapper: 'customWrapper'
      }
    }} />
</div>);

const WithCustomNavigationElements = () => (<div style={exampleWrapperStyle}>
  <h1>Custom navigation elements</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    css="customViewer"
    navigation={{
      elements: {
        previousPageBtn: CustomPrevButton,
        nextPageBtn: CustomNextButton,
        pages: CustomPages
      }
    }} />
</div>);

const WithCustomNavigation = () => (<div style={exampleWrapperStyle}>
  <h1>Custom navigation</h1>
  <PDFViewer
    document={{
      url: sources.url
    }}
    css="customViewer"
    navigation={CustomNavigation} />
</div>);

class WithDynamicScale extends React.Component {
  state = {
    scale: 1.0,
  }

  increaseScale = () => this.setState(({ scale }) => ({ scale: Number((scale + 0.1).toFixed(1)) }))
  decreaseScale = () => this.setState(({ scale }) => ({ scale: Number((scale - 0.1).toFixed(1)) }))

  render() {
    return (
      <div style={exampleWrapperStyle}>
        <h1>Dynamic scale</h1>
        <button onClick={this.decreaseScale}>-</button>
        <span>Scale: {this.state.scale}</span>
        <button onClick={this.increaseScale}>+</button>
        <PDFViewer
          document={{
            url: sources.url
          }}
          scale={this.state.scale} />
      </div>
    );
  }
}

const WithOnDocumentClick = () => (
  <div style={exampleWrapperStyle}>
    <h1>With onDocumentClick handler</h1>
    <PDFViewer
      document={{
        url: sources.url
      }}
      onDocumentClick={() => alert('Document was clicked')}
      css="customViewer"
      navigation={CustomNavigation} />
  </div>
);

const WithoutNavigation = () => (
  <div style={exampleWrapperStyle}>
    <h1>Without Navigation</h1>
    <PDFViewer
      document={{
        url: sources.url
      }}
      hideNavbar
      css="customViewer" />
  </div>
);

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

export default () => (
  <div style={wrapperStyle}>
    <FromUrl />
    <FromBase64 />
    <WithCustomLoader />
    <WithCustomStartingPage />
    <WithCustomScale />
    <WithDynamicScale />
    <WithCustomNavigationStyles />
    <WithCustomNavigationElements />
    <WithCustomNavigation />
    <WithOnDocumentClick />
    <WithoutNavigation />
  </div>
);
