# VXMESSENGER

This project is about providing messaging and video interactions for the customers 
of VISIT-X, the german leading Live Sex Cams & Sexchat Community.

## Release Notes

Properties for our messenger:
- id? [string] - unique identification for the configured instance of messenger.

- language [string] - case insensitive (en, de, es, EN, DE, ES). This value is mandatory.

  __Note__: Please note that when obtaining "clientId" + "server" pair (in case one wants to start the messenger this way),
  the same language should be passed to the appropriate service. Otherwise, some of the messages
  we are getting (and displaying) from the vchat-core will come in default language (en), producing an unpleasant mix.

- initialVideoChatType?: ["LIVECHAT", "FREECHAT", "LIVE_PREVIEW", "VOYEUR_CHAT", "NO_DOWNSTREAM", "GROUP_CHAT"] - if the parent platform sets this value, the newly-opened messenger will start directly in the given active stream. This feature is independent to clientId, as it can be used with both clientId or webtoken. This property can be used when the client clicks on a "Start voyeur" button from the parent platform and the messenger will start with initialVideoChatType with "VOYEUR_CHAT". If no value is set, the messenger will start in its minified state, without any stream.

- theme?: [PartialTheme] - if this value is set, the parent platform can completely configure messenger's appearance to the client. It contains information about the font (type, dimensions), the dimensions for certain elements and all the colors used in the messenger. Each color property is a string and expects the color in hexa value. If no value is set for colors or dimensions, the fallback theme will be the design from visit-x.

- preferenceStore?: [IPreferenceStore] - this property represents the custom implementation for handling preferences of the VXMessenger. interface IPreferenceStore requires the implementation of two functions getPreference: (preferenceName: PreferenceName) => boolean | number | undefined, and setPreference: (preferenceName: PreferenceName, value: boolean | number, instanceId?: string) => void. This property is optional, if no property is passed to VXMessenger the default implementation will apply.

- connection: [ConnectionWithToken | ConnectionWithChat] - this property represents the data that initiates the messenger's workflow - webtoken type of connection or clientId and server type. The first type of connection (ConnectionWithToken) will contain the webtoken, userKey and partner's information (key and id) and will use the vxcontrol-client-lib as main API. The second type of connection (ConnectionWithChat) will contain the clientId and server and won't use the vxcontrol-client-lib, only the vchat-core and vchat-player. This second type of connection is going to be used only when the messenger must start in an active stream, therefore, the initialVideoChatType property should have a value set.

