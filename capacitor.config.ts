import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'tbrain.in.medical.eduapp',
  appName: 'EDU Affair',
  bundledWebRuntime: false,
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },

  
  plugins: {
    "LocalNotifications": {
      "smallIcon": "splash",
      "sound": "beep.wav"
    },

      "SplashScreen": {
        "launchShowDuration": 5000 
      },
    
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },

};

export default config;
