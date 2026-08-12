# QTürkiye: İnteraktif Kuantum Hesaplama Semineri

Bu proje, Kuantum Hesaplama, Optimizasyon Algoritmaları (Grover, Shor, QAOA, QUBO) ve Kuantum Makine Öğrenmesi (QML) konularını dinleyicilere **interaktif, somut ve görsel olarak** aktarmak için geliştirilmiş modern bir React tabanlı web sunum uygulamasıdır.

## 🌟 Öne Çıkan Özellikler

Statik slaytların aksine, bu proje içerisinde gerçek zamanlı çalışan simülatörler ve laboratuvarlar barındırır:

- **Grover ve Shor Simülatörleri:** Kuantum algoritmalarının nasıl çalıştığını, olasılık dalgalarını ve periyot bulma matematiğini görselleştirerek anlatan interaktif paneller.
- **Optimizasyon Laboratuvarı (QUBO Playground):** Gerçek dünya problemlerinin (Örn: Bütçe planlama) nasıl kısıtlara ve amaç fonksiyonlarına bölündüğünü gösteren canlı bir arayüz.
- **QAOA Hibrit Optimizatör:** Klasik bir bilgisayar (CPU) ile kuantum bilgisayarın (QPU) nasıl beraber çalıştığını anlatan gerçek zamanlı "Enerji Düşüş Grafiği" simülasyonu.
- **Çapraz Böbrek Nakli Modellemesi:** Kuantum algoritmalarının doğrudan insan hayatına dokunduğu, NP-Hard olan çapraz böbrek eşleşmesi probleminin adım adım QUBO matrislerine dönüştürülmesi.
- **Kuantum Makine Öğrenmesi (QML):** VQC (Variational Quantum Classifier) mimarisi ve klasik yapay zeka ile kuantum yapay zekasının karşılaştırması.

## 🚀 Kurulum ve Çalıştırma

Proje **Vite** ve **React** altyapısı üzerine inşa edilmiştir. Kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   # veya
   yarn install
   ```

2. **Geliştirici Sunucusunu Başlatın:**
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

3. **Tarayıcıda Görüntüleyin:**
   Konsolda beliren yerel adrese (genellikle `http://localhost:3000` veya `http://localhost:5173`) tıklayarak sunumu başlatabilirsiniz.

## 🕹️ Sunum Kontrolleri (Navigasyon)

Sunum sırasında dinleyicilerle aranızdaki etkileşimi en üst seviyede tutmak için şu kontrolleri kullanabilirsiniz:

- **Klavye:**
  - `Sağ Ok`, `Aşağı Ok`, `Space`, `PageDown`: Sonraki slayta geçer.
  - `Sol Ok`, `Yukarı Ok`, `PageUp`: Önceki slayta geçer.
  - `F`: Tam ekran (Fullscreen) modunu açıp kapatır.
- **Alt Navigasyon Barı (Bottom Nav):** Fareyi ekranın en altına götürdüğünüzde beliren barda;
  - Önceki/Sonraki oklarıyla geçiş yapabilir,
  - **Slayt Listesi (Menü)** ikonuna basarak 35 slaytlık ızgarayı açıp dilediğiniz konuya anında zıplayabilir,
  - Tam ekran butonunu kullanabilirsiniz.
- **Etkileşimli Ekranlar:** Slayt içindeki butonlara, şıklara ve laboratuvar kontrollerine fare ile tıklayarak etkileşime girebilirsiniz.

## 🛠️ Kullanılan Teknolojiler

- **React & TypeScript:** Sağlam ve tip güvenli bileşen mimarisi.
- **Vite:** Çok hızlı derleme ve canlı yükleme.
- **Framer Motion:** Yumuşak, etkileyici ve modern geçiş animasyonları.
- **Lucide React:** Modern ikon seti.
- **CSS3 (Vanilla):** Tamamen özelleştirilmiş, Glassmorphism (Cam efekti) tarzında koyu tema (Dark Mode) tasarımı.
- **KaTeX / MathJax Entegrasyonu:** Kuantum mekaniğinin karmaşık matematiksel denklemlerinin (Dirac notasyonu vb.) mükemmel renderlanması.

---

> *"Her zor problem kuantum problemi değildir. Ancak doğru problemi doğru şekilde modellerseniz, Kuantum Hesaplama bambaşka bir algoritmik düşünme biçimi sunar."*