- features?: [Features] - contains all the togglable features of the messenger, in order to ensure flexibility. All properties are of type boolean and if the value is true, that implies that the functionality is going to be present in the messenger. Our togglable features are:

    - hasFavorite?: [boolean] - if the favorite icon (near model's name) is rendered. (default **true**)
    - hasGifts?: [boolean] - if it has the ability of sending gifts. (default **true**)
    - hasTips?: [boolean] - if it has the ability of sending tips and the anonymous tip functionality when starting a voyeur chat session. (default **false**)
    - hasEmoticons?: [boolean] - if it has the ability of sending emoticons. (default **true**)
    - hasToyControl?: [boolean] - if it has the toy control feature activated. (default **true**)
    - hasImageUpload?: [boolean] - if it has the ability of uploading images. (default **true**)
    - hasGroupChatIndicator?: [boolean] - if it renders the number of participants in a group chat(default **true**)
    - hasContactNote?: [boolean] - if the contact note (near model's name) is rendered. (default **true**)
    - hasExitPopups?: [boolean] - if on any type of exit (for instance when closing the videochat) would use messenger's implemented popups to inform the client. Some content partners would desire using their own popups/behaviors to be executed. (default **true**)
    - hasModelProfilePicture?: [boolean] - model's profile picture is rendered. (default **true**)
    - hasModelName?: [boolean] - model's name is rendered. (default **true**)
    - hasModelMotto?: [boolean] - model's motto is rendered. (default **true**)
    - hasCam2Cam?: [boolean] - when having an active stream, cam2cam button is rendered. (default **true**)
    - hasVoyeur?: [boolean] - if voyeur button is rendered. (default **true**)
    - hasPrivateChat?: [boolean] - when having an active stream, private chat button is rendered. (default **true**)
    - hasCloseButton?: [boolean] - the X button on the top right corner is rendered. (default **true**)
    - hasSendMessageButton?: [boolean] - on true, the button for sending messages to the model will be rendered. (default **true**)
    - hasFullscreen?: [boolean] - when having an active stream, the client has the fullscreen option. (default **true**)
    - hasHistoryMessages?: [boolean] - when opening the messenger, in the chatbox we will render the past conversations between the client and the model. (default **true**)
    - hasHistorySectionsOpened?: [boolean] - when opening the chatbox, the message section are already opened. (default **true**)
    - hasPreloaderPaymentText?: [boolean] - if this flag is true, there will be no text displayed above loading pre-loader. (default **true**)
    - hasBehaviorOnClickOutside?: [boolean] - if this flag is true, the messenger (in text mode) will close when clicking outside. (default **true**)
    - hasMessagesGrouped?: [boolean] - the history messages are grouped together based on their previous livechat sessions. (default **true**)
    - isMessageTypeHeader?: [boolean] - text chat messenger has a customized header, to be applied on visit-x integration only. (default **false**)
    - hasAudioMessages?: [boolean] - the messenger will have the functionality of sending audio messages to the model. (default **false**)
    - hasGroupChatClientName?: [boolean] - in a group chat session, a message sent by the client will contain its own name/alias. (default **false**)
    - hasFullscreenLayoutOnLandscape?: [boolean] - when the stream starts and the container has landscape sizes, the messenger will be using the fullscreen layout. (default **false**)
    - hasProductionDebugEnabled?: [boolean] - we will have access to production debug information in order to solve live errors more efficiently. (default **false**)
    - showCensoredContent?: [boolean] - if it has the ability to view censored content. (default **true**) 

- options?: [Options] - contains very specific configurable properties when desiring a certain behavior for the messenger.

    - updateBrowserLink?: [string] - if this value is set, the parent platform can personalize the message for Cam2Cam button when is used on Internet Explorer. When the messenger is rendered on Internet Explorer, the client can't use the Cam2Cam feature, therefore the button is disabled with some information about this issue. Part of this information is the update browser link, which can be set through this property.

    - analyticsKey?: [string] - represents your Google Analytics key and if this value is set, you will be able to visualize the default trackers implemented in our library.

    - preloader?: [string] - represents image's CDN address that is going to be used as a pre-loader for starting a stream. This property is used for branding the messenger for a content partner. If no value is set, the fallback preloader is going to be a three-dots animation.

    - tip?: ITipOption - content partners starting a chat-based video session have the tipping feature active, but in order for it to work, some information are needed from the mother platform: amount of a tip, associated currency and an image associated to the tip (defaults some green bank-notes). That info will be rendered on the confirmation tip pop-up.

	- switchToPortraitWidth?: [number] - max width in pixels after which the messenger is rendered in landscape mode.
	
    - initialVideochatVolume?: [number] - when the stream will start, the initial volume will be set by this property. The value must be any number from 0 to 1. If the value is set on 0, the stream will start muted. If no value is set, the stream will start normally.
  
    - censoredContentImage?: [string] - represents image's CDN address that is going to be used as the cover for censored content. If no value is set, the default image is going to be shown.

- hooks?: [Hooks] - functions, in which the parent platform can implement a behavior on certain events. They represent a way of communication between the messenger and the parent platform. All the functions are nullable.

    - onClickProfile? - will execute the logic inside the function when client clicks on model's name or profile picture;

    - onExit? - will execute the logic inside the function when the messenger will close, irrespective to its cause. It will contain an exitCode in order to reflect the reason for which the messenger has been closed;

    - onRecharge? - will execute the logic inside the function if messenger's recharge mechanism is not working;
    
    - onVideoChatAction? - will execute the logic inside the function when any type of stream changes its type from active to inactive or from inactive to active. It will return a flag if the video is open and, optionally, a value for chatId when closing the stream.
    
    - onExitPopupAction? - will execute the logic inside the function when exit pop-ups (if having this feature set on) are displayed or hidden;
    
    - onAgeVerification? - will execute the logic inside the function when messenger would need to verify the age of the client. The messenger as an application does not know how to apply age verification, so it's going to rely on the parent platform;
    
    - onModelStatusChange? - will execute the logic inside the function when the model goes from online to offline or from offline to online. Any change in model's online status will trigger this function;
    
    - onSupportedVideoChatTypes? - will execute the logic inside the function when the messenger is opened. It will return the array of possible streams with the model. For instance, ["LIVECHAT", "LIVE_PREVIEW", "VOYEUR_CHAT"] if all the streams are possible.
    
    - onFailedChatConfig? - will execute the logic inside the function when the messenger has been started with the clientId and server as connection, but starting the stream has failed and returned with an error. This error is going to be returned as a parameter;
    
    - onFailedWebToken? - will execute the logic inside the function when the messenger finds the provided web token not usable (or not usable anymore - e.g. token has expired);

    - onBecomeVIP? - functionality for setting the current client as a VIP member to your platform.
    
    - onClickImage? - will execute this logic when user click an image, instead of simply opening the image in the default viewer; useful for platforms willing to have their own image viewers

Interfaces for messenger's properties:

```
interface ConnectionWithToken {
    webToken: string;
    partner: Partner;
    userKey?: string;
}

interface ConnectionWithChat {
    clientId: string;
    server: string;
}

interface Features {
    hasFavorite: boolean;
    hasGifts: boolean;
    hasEmoticons: boolean;
    hasToyControl: boolean;
    hasImageUpload: boolean;
    hasSendMessageButton: boolean;
    hasContactNote: boolean;
    hasExitPopups: boolean;
    hasModelProfilePicture: boolean;
    hasModelName: boolean;
    hasModelMotto: boolean;
    hasCam2Cam: boolean;
    hasVoyeur: boolean;
    hasPrivateChat: boolean;
    hasCloseButton: boolean;
    hasFullscreen: boolean;
    hasHistorySectionsOpened: boolean;
    hasHistoryMessages: boolean;
    hasMessagesGrouped: boolean;
    hasPreloaderPaymentText: boolean;
}

interface Theme {
    name: string;
    typography: {
        fontFamily: string
        secondaryFontFamily: string
        weight: {
            thin: number;
            light: number;
            regular: number;
            medium: number;
            bold: number;
        };
    };
    layout: {
		textMode: {
			minHeight: number;
			minWidth: number;
		};
        messageSection: {
			responsiveBreakpointWidth: number;
		};
	};
    colors: {
        overlay: string;
        cam2CamDisabledColor: string;
        messengerWrapper: string;
        messengerClose: string;
        messengerLoader: string;
        messageEditorBackgroundColor: string;
        messageEditorPlaceholderColor: string;
        messageEditorTextColor: string;

        chatBoxContainer: string;
        imageUrlContent: string;
        groupColor: string;
        groupTextColor: string;
        profileLink: string;
        profileLinkHover: string;
        profileMotto: string;
        messengerButtonInvertedBackground: string;
        messengerButtonHover: string;
        messengerButtonInvertedText: string;
        windowBackground: string;
        windowItemsShadow: string;
        windowPaginatorBackground: string;
        clientMessageBackground: string;
        fullscreenSystemMessageBackground: string;
        fullscreenSystemMessageText: string;
        modelMessageBackground: string;
        messageText: string;
        messageTimeAgo: string;
        videoChatBackground: string;
        videoChatControlsBackground: string;
        videoChatControlsBackgroundHover: string;
        videoChatControlsText: string;

        onlineBulletColor: string;
        offlineBulletColor: string;

        selectedButton: {
            defaultBackground: string;
            defaultBackgroundHover: string;

            blackBackground: string;
            blackBackgroundHover: string;

            blueBackgroundHover: string;

            text: string;
        };

        initiallyMutedButtonBackground: string;

        checkedStrokeColor: string;
        checkedFillColor: string;

        dropDownContentBgColor: string;

        timerFillColor: string;
        timerUnfillColor: string;
        timerBgColor: string;
        timerTextColor: string;

        livePreviewTimer: {
            fillColor: string;
            unfillColor: string;
            bgColor: string;
            textColor: string;
        }

        editor: {
            background: string;
            text: string;
        }

        giftPageTitle: string;
        giftPageText: string;

        avsCam2CamPopup: {
            backgroundColor: string;
            smallTextColor: string;
            mainTextColor: string;
            button: {
                standard: string;
                onHover: string;
                textColor: string;
            }
        }

        preChatPopup: {
            backgroundColor: string;
            textColor: string;
        }

        initiallyMutedToolTipContentText: string;

        actionResponse: {
            warningColor: string;
            errorColor: string;
            successfulColor: string;
        },

        userPrompt: {
            tipColor: string;
            tipPriceColor: string;
            tipButtonColor: string;
            tipButtonBackgroundColor: string;
            tipButtonBackgroundHoverColor: string;
        }

        modalCloseButtonColor: string;

        toySection: {
            primaryColor: string;
            secondaryColor: string;
            lock: string;
            text: string;
            hoverTooltipText: string;
            headerSectionBackground: string;
            headerSectionBorderColor: string;
            headerSectionLink: string;
            inactiveToyMessageText: string;
        }

        informationDialog: {
            title: string;
        }

        messageTypeHeader: {
            modelTitle: string;
            title: string;
            subtitle: string;
        }

        cameraSelection: {
            option: {
                defaultColor: string;
                selectedColor: string;
            }
        }

        groupChat: {
            participants: {
                bgColor: string;
                textColor: string;
            }
            clientName: string;
        }
    }
}

interface Hooks {
    onRecharge: () => void;
    onClickProfile: () => void;
    onAgeVerification: () => void;
    onFailedChatConfig: (error: any) => void;
    onModelStatusChange: (isOnline: boolean) => void;
    onExitPopupAction: (isExitPopupOpen: boolean) => void;
    onVideoChatAction: (isVideoChatOpen: boolean, chatId?: string) => void;
    onSupportedVideoChatTypes: (videoChatTypes: VideoChatType[]) => void;
    onExit: ClickExit = (code?: ExitCode, message?: string) => void;
}
```

Methods exposed by VXMessenger:
-  closeMessenger - will clean up the messenger: close opened sockets and reset the Redux store.
  __Note__: Before sending a new clientId and server, we advise calling the "closeMessenger" function, othwerwise the messenger won't react to the newly received values. The correct steps would be:
1.) Send initial clientId & server to the vxmessenger
2.) Call the closeMessenger function for a clean new state of the messenger, when you want to send new connection values
3.) Send the new clientId & server to the vxmessenger

