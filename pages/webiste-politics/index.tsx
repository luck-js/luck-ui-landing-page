import React from 'react';
import BlogLayout from '../../src/blog/BlogLayout';
import { Theme } from '../../src/utils';
import { NextSeo } from 'next-seo/lib';
import styled from 'styled-components';
import {Box, Canon, List, MediumText, TextLink} from '../../src/components';
import media from '../../src/utils/media';

const Container = styled(Box)`
  background-color: ${Theme.colors.main};
  color: ${Theme.colors.black};
  max-width: 1012px;
  margin: 0 auto;
  padding: ${Theme.space.small}px ${Theme.space.xregular}px;
  
  ${media.greaterThan('mobile')`
    
  `}
  
  ${media.greaterThan('tablet')`
    padding: ${Theme.space.regular}px ${Theme.space.xregular}px;
  `}
  
  ${media.greaterThan('desktop')`
    max-width: 1138px;
    padding: ${Theme.space.xregular}px ${Theme.space.xregular}px;
  `}
`;

const Text = styled(MediumText).attrs({
  mt: ['small', 'small', 'medium', 'regular'],
})``;

const Index = () => {
  return (
    <>
      <NextSeo
        title="Luck - Polityka prywatności strony"
        description="Polityka prywatności strony. OŚWIADCZENIE O OCHRONIE DANYCH OSOBOWYCH. Informacja dotycząca zbierania danych osobowych"
      />
      <BlogLayout>
        <Container>
          <Canon>Polityka prywatności strony</Canon>
          <Text>OŚWIADCZENIE O OCHRONIE DANYCH OSOBOWYCH</Text>
          <Text>&sect; 1 Informacja dotycząca zbierania danych osobowych</Text>
          <Text>
            (1) Poniżej informujemy o zbieraniu danych osobowych podczas korzystania z naszej strony
            internetowej. Dane osobowe to wszystkie dane, kt&oacute;re można odnieść do konkretnej
            osoby, np. nazwisko, adres, adres e-mail, zachowanie użytkownika.
          </Text>
          <Text>
            (2) Podmiotem odpowiedzialnym zgodnie z art. 4 ust. 7 Og&oacute;lnego rozporządzenia o
            ochronie danych (RODO) jest zesp&oacute;ł LUCK,{' '}
            <TextLink href="mailto:info@luck.org.pl" modifiers={["darkGray"]}>info@luck.org.pl</TextLink>. Z naszym pełnomocnikiem do
            spraw ochrony danych osobowych można skontaktować się przez e-mail lub tradycyjną pocztą
            z dopiskiem &bdquo;Pełnomocnik ds. ochrony danych osobowych&rdquo;.
          </Text>
          <Text>
            (3) W przypadku nawiązania kontaktu z nami przez e-mail lub formularz kontaktowy podane
            przez Państwa dane (Państwa adres e-mail, ew. nazwisko, stanowisko i numer telefonu) są
            przez nas zapisywane, aby możliwe było udzielenie informacji na Państwa zapytanie.
            Uzyskane w ten spos&oacute;b dane są przez nas usuwane, kiedy ich przechowywanie nie
            jest już konieczne, lub ograniczamy ich przetwarzanie, jeśli istnieje ustawowy obowiązek
            przechowywania.
          </Text>
          <Text>
            (4) Jeśli w przypadku poszczeg&oacute;lnych funkcji naszej strony sięgamy po
            zatrudnionych usługodawc&oacute;w lub chcemy wykorzystywać Państwa dane do cel&oacute;w
            reklamowych, w dalszej części zostaną Państwo poinformowani o szczeg&oacute;łach każdej
            procedury. Wskazujemy przy tym także określone kryteria okresu przechowywania danych.
          </Text>
          <Text>&sect; 2 Przysługujące Państwu prawa</Text>
          <Text>
            (1) W odniesieniu do Państwa danych osobowych przysługują Państwu następujące prawa
            wobec nas:
          </Text>
          <List>
            <li>
              <Text>prawo do informacji,</Text>
            </li>
            <li>
              <Text>prawo do poprawiania lub usuwania,</Text>
            </li>
            <li>
              <Text>prawo do ograniczenia przetwarzania,</Text>
            </li>
            <li>
              <Text>prawo do sprzeciwu wobec przetwarzania danych osobowych,</Text>
            </li>
            <li>
              <Text>prawo do przenoszenia danych</Text>
            </li>
          </List>
          <Text>
            (2) Ponadto mają Państwo prawo wnieść skargę do organu nadzorczego w związku z
            przetwarzaniem przez nas Państwa danych osobowych.
          </Text>
          <Text>
            &sect; 3 Zbieranie danych osobowych podczas wizyty na naszej stronie internetowej
          </Text>
          <Text>
            (1) Kiedy strona internetowa jest wykorzystywana jedynie w celu uzyskania informacji, to
            znaczy jeśli nie rejestrują się Państwo lub nie przekazują nam Państwo informacji w inny
            spos&oacute;b, zbieramy tylko te dane osobowe, kt&oacute;re są przekazywane na nasz
            serwer przez Państwa przeglądarkę. Jeśli chcą Państwo przeglądać naszą stronę
            internetową, zbieramy następujące dane, kt&oacute;re są nam potrzebne ze względ&oacute;w
            technicznych, aby wyświetlać naszą stronę internetową oraz zagwarantować jej stabilność
            i bezpieczeństwo (podstawę prawną stanowi art. 6 ust. 1 z. 1 lit. f RODO):
          </Text>
          <List>
            <li>
              <Text>adres IP</Text>
            </li>
            <li>
              <Text>data i godzina zapytania</Text>
            </li>
            <li>
              <Text>r&oacute;żnica strefy czasowej w stosunku do Greenwich Mean Time (GMT)</Text>
            </li>
            <li>
              <Text>treść żądania (konkretna strona)</Text>
            </li>
            <li>
              <Text>status dostępu/ kod odpowiedzi HTTP</Text>
            </li>
            <li>
              <Text>przesyłana ilość danych</Text>
            </li>
            <li>
              <Text>strona internetowa, z kt&oacute;rej pochodzi żądanie</Text>
            </li>
            <li>
              <Text>przeglądarka</Text>
            </li>
            <li>
              <Text>system operacyjny i jego interfejs</Text>
            </li>
            <li>
              <Text>język i wersja oprogramowania przeglądarki.</Text>
            </li>
          </List>
          <Text>
            (2) Dodatkowo, opr&oacute;cz wyżej wymienionych danych, podczas korzystania z naszej
            strony internetowej na Państwa komputerze zapisywane są pliki cookies. Pliki cookies to
            niewielkie pliki tekstowe, zapisywane w pamięci Państwa komputera i przyporządkowane do
            wykorzystywanej przez Państwa przeglądarki. Dzięki nim do organu, kt&oacute;ry wysyła
            plik cookie (w tym przypadku do nas), docierają określone informacje. Pliki cookies nie
            mogą uruchamiać żadnych program&oacute;w ani przenosić wirus&oacute;w na Państwa
            komputer. Dzięki nim oferta internetowa jest bardziej przyjazna dla użytkownika i
            efektywna.
          </Text>
          <Text>(3) Zastosowanie plik&oacute;w cookies:</Text>
          <Text>
            a) Na tej stronie internetowej wykorzystywane są następujące rodzaje plik&oacute;w
            cookies, kt&oacute;rych zakres i spos&oacute;b działania zostaną objaśnione poniżej:
          </Text>
          <List>
            <li>
              <Text>transient cookies (szczeg&oacute;ły w b)</Text>
            </li>
            <li>
              <Text>persistent cookies (szczeg&oacute;ły w c).</Text>
            </li>
          </List>
          <Text>
            b) Transient cookies to pliki wykorzystywane czasowo, kt&oacute;re są automatycznie
            usuwane po zamknięciu przeglądarki. Zaliczają się do nich w szczeg&oacute;lności sesyjne
            pliki cookies. Zapisują one tzw. identyfikator sesji, umożliwiający przyporządkowanie
            r&oacute;żnych zapytań przeglądarki do wsp&oacute;lnej sesji. Dzięki temu możliwe jest
            ponowne rozpoznanie Państwa komputera, jeśli powr&oacute;cą Państwo na naszą stronę
            internetową. Sesyjne pliki cookies są usuwane po wylogowaniu się lub zamknięciu
            przeglądarki.
          </Text>
          <Text>
            c) Persistent cookies to trwałe pliki usuwane automatycznie po upływie określonego
            czasu, kt&oacute;ry może być r&oacute;żny w zależności od rodzaju pliku. Pliki cookies
            można w każdej chwili usunąć, korzystając z ustawień bezpieczeństwa swojej przeglądarki.
          </Text>
          <Text>
            d) Ustawienia przeglądarki można dowolnie skonfigurować i np. odrzucić przyjmowanie
            plik&oacute;w cookies podmiot&oacute;w trzecich lub wszystkich plik&oacute;w cookies.
            Zwracamy jednak uwagę, że w&oacute;wczas nie będą Państwo mogli w pełni korzystać ze
            wszystkich funkcji tej strony internetowej.
          </Text>
          <Text>
            e) Wykorzystujemy pliki cookies do tego, by m&oacute;c zidentyfikować Państwa przy
            kolejnej wizycie, jeśli posiadają Państwo u nas konto. W przeciwnym razie konieczne
            byłoby ponowne logowanie przy każdej wizycie.
          </Text>
          <Text>
            f) Wykorzystywane pliki flash cookies nie są rejestrowane przez Państwa przeglądarkę,
            lecz przez wtyczkę flash. Ponadto wykorzystujemy HTML5 storage objects, kt&oacute;re
            zapisywane są na Państwa urządzeniu końcowym. Obiekty te zapisują wymagane dane
            niezależnie od wykorzystywanej przez Państwa przeglądarki i nie mają automatycznej daty
            upływu. Jeśli nie życzą sobie Państwo przetwarzania plik&oacute;w flash cookies,
            konieczne jest zainstalowanie odpowiedniego dodatku, np. Adobe-Flash-Killer-Cookie dla
            Google Chrome. Można też zapobiec wykorzystywaniu HTML5 storage objects, ustawiając tryb
            prywatny w przeglądarce. Ponadto zalecamy regularne ręczne usuwanie plik&oacute;w
            cookies i historii przeglądarki.
          </Text>
          <Text>&sect; 4 Sprzeciw lub odwołanie zgody na przetwarzanie danych osobowych</Text>
          <Text>
            (1) Jeśli wyrazili Państwo zgodę na przetwarzanie danych osobowych, w każdej chwili mogą
            ją Państwo odwołać. Odwołanie zgody wpływa na dopuszczalność przetwarzania Państwa
            danych osobowych, gdy wyrazili je Państwo w stosunku do nas.
          </Text>
          <Text>
            (2) Jeśli przetwarzanie przez nas Państwa danych osobowych opiera się na wyważeniu
            interes&oacute;w, mogą Państwo złożyć sprzeciw wobec przetwarzania. Dotyczy to sytuacji,
            gdy przetwarzanie danych nie jest wymagane do wykonania umowy z Państwem, co zostało
            szczeg&oacute;łowo opisane w poniższym opisie funkcji. W przypadku złożenia takiego
            sprzeciwu prosimy o wyjaśnienie powod&oacute;w, dla kt&oacute;rych nie powinniśmy
            przetwarzać Państwa danych osobowych w realizowany przez nas spos&oacute;b. W przypadku
            uzasadnionego sprzeciwu sprawdzimy stan rzeczy i zaprzestaniemy przetwarzania danych
            osobowych lub je dostosujemy, albo przedstawimy Państwu dostateczne, uzasadnione powody,
            na podstawie kt&oacute;rych będziemy kontynuowali przetwarzanie.
          </Text>
          <Text>
            Oczywiście mogą Państwo r&oacute;wnież w każdej chwili wyrazić sprzeciw wobec
            przetwarzania Państwa danych osobowych do cel&oacute;w reklamowych i do analizy danych.
            O swoim sprzeciwie można nas poinformować, korzystając z poniższych danych
            kontaktowych:&nbsp;
          </Text>
          <Text>&sect; 5 Google Analytics</Text>
          <Text>
            (1) Ta strona internetowa korzysta z Google Analytics, usługi analizowania usług
            internetowych, oferowanej przez Google Inc. (&bdquo;Google&rdquo;). Google Analytics
            wykorzystuje tzw. &bdquo;Cookies&rdquo;, pliki tekstowe, kt&oacute;re są zapisywane na
            Państwa komputerze i umożliwiają analizę korzystania przez Państwa ze strony
            internetowej. Uzyskane przez plik cookie informacje dotyczące sposobu korzystania przez
            Państwa z tej strony internetowej są zwykle przekazywane na serwer Google w USA i tam
            zapisywane. W przypadku aktywowania anonimizacji IP na tej stronie internetowej w
            obrębie państw członkowskich Unii Europejskiej lub w innych krajach, kt&oacute;re są
            stronami Porozumienia o Europejskim Obszarze Gospodarczym, Państwa adres IP zostanie
            jednak najpierw skr&oacute;cony przez Google. Tylko w wyjątkowych przypadkach pełny
            adres IP jest przekazywany na serwer Google w USA i tam skracany. Na zlecenie
            właściciela tej strony internetowej firma Google wykorzystuje te informacje do analizy
            Państwa sposobu korzystania ze strony internetowej, sporządzania raport&oacute;w
            dotyczących aktywności na stronie internetowej oraz realizacji dalszych usług związanych
            z wykorzystaniem strony internetowej i Internetu na rzecz właściciela strony
            internetowej.
          </Text>
          <Text>
            (2) Adres IP przekazany przez Państwa przeglądarkę w ramach usługi Google Analytics nie
            jest zestawiany przez Google z innymi danymi.
          </Text>
          <Text>
            (3) Można zapobiec zapisywaniu plik&oacute;w cookies przez odpowiednie ustawienia w
            oprogramowaniu przeglądarki. Zwracamy jednak uwagę, że w takim przypadku nie będą
            Państwo mogli w pełni korzystać ze wszystkich funkcji tej strony internetowej. Ponadto
            mogą Państwo zapobiec pobieraniu danych uzyskanych przez plik cookie i odnoszących się
            do Państwa sposobu korzystania ze strony internetowej (łącznie z adresem IP) przez
            Google, a także przetwarzaniu tych danych przez Google, jeśli pobiorą Państwo i
            zainstalują wtyczkę do przeglądarki, dostępną pod następującym linkiem:
            tools.google.com/dlpage/gaoptout.
          </Text>
          <Text>
            (4) Ta strona internetowa korzysta z Google Analytics z rozszerzeniem
            &bdquo;anonymizeIp()&rdquo;. Oznacza to, że adresy IP są przetwarzane dalej po
            skr&oacute;ceniu, aby wykluczyć możliwość odniesienia ich do konkretnych os&oacute;b.
            Jeśli w przypadku danych osobowych zebranych na Państwa temat możliwe jest odniesienie
            ich do konkretnej osoby, takie odniesienie jest od razu wykluczane, a dane osobowe są
            niezwłocznie usuwane.
          </Text>
          <Text>
            (5) Korzystamy z Google Analytics w celu analizowania korzystania z naszej strony
            internetowej oraz jej regularnego usprawniania. Dzięki uzyskanym statystykom możemy
            poprawiać naszą ofertę i uczynić ją bardziej interesującą dla Państwa jako
            użytkownik&oacute;w. W odniesieniu do wyjątkowych przypadk&oacute;w, w kt&oacute;rych
            dane osobowe przekazywane są do USA, Google podporządkowuje się porozumieniu EU-US
            Privacy Shield, www.privacyshield.gov/EU-US-Framework. Podstawę prawną dla korzystania z
            Google Analytics stanowi art. 6 ust. 1 zd. 1 lit. f) RODO.
          </Text>
          <Text>
            (6) Informacje dostawcy zewnętrznego: Google Dublin, Google Ireland Ltd., Gordon House,
            Barrow Street, Dublin 4, Ireland, fax: +353 (1) 436 1001. Warunki korzystania:
            www.google.com/analytics/terms/de.html, informacje dotyczące ochrony danych osobowych:
            www.google.com/intl/de/analytics/learn/privacy.html, a także oświadczenie o ochronie
            danych osobowych: www.google.de/intl/de/policies/privacy.
          </Text>
          <Text>&sect; 6 Zastosowanie wtyczek do portali społecznościowych</Text>
          <Text>
            (1) Obecnie stosujemy następujące wtyczki do portali społecznościowych: Facebook.
            Korzystamy przy tym z tzw. rozwiązania wymagającego dw&oacute;ch kliknięć. To oznacza,
            że kiedy odwiedzą Państwo naszą stronę internetową, początkowo żadne dane osobowe nie są
            przekazywane do dostawc&oacute;w wtyczek. Dostawcę wtyczki można rozpoznać po oznaczeniu
            w okienku nad jego inicjałem lub logo. Przycisk umożliwia Państwu bezpośrednią
            komunikację z dostawcą wtyczki. Tylko jeśli klikną Państwo to oznaczone pole i w ten
            spos&oacute;b je aktywują, dostawca wtyczki otrzyma informację, że otworzyli Państwo
            odnośną stronę z naszej oferty internetowej. Ponadto przekazywane są dane
            wyszczeg&oacute;lnione w &sect; 3 niniejszego oświadczenia. W przypadku Xing, zgodnie z
            informacją dostawcy w Niemczech, adres IP jest anonimizowany od razu po pobraniu. W
            wyniku aktywowania wtyczki Państwa dane osobowe są więc przekazywane do danego dostawcy
            wtyczki i tam (w przypadku dostawc&oacute;w amerykańskich &ndash; w USA) zapisywane.
            Ponieważ dostawca wtyczki wykorzystuje do zbierania danych przede wszystkim pliki
            cookies, przed kliknięciem szarego okienka zalecamy usunięcie wszystkich plik&oacute;w
            cookies w ustawieniach bezpieczeństwa przeglądarki.
          </Text>
          <Text>
            (2) Nie mamy wpływu na pobierane dane i procedury przetwarzania danych. Nie jest nam
            r&oacute;wnież znany pełen zakres zbierania danych, cele przetwarzania, ani okresy
            przechowywania. Nie posiadamy r&oacute;wnież informacji dotyczących usuwania danych
            zebranych przez dostawc&oacute;w wtyczek.
          </Text>
          <Text>
            (3) Dostawca wtyczki zapisuje zebrane na Państwa temat dane jako profile użytkownika i
            wykorzystuje je do cel&oacute;w reklamowych, badania rynku oraz do kształtowania swojej
            strony internetowej zgodnie z zapotrzebowaniem. Taka analiza jest przeprowadzana przede
            wszystkim (r&oacute;wnież dla niezalogowanych użytkownik&oacute;w) w celu prezentowania
            reklam dostosowanych do zapotrzebowania, a także do informowania innych
            użytkownik&oacute;w sieci społecznościowej o Państwa aktywności na naszej stronie
            internetowej. Przysługuje Państwu prawo do sprzeciwu wobec tworzenia takich
            profil&oacute;w użytkownika, jednak w celu skorzystania z tego prawa muszą Państwo
            zwr&oacute;cić się do danego dostawcy wtyczki. Poprzez wtyczki oferujemy Państwu
            możliwość interakcji z sieciami społecznościowymi oraz innymi użytkownikami, dzięki
            czemu możemy ulepszać naszą ofertę i czynić ją bardziej interesującą dla Państwa jako
            użytkownik&oacute;w. Podstawę prawną dla korzystania z wtyczek stanowi art. 6 ust. 1 zd.
            1 lit. f) RODO.
          </Text>
          <Text>
            (4) Przekazywanie danych następuje niezależnie od tego, czy mają Państwo konto u
            dostawcy wtyczki i czy są na nim zalogowani. Jeśli są Państwo zalogowani u dostawcy
            wtyczki, Państwa dane pobrane u nas zostaną przyporządkowane bezpośrednio do Państwa
            konta u dostawcy wtyczki. Jeśli wcisną Państwo aktywowany przycisk i na przykład
            skorzystają z linku do strony, dostawca wtyczki zapisuje także tę informację na Państwa
            koncie użytkownika i publicznie przekazuje ją Państwa znajomym. Zalecamy, by po
            zakończeniu korzystania z serwisu społecznościowego zawsze się wylogować, w
            szczeg&oacute;lności jednak przed aktywowaniem przycisku, ponieważ w ten spos&oacute;b
            można uniknąć przyporządkowania do Państwa profilu przez tego dostawcę wtyczki.
          </Text>
          <Text>
            (5) Więcej informacji na temat celu i zakresu zbierania i przetwarzania danych przez
            właścicieli wtyczek można uzyskać w następujących oświadczeniach o ochronie danych
            osobowych poszczeg&oacute;lnych dostawc&oacute;w. Otrzymają tam Państwo r&oacute;wnież
            dalsze informacje dotyczące przysługujących Państwu w związku z tym praw oraz możliwości
            dokonania ustawień w celu ochrony swojej sfery prywatnej.
          </Text>
          <Text>
            (6) Adresy poszczeg&oacute;lnych dostawc&oacute;w wtyczek i adres URL do ich
            wskaz&oacute;wek dotyczących danych osobowych:
          </Text>
          <Text>
            a) Google Inc., 1600 Amphitheater Parkway, Mountainview, California 94043, USA;
            www.google.com/policies/privacy/partners/. Google podporządkowuje się porozumieniu
            EU-US-Privacy-Shield, www.privacyshield.gov/EU-US-Framework.
          </Text>
          <Text>
            b) Twitter, Inc., 1355 Market St, Suite 900, San Francisco, California 94103, USA;
            twitter.com/privacy. Twitter podporządkowuje się porozumieniu EU-US-Privacy-Shield,
            www.privacyshield.gov/EU-US-Framework.
          </Text>
          <Text>c) Xing AG, G&auml;nsemarkt 43, 20354 Hamburg, DE; www.xing.com/privacy.</Text>
          <Text>
            d) LinkedIn Corporation, 2029 Stierlin Court, Mountain View, California 94043, USA;
            www.linkedin.com/legal/privacy-policy. LinkedIn podporządkowuje się porozumieniu
            EU-US-Privacy-Shield, www.privacyshield.gov/EU-US-Framework.
          </Text>
          <Text>
            e) Facebook Inc. Hacker Way, Menlo Park, California 94025, USA;
            developers.facebook.com/docs/plugins/. Facebook podporządkowuje się porozumieniu
            EU-US-Privacy-Shield, www.privacyshield.gov/EU-US-Framework.
          </Text>
        </Container>
      </BlogLayout>
    </>
  );
};

export default Index;
