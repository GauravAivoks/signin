import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin'
GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // [Android] what API you want to access on behalf of the user, default is email and profile
    webClientId: '980262963517-trikt7mfi234csgaftjsgrfr7vqedtel.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    googleServicePlistPath: '', // [iOS] if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    openIdRealm: '', // [iOS] The OpenID2 realm of the home web server. This allows Google to include the user's OpenID Identifier in the OpenID Connect ID token.
    profileImageSize: 120, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
});


// keytool -keystore path-to-debug-or-production-keystore -list -vkeytool -keystore path-to-debug-or-production-keystore -list -v

class HelloWorldApp extends Component {

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            this.setState({ userInfo });

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log(error.code, "hiii")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log(error.code, "hiii....")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log(error.code, "hiii/////")
            } else {
                // some other error happened
                console.log(error.code, "-----------")
            }
        }
    };

    getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
            } else {
                // some other error
            }
        }
    };

    isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({ isLoginScreenPresented: !isSignedIn });
    };

    getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
    };

    signOut = async () => {
        try {
            await GoogleSignin.signOut();
            this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
            console.error(error);
        }
    };

    revokeAccess = async () => {
        try {
            await GoogleSignin.revokeAccess();
            // Google Account disconnected from your app.
            // Perform clean-up actions, such as deleting data associated with the disconnected account.
        } catch (error) {
            console.error(error);
        }
    };

    async componentDidMount() {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            console.log("success")
            // google services are available
        } catch (err) {
            console.error('play services are not available');
        }
    }

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    // onPress={this._signIn}
                    onPress={() => {
                        GoogleSignin.configure({
                            androidClientId: '980262963517-trikt7mfi234csgaftjsgrfr7vqedtel.apps.googleusercontent.com',
                            iosClientId: '980262963517-trikt7mfi234csgaftjsgrfr7vqedtel.apps.googleusercontent.com',
                        });
                        GoogleSignin.hasPlayServices().then((hasPlayService) => {
                            if (hasPlayService) {
                                GoogleSignin.signIn().then((userInfo) => {
                                    console.log(JSON.stringify(userInfo))
                                }).catch((e) => {
                                    console.log("ERROR IS: " + JSON.stringify(e));
                                })
                            }
                        }).catch((e) => {
                            console.log("ERROR IS: " + JSON.stringify(e));
                        })
                    }}
                // disabled={this.state.isSigninInProgress}
                />
            </View>
        );
    }
}

export default HelloWorldApp;