## Exit Codes
If you want to configure certain behaviors on the "onExit" hook based on the incoming exit code, these information can be found inside the resources presented down below.

- https://npm.runkit.com/vxcontrol-client-lib/dist/vxcontrol/command/resultcode.d.ts?t=1571734523911
- https://npm.runkit.com/vchat-core/dist/exit-code.d.ts?t=1571734603331

## Tips & Tricks

- Pressing CTRL+ALT+V will show the current VXMessenger's version for about 5 seconds; 
  For mobile devices, seven consecutive clicks will do the job.
  
### Integration hints

- For displaying the messenger on iOS devices, an integration tip is:
```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0" />
```
- For correctly displaying the main used fonts in VXMessenger, the platform should load them before as:
```html
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
```

- for platforms willing to integrate VXMessenger, but which were also developed with TypeScript, 
_tsconfig.json_ file should contain the following settings:

```json
"compilerOptions": {
  "skipLibCheck": true
}
```

The reason for it is strongly related to some of our dependencies which are having troubles
with their exposed type definitions.

## Getting Started

Details about integrating this product on the main platforms will come soon.
However, for demo purposes, one could go through a series of steps detailed below:

### Prerequisites

- node (v 8.10 and over)
- npm (node package manager - v 6.4.1 and over)
- Linux or Windows OS

### Installing

After cloning the project locally from [bitbucket.org]()

```
> npm install
> npm start
```

```
> cd dev
> npm install
> npm start
```

The application meant to play as a community platform is starting on [localhost:3000]()

There we have some hardcoded links corresponding to some of our test models

### Running tests

```
> npm run test
```

### Running the project for automatic testing purposes

```
> npm run build:test
```

### Deployment

To be filled later

### Simple React-Example
```
import React from 'react';
import './App.css';
import VXMessenger from '@visit-x/vxmessenger';

const props = {
    connection: {  // get from https://www.visit-x.net/interfaces/content/start.php
        clientId: '01391563823629579984519617794229',
        server: 'ds6.farm1.campoints.net'
    },
    language: 'en',
    initialVideoChatType: "LIVECHAT",
    features: {
        hasModelProfilePicture: false,
        hasModelMotto: false,
        hasModelName: false,
        hasCam2Cam: true,
        hasPrivateChat: false,
        hasExitPopups: false,
        hasContactNote: false,
        hasFavorite: false,
        hasFullscreen: false,
        hasCloseButton: false,
    },
    hooks: {
        onClickProfile: function () {
            console.log('Clicked on profile');
        },
        onExit: function (exitCode, exitMessage) {
            console.log('Chat exited', {exitCode: exitCode, exitMessage: exitMessage});
        },
        onRecharge: function () {
            console.log('onRecharge');
        },
        onVideoChatAction: function (isVideoOpen, chatId) {
            console.log('onVideoChatAction:isVideoOpen', isVideoOpen);
            console.log('onVideoChatAction:chatId', chatId);
        },
        onAgeVerification: function () {
            console.log('onAgeVerification');
        },
        onModelStatusChange: function (isOnline) {
            console.log('Model status changed to ', isOnline);
        },
        onSupportedVideoChatTypes: function (videoChatTypes) {
            console.log(videoChatTypes);
        },
        onFailedChatConfig: function (error) {
            console.log('Supplied chat conf has failed with the following reason: ', error);
        }
    }
};

function App() {
    return (
        <div className="App">
            <VXMessenger {...props} />
        </div>
    );
}

export default App;
```

