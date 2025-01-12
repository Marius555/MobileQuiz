import { Client, Account, ID } from 'react-native-appwrite';
import * as WebBrowser from "expo-web-browser";
import { OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import parseUrl from 'parse-url';


WebBrowser.maybeCompleteAuthSession();
const client = new Client()
    .setProject('677309df002542f492ed')
    .setPlatform('com.marius112.quizapp');

export const account = new Account(client);

export const getSession = async () => {
  try {
    const session = await account.get("current");
    return { success: true, session: session };
  } catch (error) {
    return {
      success: false,
      error: error.message || "Failed To Fetch Session",
    };
  }
};
export const deleteSession = async () => {
  try {
    account.deleteSession("current");
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error:
        error.message + "delete function scope" || "Failed To Delete Session",
    };
  }
};

export const signInWithGoogle = async () => {
  try {
    const redirecting = Linking.createURL("(auth)/(tabs)/home", {
      scheme: "quizapp",
      isTripleSlashed: false
    });

    const responseData = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirecting
      
    );

    // Modified options for newer Android versions
    const browserOptions = {
      showTitle: true,
      enableDefaultShareMenuItem: false,
      showInRecents: true,
      createTask: true,
      // Add these specific options for Android 12+
      presentationStyle: 'pageSheet',
      controlsColor: '#000000',
      toolbarColor: '#FFFFFF',
      browserPackage: 'com.android.chrome' // Specifically use Chrome if available
    };

    const result = await WebBrowser.openAuthSessionAsync(
      responseData.href,
      redirecting,
      browserOptions
    );


    if (result.type === "success") {
      const data = parseUrl(result.url);
      const secret = data?.query?.secret;
      const userId = data?.query?.userId;
      const ses = await account.createSession(userId, secret);
      if (ses) {
        const account = await getSession();
        return { success: true, session: account };
      }
    }
    
    return { success: false, error: `Auth failed: ${result.type}` };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
};
