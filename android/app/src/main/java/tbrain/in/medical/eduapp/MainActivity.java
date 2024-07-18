package tbrain.in.medical.eduapp;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import com.ionicframework.capacitor.Checkout; 

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        int splashScreenDuration = 3000; 
        try {
            Thread.sleep(splashScreenDuration);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        load(); 
        
        registerPlugin(Checkout.class); 
    }
}