## Built With

### Libraries

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/) architecture following the [Ducks pattern](https://github.com/erikras/ducks-modular-redux).
* [Redux-Saga](https://redux-saga.js.org/) is a middleware for handling API requests and responses.
* [TypeScript](https://www.typescriptlang.org/) for transpiling and strongly-typed JavaScript superset.
* [styled-components](https://www.styled-components.com/docs) for UI styling.
* [lodash](https://lodash.com/) for using modular and performant JavaScript.
* [immer](https://github.com/immerjs/immer) for immutable data management in Redux reducers.

## Tooling
* [NPM](https://www.npmjs.com/) for dependency management.
* [Enzyme](https://github.com/airbnb/enzyme) for testing React components.
* [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for testing.
* [Storybook](https://storybook.js.org/) for component style guide.

## Change Log

### 0.36.0

- Docs

    - README file contains a hint about tsconfig.json file
    
    - README file contains details about the new feature flag, _showCensoredContent_ and new option _censoredContentImage_
    
    - README file contains details about the new hook, _onClickImage_

- Features

    - image messages sent by the model will be censored, if the user do not have his age verified
    
    - clicking censored content from the model now triggers the external AVS tour
    
    - images can be now open by an external viewer, thanks to the new provided hook _onClickImage_

- Bug Fixes

    - consecutive images sent by the model were not all displayed correctly; fixed it
    
    - OCR popup not well displayed on Android on Portrait mode; fixed it
    
    - a muted model was not always correctly reflected in the messenger; fixed it
    
    - time format in message groups was not language dependent; fixed it
    
    - model icon and name was not correctly displayed in group chat sessions; fixed it
    
    - if providing version 4 as peer dependency for styled-components, content breaks when clicking a toy option; fixed it
    
### 0.35.1

- Bug Fixes

    - bottom area containing message editor was taller than required; fixed it;
    
    - toggling font size button had no effect on message editor; fixed it;
    
    - toggling font size button appeared smaller in VXOne; fixed it;
    
    - live preview button contained only an icon, when available horizontal space was small; fixed it;

### 0.35.0

- Features

  - new mechanism for storing personal preferences between usages
  - new way for displaying images(1:1 ratio)
  - new mechanism for adjusting exit code closing the vchat-core instance

- Bug Fixes

  - recharge area pop-up was not displayed correctly in VXOne; fixed it
  - voyeur gift pop-up was raised directly after the chat started; fixed  it
  - text didn't fit into button on charge pop-up; fixed it
  - a missing space was displayed beetween emoticons and text on Windows; fixed it

### 0.34.1

- Features
    
    - toggle font size for messages and editor content
    
    - volume slider for desktop platforms

    - action buttons are now hiding icons (not text as before) when there is not enough horizontal space
    
    - exposed function _closeMessenger_ is now accepting a nullable parameter for instanceId
    
    - display spinning clock animations while image messages are loading
    
    - _chatId_ is now provided as an argument to _onVideoChatAction_ external hook

- Bug Fixes

    - timing out recharge button was not click-able in full-screen mode; fixed it
    
    - "top up" button from the OneClickRecharge (OCR) dialog was not click-able while in full-screen mode; fixed it
    
    - images sent via powermail mass messaging service were not displayed; fixed it
    
    - header was overlapping video loading message, when in portrait mode; fixed it
    
    - any new message was containing an initial whitespace when passed its content to the backend; fixed it
    
    - wide images sent by the model were sometimes displayed outside the message bubble; fixed it

### 0.33.0

- Features

  - new mechanism for sending messages through vchat-core
  - design changes for toy section
  - we now are considering cam2cam ability flag when enabling/ disabling feature

- Bug Fixes

  - fixed bug with lovense menu flicker on mobile devices at the start of the livechat session
  - fixed information dialogs over video area which were transparent or partly invisible
  - fixed sending an image from an account without credits which broke messenger functionality
  - fixed incorrect videochat layout on android devices landscape mode
  - removed black chat area when messenger is re-sized on Safari
  - fixed OCR menu which was displayed over header
  - stream ended system message is now consistent

### 0.32.1

- Bug Fixes

    - messenger remained blocked in a loading state when trying to initiate a new channel of communication with a model for the first time.

### 0.32.0

- Features

	- design changes required by VXOne
	- added a close messenger mechansim When stream is loading

- Bug Fixes

	- fixed incorrect videochat layout on android devices landscape mode


### 0.31.0

- Features

    - keyboard navigation for group chat mentions
    
    - messages are now organized by days
    
    - updated redux-saga dependency
    
    - provided chatId as a parameter in _onVideoChatAction_ hook, for platform's reporting needs

- Bug Fixes

    - wrong default picture for male models was displayed when at chat's ending; fixed it
    
    - lovense random option's tooltip was not displayed correctly; fixed it
    
    - dropdown menu's shadow was displayed wrong when expanding it on mobile devices; fixed it
    
    - when getting off the full screen mode, the chat history was scrolled up; fixed it
    
    - model's icon in group chat mentions menu was wrongly displayed on Safari and Firefox; fixed it
    
    - minor misalignment of the newest message in full-screen mode; fixed it
    

### 0.30.0

- Features

    - design changes required by VXOne
    
    - updated screenfull dependency

- Bug Fixes

    - chat history not scrolled down to the latest message when in live chat or live preview; fixed it
    
    - message bubbles looked wrong if box-sizing was set to border-box for all html elements in the parent platform; fixed it
    
    - consecutive messages from model during a video session were not displayed correctly; fixed it
    
    - short layout flickering when stream starts; fixed it
     
    - when expanded, gift area went outside the messenger, if messenger container was very small; fixed it

### 0.29.1

- Bug Fixes

    - the editor is no longer disabled when starting with a self-broadcasting stream mode (NO_DOWNSTREAM)

### 0.29.0

- Docs

    - changed params list in this README file, to reflect removed properties

- Features
    
    - removed properties marked as deprecated in 0.28.0
    
    - message bubbles have now variable width
    
    - upgraded some dependecies (moment, draft-js, lodash, immer, query-string, react-device-detect, react-ga, reat-string-replace, react-transition-group, superagent, redux)

- Bug Fixes

    - free text chat ended earlier than announced by the countdown watch; fixed it
    
    - enforced content-box sizing on the messenger's elements to avoid integration issues with vxone
    
    - VXMessenger was affecting styles for the entire page; fixed it
    
    - first message after a live-chat session was still considered as "consecutive"; fixed it
    
    - a horizontal scrollbar was wrongly displayed in the messages area; fixed it
    
    - iOS infinite scrolling for gifts; fixed it
    
    - scroll to bottom animation appeared when opening the messenger; fixed it
    
    - message timestamp format was still not correct for German language, if using messenger's fat bundle; fixed it
    
    - gift code is displayed for unsent gifts when transitioning from text to video chat; fixed it
    
    - font sizes expressed in "rem" were converted to "px" to avoid styles conflicts with the platform    

### 0.28.1

- Bug Fixes

    - provided a way to restart a video stream if browser's auto-play restrictions are active

### 0.28.0

- Docs

    - changed params list in this README file

- Features

    - message bubbles have now variable width
    
    - increased width of modal dialogs on mobile devices
    
    - "isForContentPartners" flag was marked as deprecate (replaced it with _hasTips_ feature flag)
    
    - boolean flags from _options_ section were deprecated and moved into _features_ section
    
    - updated _react_ and _react-dom_ dependencies
    
    - configurable behavior when clicking outside the VXMessenger (can close itself or not)
    
    - new entries in accepted theme, to control layout change of the text messenger

- Bug Fixes

    - when changing partners, draft messages were not cleared off; fixed it

    - message timestamp format not correct for German language; fixed it

    - small styling fixes for gift pages
    
    - removed page scrolling when scrolling the chatbox
    
    - vx-icons styles were not applicable to VXMessenger only; fixed it


### 0.27.0

- Features
    
    - Adding messenger's version and source-maps to Rollbar (debugging tool) for faster debugging
    
    - Feature flag for displaying group chat indicator (number of members)
    
    - New time format and design for message bubbles

- Bug Fixes
    
    - On mobile devices, full-screen layout, drop-down menu remained click-able, even if faded out; fixed it
    
    - Emoticons were rendered to close to each other, on Chrome + MacOS; fixed it
    
    - Incorrect message appeared when trying to start a live-chat with zero balance; fixed it

### 0.26.1

- Bug fixes
    
    - This is a version with updated vchat-player(1.0.221) 

### 0.26.0

- Features

    - Integrated Rollbar for improved debugging;

    - Added special mention menu when customer click on participants number in group chat;
    
    - Added configurable property to select the initial value of volume at the start of the chat;
    
    - Contact note and notes are no more rendered when starting chat with clientId + server;

- Bug fixes

    - Reloading on iOS without a hook configured is not breaking the app anymore;

    - Mentions for model are no longer highlighted without being in a group chat;

    - A second chat is no longer initialized after chat end if hasExitPopus is false;

    - Chat area is now scrolled down to the latest messages when starting a livechat session;

    - When starting on iPad tablet inside a container, the application is no longer breaking into a blank page;

    - Improved the styling for gift bundles;

### 0.25.0

- Features

    - When setting the "hasModelProfilePicture" flag on false → model's profile picture won't be rendered anymore inside the message bubble, while in a group chat session.
    
    - Consistent behavior when opening the stream in a landscape orientation between devices. Now, when opening the videochat on landscape, it will render in the same layout as on desktop. In order to keep the past functionality of opening in a fullscreen layout, configurate the *hasFullscreenLayoutOnLandscape* flag on true within the features object.
    
    - Full implementation of the "mentions feature" while in a group chat session.
    
    - Additional implementations for theming our messenger's colors when it comes to group chat.

- Bug fixes

    - While the videochat stream was loading, any message written by the client was not sent to the model. Fixed this behaviour.
    
    - Now, the client can send correctly inactive inventory gifts.
    
    - Bundle gift pages are now translated in german.
    
    - When opening a stream on an iOS device, when clicking on the stream refresh button, the application would crash.

### 0.24.0

- Features
    
    - Implemented the option to show own username in group chat;
    
    - Implemented total number of participants displayed in group chat;

- Bug fixes
    
    - Fixed the bug regarding the blank page when starting video stream on android tablets;
    
    - Fixed some design inconsistencies for consecutive messages in fullscreen;
    
    - Fixed emojies from the emoji menu which couldn't be selected while in fullscreen;
    
    - Fixed some design inconsistencies for model message bubbles;
    
    - Fixed the bug regarding the model name in consecutive messages;
    
    - Fixed the application when starting on iPad tablet inside a container;
    
    - Fixed lovense feature system message which didn't appear when exiting voyeur mode;
    
    - Fixed audio recording timer which would continue from text messenger recording to livechat recording;


### 0.23.0

- Features:

    - Defined a new flag "hasSendMessageButton" instead of the deprecated "hasSendMessage" - the functionality has remained the same.

    - Added font fallback functionality.

    - Sending any media message (image or audio message) is disabled within a group chat session.

    - Implemented new design for consecutive messages from the same entity: the client, the model or the same group chat user. This new feature is applied in all application's contexts.

    - Improved the behavior of scrolling through the history messages.

    - Having the messages grouped inside livechat sections is toggleable now (check the new "hasMessagesGrouped" flag).

    - Implemented new design for messages sent by the model within a group chat session.

    - Implemented new behavior for the top bar's fade in/fade out when the messenger is opened in any stream mode.
    
- Bug Fixes:

    - Fixed console errors when the messenger is rendered on an iOS device.

    - Fixed some design inconsistencies for message bubbles within the chat box.

    - Fixed some design inconsistencies when the messenger was opened in any stream mode and rendered inside a container on phones or tablets.

    - Fixed the issue about actions section buttons not being responsive on some Android devices.

    - Fixed the console error when playing any audio message.

    - Fixed the behavior of going into a blank page when the client would go in fullscreen mode on Safari while the messenger was rendered inside a fixed dimensions container.

    - Fixed the rendering of the Lovense icon when the messenger is opened in desktop fullscreen mode.


### 0.22.1

- Docs:

    - updated the README file with references to the new initial video chat mode, "GROUP_CHAT";
    
- Bug Fixes:

    - fat bundle (vxmessenger.min.js) could not be used, an error about "[...] _missing regeneratorRuntime_" error was thrown; fixed it

### 0.22.0

- Docs:

    - new entry in the README file, describing how fonts used in VXMessenger should be loaded on the platform side

- Features:

    - Group chat
    
        - see messages from other customers, if part of a group chat
        
        - user names associated with each message are rendered with distinctive colors
    
- Bug Fixes:

    - audio message recording didn't work in Safari; fixed it

    - "continue with chat" button didn't work; fixed it
    
    - image messages were not expanding; fixed it
    
    - message box not always scrolled down when opening the messenger; fixed it
    
    - updated texts in the pre-chat dialogs (the ones displayed before initiating a video chat, for special situations)
     to avoid referrals to live preview sessions only

### 0.21.0

- Features:

    - preparing for the upcoming group-chat feature: disable cam2cam, hide message history
    
    - experimental: having multiple instances of the messenger active at the same time
    
    - displaying history messages can be toggled on and off by a feature flag provided by the platform
    
    - history message groups expansion can be toggled on and off by a feature flag provided by the platform
    
    - automatic fade in / out for video overlay buttons


- Bug Fixes:

    - Dropdown menu was displayed wrong on portrait mode (mobile); fixed it
    
    - Recording an audio message was interrupted when switching from portrait to landscape or viceversa; fixed it
    
    - Exit code not thrown when underage users try to start video chat with non-softchat model; fixed it
    
    - Exiting dialogs not appearing for a couple of errors; fixed it;
    
    - Full-screen mode was not displayed correctly if the messenger's container had fixed dimensions; fixed it
    

### 0.20.0

- Docs:

    - new section in README file with integration tips and tricks

- Features:

    - custom player for audio messages

    - free chat sessions can be switched now to private chat ones;
    
    - closing pre-chat information dialogs for sessions started with initial video type is triggering the _onExit_ hook
    
    - if started with initial video type and if model allows it, messenger is now offering the possibility to spy a private chat

- Bug Fixes:

    - regular price displayed on the buttons, even for users having free minutes

### 0.19.0

- Features:

    - Implemented cam2Cam camera devices selection for clients

    - The client can send audio messages

    - All previously-deleted messages are no longer rendered

- Bug Fixes:
    
    - One Click Recharge pop-up is not displayed when balance has a very low value; fixed it

### 0.18.0

- Features:

    - Forward audio state to model

### 0.17.0

- Features:

    - Google Analytics in VXMessenger
    
    - click-able image messages, pointing to an attached URL (usually for advertising campaigns)

- Bug Fixes:

    - Lovense menu elements were not interactive on IPhone devices; fixed it
    
    - Tooltip of "Random intensity" Lovense option was not entirely visible on iOS tablets; fixed it
    
    - Drop-down menu not functioning correctly on LG (Android) mobile device; fixed it
    

### 0.16.1

- Bug Fixes:

    - upgraded vchat-core and vchat-player dependencies to their newest versions (5.1.177 and 1.0.188 respectively), 
    to fix some playing bugs related to iOS devices

### 0.16.0

- Features:

    - increased Lovense's menu height for low resolutions
    
    - cam2cam video area now has a dedicated close button
    
    - option to have a customized header for text chat, applicable to visit-x site only

- Bug Fixes:

    - Lovense elements not appearing initially on iOS devices (phone/ tablet)
    
    - chat area not scrollable on IE11; fixed it
    
    - cam2cam button not displayed correctly on IE11

### 0.15.1

- Bug Fixes:

    - upgraded to the newest vchat-player dependency (1.0.177) to fix playing streams on IOS devices
    
    - accepting zero prices from the model as valid values

### 0.15.0

- Features:

    - using the new H5LIVE player

    - handling expired token and resend failed messages when a new token is provided
    
    - vchat-player is not recreated anymore when layout changes, resulting in improved performance
    
    - feature flag to control displaying of the pre-loader text
    
    - bigger gift images if the sent message contains only gifts

- Bug Fixes:

    - broken drop-down elements on IOS mobile
    
    - wrong image size when receiving image from sender
    
    - Lovense menu issues
    
    - empty toy section menu appearing on full-screen and landscape mode on IPad
    
    - incorrect system message when starting the live preview
    
    - livechat button not correctly displayed on preview pop-up
    
    - free text chat session following a live preview is terminated earlier than reflected on timer
    
    - as following the upgrade of vchat-core/ vchat-player dependencies, "out of money" notifications are working properly now
    
    - stream was not restarted after a recoverable 910 error
    
    - stream started as muted each time the layout is changing (IOS devices)
    
    - make reference to VIP terminology only if onBecomeVIP() hook is provided
    
### 0.14.1

- Bug Fixes:

    - dependency wrongly specified as dev in the package.json

### 0.14.0

- Features:

    - Lovense Toy feature
    
    - system messages for a voyeur user, for better explaining his current status
    
    - new feature flag, controlling the appearance of the text displayed together with the pre-loader
    
- Bug Fixes:

    - error or information messages were overlapped by chat message bubbles, when in full-screen
    
    - muted customer can still send messages on certain devices; fixed that
    
### 0.13.1

- Bug Fixes:

    - upgraded vchat-core and vchat-player dependencies to newest versions
    
    - header buttons in text chat were displayed in chat area, on IE11
    
    - system messages were overlapping the texts specifying the time of a regular message

### 0.13.0

- Bug Fixes:

    - do not trigger a CMDP_CSTARTTEXT each time the layout is changing (going to full screen and back, swithcing from portrait to landscape mode)

    - black ribbons above and below video area, when in portrait mode and video aspect ratio is 16:9

    - tooltip for muted streams was  not entirely translated in Spanish
    
    - error ribbons with longer texts were not displaying correctly for iOS mobile
    
    - switch to text chat when live preview's free texting period is over
    
    - upgraded vchat-core and vchat-player dependencies to newest versions, to avoid some bugs occurring when a user runs out of money
        
### 0.12.0

- Docs:

    - new option for configuring tipping feature

- Features:
    
    - tipping feature for content partners which are using clientId + server to start a video session

    - inform the user about the low quality connection
    
    - unequal space between messages in full-screen mode
    
    - display a countdown watch at the end of a live preview session, marking the remaining time of the free text chat

- Bug Fixes:

    - voyeur's tipping prompt was not using all the available width and had no scrollbar
    
    - black video picture appearing when typing text on Samsung mobile
    
    - incorrect Spanish translation for running out of money message
    
    - sending an image from mobile phones while in landscape mode rotates the image by 90 or 180 degrees

### 0.11.0

- Features:

    - notify the mother platform if the authentication token is expired
    
    - let the user know when automatically switching from voyeur to regular chat by typing a message
    
    - improving behavior of the video container for low available heights
    
    - toggleable "become a VIP member" link
    
    - "X" button for closing an uploaded image viewer
    
    - show a bigger emoticon if it is the only content of a message
    
    - hasSpecialFeature external flag was replaced by independent features flags: hasEmoticons, hasImageUpload, hasSendMessageButton

    - hasSpecialFeature external flag was replaced by independent features flags: hasEmoticons, hasImageUpload, hasSendMessageButton

- Bug Fixes:
    
    - countdown warning was incorrectly rendered in full screen
    
    - expanding an image made the entire messenger to break
    
    - private chat prompt was hidden by other user prompts, thus forcing the user to restart the messenger if wanted to start a private session

    - notify the platform if it attempts to start a stream with an initialVideoChatType, but having no cash
    
    - formatting was not preserved for multi-lines messages
    
    - sending images when having no money triggered an infinite image loading animation
    
    - text notifying an user about the host being in a private chat was containing the model's name twice
    
    - when no recharge info is coming from the backend, a strange error is displayed
    
    - portrait layout not correctly rendered on IPad Air after rotating the device with keyboard open
    
### 0.10.0

- Docs:

    - this changelog section

- Features:

    - on demand cleanup mechanism for the messenger - see closeMessenger() method
    
    - show version number on mobile devices as well, by seven consecutive clicks (see "easter egg" section)

- Bug Fixes:

    - restart stream if there is a minor streaming error
    
    - countdown warning was slightly intersecting last message sent, while in full screen
    
    - if no sessionId is coming from the backend, messenger remains blocked in LOADING status; fixed that
    
    - recharging balance when about to run out of money is working properly now
    
    - When you send messages very fast, not all of them were sent
    
    - user prompts were not animated on desktop devices
    
    - made messenger more robust when dealing with no recharge info coming from the backend
    

### 0.9.3

- Features:

    - added new flags, _hasGifts_ and _hasVoyeur_ among the externally provided features properties
    
- Bug Fixes:

    - when starting the messenger with clientId + server and Spanish language, the strings were first rendered in English, then quickly switched to Spanish.

### 0.9.2

- Features:

    - added Spanish among the supported languages;
    
- Bug fixes:

    - fixed an issue where the action buttons were hidden when starting the messenger with clientId + server

### 0.9.1

- Bug fixes:

    - removed some (currently) useless artifacts made for a future "delete message" functionality, as they were wrongly interacting with the newest VXPAGES when trying to upload a picture

### 0.9.0

- Bug fixes:

    - timer animation is now working in Safari too;

    - timer animation is now accurate when switching to private;

    - removed incorrect editor behavior when having only gifts in a message (Android and IE);

    - anonymous tip is no longer rendered unpredictably on multiple consecutive voyeur sessions;

    - anonymous tip is not rendered anymore when starting voyeur session with clientId + server;

    - not all gifts were visible in Firefox; fixed that;

    - in VXPages, drop-down menu's design were altered; fixed it;

    - information dialogs were incorrectly rendered when in free chat  and when switching to full-screen/ landscape; fixed it;

    - made messenger more resilient to minor errors coming from the APIs;

    - fixed a small overflow of the user prompts and  the first message, in full-screen mode;

    - free messages placeholder was wrongly displayed when it shouldn't be; fixed it;

    - chat box was not scrollable on on mobile devices, under certain conditions (countdown warning active); fixed it;

    - pointer cursor for X buttons;

    - scroll position was not reset while navigation through gift pages; fixed it;

    - certain user prompts were displayed simultaneously with information dialogs, so redundant information was displayed; fixed that.     

### 0.8.1

- Bug fixes:

    - when working with credits, recharged amounts were multiplied by 100

### 0.8.0

- Features:

    - supporting "FREECHAT" as initialVideoChatType;
    
    - changed padding in Contact Note dialog

    - videochat buttons (private chat and cam2cam) are rendered inside mobile drop-down when the user is currently watching a stream while on mobile

    - videochat buttons are rendered differently when the messenger is opened from mobile and NOT in an active stream. The preview button is no longer rendered and the other 2 videochat buttons (livechat and voyeur) are rendered under the textbox, so no longer in model's profile.

- Bug fixes:

    - fixed resize problems occurring for unusual stream ratios;

    - fixed messages not being displayed properly on IPadAir, landscape mode

    - free minutes are not stopping the stream anymore

    - fixed Google Keyboard related issues, where text was not properly send, deleted, vanished suddenly when pressing space, etc

    - sending gifts in voyeur switch to LIVECHAT now;

    - pressing "top up" while in full screen doesn't hide anymore the VXPay popup

    - countdown warning is not reset anymore when resizing/ changing the layout

    - fixed useless scroll bar in editing area when adding an emoticon + a gift

    - send button is now properly aligned

    - fixed some gift area displaying issues

    - history messages are not displayed anymore in landscape when rapidly switching orientation.

### 0.7.2

- Bug fixes:

    - looks fine on IPhone8
    
    - no indefinitely loading when closing age verification pop-up

### 0.7.0

- Docs:

    - added the exit codes in the NPM documentation to make it easier to configurate it for content partners.

- Fetures:

    - free messages and free minutes for VXPages.
    
    - content partner configuration: property "features" has all their properties nullable - a content partner can give just a partial object and the properties not given will have the default value true.
    
- Bug fixes:

    - when having no money, the recharge amounts are correctly formatted as value.
    
    - when selecting a recharge amount, the page is no longer freezing.
    
    - adding messages on fullscreen when starting the stream with clientId & server is acting correctly now - fixed bug for content partners.
    
    - picture upload without sessionId is working now.
    
    - textbox is now scrollable when having a very long message and the keyboard is open.
    
    - gift stock is updated correctly and consistently when sending inventory gifts.
    
    - all the full screen design issues (feedback) has been solved.
    
    - top up button (in recharge countdown warning) is visible in every resolution.
    
    - on mobile, the sound icon is behaving correctly (the sound functionality) and we also added a description hint, in order to give some feedback to the client.
    
    - scrolling in full screen is working correctly in both desktop and mobile.
    
    - sending an image in voyeur mode will switch to livechat.
    
    - gift messages are sent only when the client has money for them in videochat.
    
    - no warning "no children in the scrollbar" with a certain configuration.
    
    - model's profile picture is correctly aligned with long messages (both long text messages or images).

### 0.6.1

- Dependencies:

    - upgraded vchat-core and vchat-player libraries.

### 0.6.0

- Docs:
    
    - updated the configure interfaces on the NPM Documentation. 

- Fetures:

    - supporting credits as currency (for VXPages)
    
    - updated the fonts and icons

- Bug fixes:

    - recharging amounts formatted as credits (for VXPages)
    
    - when the customer has no money and clicks on a not-free videochat mode (livechat and voyeur), the onRecharge hook from the parent platform will be called.
    
    - removed our old default profile picture for the model and we rely solely on the default coming from the back-end.
    
    - texts for grouping the messages under livechat sessions (for example, "Livechat about 2 hours ago") are now translated based on the language configured from the parent platform.
    
    - when on mobile, clicking on "Top up" button will open the recharge with default amounts or will call the onRecharge hook from the parent platform based on account recharge configuration.
    
    - send the correct version for the messenger through vxcontrol-client-lib.
    
    - anonymous tip prompt functionality - works correctly in all contexts.
    
    - exit pop-ups are displayed when starting with clientId & server and the feature is set on true from the parent platform.
    
    - correct behavior for rendering messages on fullscreen - max 6 messages with correct opacity.
    
    - gifts are no longer sent twice when the customer is in an active videochat mode.
    
    - uploading images in full screen mode is working correctly now.    

### 0.5.4

- Bug fixes:

    - display error message when activating cam2cam but camera is not available
    
    - sending images for AVS (AgeVerificationSystem) mode
    
### 0.5.3

- Dependencies:

    - upgraded vchat-core and vchat-player libraries.

### 0.5.2

- Bug fixes:

    - better behavior form the draft.js textbox when the client is using auto-correct on Android devices.

### 0.5.0

- Features:
    - keyboard is closing after sending a message in small screen mobile devices and, also, in all stream portrait rendering situations
    
    - completely removed the visit-x logo as a preloader, we only have a neutral three dots animation as default preloader

- Bux fixes:
    - tooltip "Visit profile" and styling for model's profile picture and name is applied only if the onClickProfile hook is provided from the parent platform
    
    - gift page is completely scrollable when on a small screen (mobile device, for example)
    
    - anonymous tip prompt is scrollable, so completely visible on a small screen (mobile device, for example)
    
    - the header has a minimum height, irrelevant to the configuration from the parent platform. So, if the platform configurates without model's name, motto, profile picture, favorites and contact note (so nothing in that area), the header is no longer looking broken
    
    - the gift page will always occupy the entire space (the chatbox is no longer visible when scrolling in certain scenarios)
    
    - gifts are correctly sent, when the user is in an active stream
    
    - cam2cam button's content is correctly centered
    
    - preview stream mode is free of charge
    
    - pre-chat information popup is rendered when the model is in private chat and does not accept voyeurs

### 0.4.0

- Features:

    - toggleable feature for the close button (X) for the messenger

    - toggleable feature for the full screen mode

    - toggleable feature for rendering the icons for image upload, gifts and emoticons

    - when starting in no stream, the cam2cam will be played in the main video area
    
- Bug fixes:

    - solved the time ago buggy value below the messages in iOS & Firefox
    
    - removed the black borders when in an active stream
