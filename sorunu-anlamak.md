# Sorunu Anlamak:

1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir?
   Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.

- Kullanıcı 1 butonuna tıkadı.
- App.js'te bulunan CalcButton value={1} componentine ait onClick eventi tetiklenir.
- addOne fonksiyonu çalışır. Bu fonksiyon return olarak { type: ADD_ONE }'ı verir.
- Bundan dolayı onClick={() => dispatch(addOne())} şeklinde yazıldığından dispatch return değerini alır ve type değerini ADD_ONE olarak reduce fonksiyonuna iletir.
- reducer fonksiyonu action'ı parametre olarak alır ve action.type değeri ADD_ONE'dır.
- switch sayesinde farklı case'ler kontrol edilir. ADD_ONE'a eşit olan case için state değeri kopyalanır ve total değeri 1 artar.
- TotalDisplay total artı 1'i gösterdi.
