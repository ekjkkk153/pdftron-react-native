import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  BackHandler,
  Alert
} from 'react-native';

import { DocumentView, RNPdftron, Config } from 'react-native-pdftron';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  onLeadingNavButtonPressed = async () => {
    console.log('leading nav button pressed');
    // if (this._viewer) {
    //   this._viewer.setStampImageData().then((annotationId, pageNumber, stampImageDataUrl) => {
    //     annotationID = '75911d3a-f1fa-7a4f-8137-5885e3a4c4ae',
    //     pageNumber = 1,
    //     stampImageData = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
    //   });
    // }

    //if (Platform.OS === 'ios') {
      Alert.alert(
        'App',
        (await this._viewer.exportAnnotations())
      )
    //} else {
    //  BackHandler.exitApp();
    //}
  }

  onDocumentLoaded = () => {
    if (this._viewer) {
      const xfdf = 
      `<?xml version="1.0" encoding="UTF-8"?>
  <xfdf xmlns="http://ns.adobe.com/xfdf/" xml:space="preserve">
  <annots>
      <ink style="solid" width="20" color="#FF0000" opacity="1" creationdate="D:20250220053408Z" flags="print,locked" IT="InkHighlight" date="D:20250220053408Z" name="2f2d043a-7ddd-46a3-b41e-9c096cf6c0a3" page="0" rect="84.3995,380.3787,327.7555,627.5387" title="">
          <inklist>
              <gesture>94.3995,390.3787;97.7709,399.6333;102.8281,408.888;103.5653,410.2373;110.4137,424.032;118.8423,437.4933;120.0787,439.4681;129.7993,455.1613;143.285,474.512;145.1148,477.1376;158.4563,493.0213;174.4705,513.2133;176.9017,516.2787;193.0133,533.4053;211.5561,553.5973;214.5109,556.815;230.0988,572.1067;246.9559,588.092;249.5463,590.5484;262.1273,600.712;274.77,609.9667;276.5731,611.2865;282.3557,615.0147;286.57,617.5387;289.0985,616.6973;287.4128,611.6493;282.3557,602.3947;274.77,589.7747;273.6353,587.8869;266.3415,575.472;256.2273,559.4867;254.7424,557.1399;243.5845,540.136;230.9417,520.7853;228.9839,517.7888;219.1418,502.276;208.1847,482.9253;206.5451,480.0298;197.2276,465.2573;187.1133,447.5893;185.593,444.9336;178.6848,430.7627;171.942,417.3013;170.9055,415.2321;166.8849,407.2053;165.1992,400.4747;164.9343,399.417;164.3563,396.268;166.8849,395.4267;174.4705,399.6333;183.7419,406.364;185.2184,407.4359;195.5419,415.6187;209.0275,426.556;210.9333,428.1017;225.0417,440.0173;241.0559,455.1613;243.4597,457.4345;252.8559,468.6227;263.813,480.4013;265.4844,482.1981;270.5558,488.8147;275.6129,493.8627;278.9843,496.3867;279.8272,497.228;278.9843,495.5453;274.77,489.656;274.1418,488.7781;269.7129,482.084;262.9701,471.988;261.9394,470.4448;254.5416,460.2093;245.2702,447.5893;243.8051,445.5951;235.9988,434.128;228.4131,423.1907;227.3893,421.7145;224.1989,416.46;221.6703,412.2533;220.8275,408.888;221.6703,408.0467;224.1989,409.7293;229.256,413.0947;235.9988,416.46;244.4273,421.508;245.7914,422.325;253.6987,427.3973;261.2844,431.604;262.4719,432.2625;268.8701,435.8107;273.9272,438.3347;276.4557,439.176;278.1415,439.176;278.1415,437.4933;278.1415,435.8107;278.1415,434.128;277.2986,431.604;274.77,428.2387;273.0843,424.8733;270.5558,421.508;269.7129,418.984;268.8701,417.3013;268.8701,416.46;270.5558,417.3013;273.0843,418.1427;277.2986,420.6667;284.8843,424.032;286.0437,424.5464;291.6271,427.3973;298.3699,430.7627;299.4092,431.2814;305.1127,433.2867;311.0127,434.9693;311.8978,435.2217;314.3841,434.9693;316.0698,434.128;316.9127,433.2867;317.7555,430.7627;317.7555,429.08;316.9127,426.556;316.9127,424.032;316.0698,421.508;315.227,418.984;315.227,417.3013;316.0698,415.6187;316.9127,415.6187</gesture>
          </inklist>
          <apref blend-mode="multiply" y="627.5387" x="84.3995" gennum="0" objnum="1041" />
      </ink>
      <text color="#FFCD45" opacity="1" creationdate="D:20250220053410Z" flags="print,locked,nozoom,norotate" date="D:20250220053415Z" name="4856632d-0f4c-4253-ba25-4992f1b35a74" icon="Comment" page="0" rect="206.499,186.1267,226.499,206.1267" title="">
          <popup date="D:20250220053410Z" page="0" rect="226.499,206.1267,296.499,276.1267" />
          <contents>테스트</contents>
          <apref y="206.1267" x="206.499" gennum="0" objnum="1046" />
      </text>
      <sound page="0" rect="345,286,376,317" name="f528792a-2d99-dfed-1300-34baecb86912" icon="SoundWave"
            flags="print,norotate,locked" subject="Sound" color="#000000" date="D:20250220143907+09'00'" creationdate="D:20250220143907+09'00'"
            bits="null" channels="null" encoding="null" rate="null" >
          <data mode="raw" encoding="hex" length="null" filter="FlateDecode" />
      </sound>
  </annots>
  <pages>
      <defmtx matrix="1.333333,0.000000,0.000000,-1.333333,0.000000,982.677333"/>
  </pages>
  <pdf-info import-version="4" version="2"
      xmlns="http://www.pdftron.com/pdfinfo"/>
  </xfdf>`;
      this._viewer.importAnnotations(xfdf);
    }
  }

  onAnnotationChanged = ({action, annotations}) => {
    // console.log('action', action);
    // console.log('annotations', annotations);
    // if (this._viewer) {
    //   this._viewer.exportAnnotations({annotList: annotations}).then((xfdf) => {
    //     console.log('xfdf for annotations', xfdf);
    //   });
    // }
  }

  onZoomChanged = ({zoom}) => {
    // console.log('zoom', zoom);
  }

  onExportAnnotationCommand = ({action, xfdfCommand}) => {
    console.log('action', action);
    console.log('xfdfCommand', xfdfCommand);
  }

  setStampImageData = ({annotationId, pageNumber, stampImageDataUrl}) => {
    annotationID = '75911d3a-f1fa-7a4f-8137-5885e3a4c4ae',
    pageNumber = 1,
    stampImageData = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
  }

  render() {
    const path = "https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf";
    const myToolbar = {
      [Config.CustomToolbarKey.Id]: 'myToolbar',
      [Config.CustomToolbarKey.Name]: 'myToolbar', 
      [Config.CustomToolbarKey.Icon]: Config.ToolbarIcons.FillAndSign,
      [Config.CustomToolbarKey.Items]: [Config.Tools.annotationCreateArrow, Config.Tools.annotationCreateCallout, Config.Buttons.undo]
    };

    return (
      <DocumentView
          ref={(c) => this._viewer = c}
          // hideDefaultAnnotationToolbars={[Config.DefaultToolbars.Annotate]}
          // annotationToolbars={[Config.DefaultToolbars.Annotate, myToolbar]}
          hideAnnotationToolbarSwitcher={false}
          hideTopToolbars={false}
          hideTopAppNavBar={false}
          document={path}
          padStatusBar={true}
          showLeadingNavButton={true}
          leadingNavButtonIcon={Platform.OS === 'ios' ? 'ic_close_black_24px.png' : 'ic_arrow_back_white_24dp'}
          onLeadingNavButtonPressed={this.onLeadingNavButtonPressed}
          onDocumentLoaded={this.onDocumentLoaded}
          onAnnotationChanged={this.onAnnotationChanged}
          onExportAnnotationCommand={this.onExportAnnotationCommand}
          onZoomChanged={this.onZoomChanged}
          readOnly={false}
          disabledElements={[Config.Buttons.userBookmarkListButton]}
          disabledTools={[Config.Tools.annotationCreateLine, Config.Tools.annotationCreateRectangle]}
          fitMode={Config.FitMode.FitPage}
          layoutMode={Config.LayoutMode.Continuous}
          setStampImageData = {this.setStampImageData}
          openOutlineList = {true}
          defaultEraserType={Config.EraserType.hybrideEraser}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
