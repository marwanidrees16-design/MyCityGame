// داخل MainActivity.java
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView myWebView = new WebView(this);
        setContentView(myWebView);

        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true); // تفعيل الجافا سكريبت مهم جداً للمشغل
        webSettings.setDomStorageEnabled(true);
        
        // تحميل ملف الـ HTML اللي رفعناه على الرابط تبعك
        myWebView.loadUrl("https://marwanidrees16-design.github.io/MyCityGame/"); 
    }
}