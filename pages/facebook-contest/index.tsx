import React from 'react';
import BlogLayout from '../../src/blog/BlogLayout';
import { Theme } from '../../src/utils';
import { NextSeo } from 'next-seo/lib';
import styled from 'styled-components';
import {Box, Canon, ListOl, MediumText, TextLink, Trafalgar} from '../../src/components';
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

const Header = styled(Trafalgar).attrs({
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
          <Canon>REGULAMIN KONKURSU FACEBOOK</Canon>
          <Text>Z DNIA 21.11.2019 R.</Text>
          <Header>§ 1. POSTANOWIENIA OG&Oacute;LNE</Header>
          <ListOl>
            <li>
              <Text>
                Organizatorem konkursu Facebook (zwanym dalej &ldquo;Konkursem&rdquo;), jest
                zesp&oacute;ł LUCK, (zwany dalej &bdquo;Organizatorem&rdquo;).
              </Text>
            </li>
            <li>
              <Text>Fundatorem nagrody jest Organizator.</Text>
            </li>
            <li>
              <Text>
                Administratorem danych osobowych udostępnianych przez Uczestnik&oacute;w Konkursu
                jest Organizator.
              </Text>
            </li>
            <li>
              <Text>
                Podanie danych osobowych ma charakter dowolny, lecz niezbędny do przystąpienia przez
                Uczestnika do Konkursu. Osobom udostępniającym dane przysługuje prawo dostępu do
                tych danych, ich zmian bądź usunięcia.
              </Text>
            </li>
            <li>
              <Text>
                Niniejszy regulamin (dalej &bdquo;Regulamin&rdquo;) określa warunki Konkursu.
              </Text>
            </li>
            <li>
              <Text>
                Konkurs nie jest stworzony, administrowany, wspierany ani sponsorowany przez
                Facebook. Facebook jest znakiem towarowym zastrzeżonym przez Facebook, Inc.
              </Text>
            </li>
            <li>
              <Text>
                Konkurs jest prowadzony na stronie{' '}
                <TextLink modifiers={['darkGray']} href="https://www.facebook.com/app.luck/?__xts__%5B0%5D=68.ARBgZNg7Ajiq2oMFmWzit53wPtjRNpN9ZNyxNC-vtiq-q7o_XjBC4PQzf-cWXkoZ37NxgcYGo5Z7t3pMPXqge5COIbUw_Kqzefx_Ose7BQvm1DsJa7BWIzyqjGCKQOf5HaexKcSgGvhqhNl_0JEEBa8jHcOWvChUKQHEuZdH9D8lSVb6l98HF0gh42jBZltD4JqAkIo6teapBY8FZhPOwk1L-24iSUc-JlegQETa3vpnjJaOyEzyheJuoWXq3BGN4skhRFtbaFQn1l_6foGUcBdP6RLCSW_eys3xW8t5tR5tHhXv9k6CUPiyVGnVMsHrmPkkebt9tZALhLWTJHgYOjXT5g">
                  https://www.facebook.com/app.luck/
                </TextLink>{' '}
                (zwanej dalej &ldquo;Fanpage&rdquo;).
              </Text>
            </li>
            <li>
              <Text>
                Nadz&oacute;r nad prawidłowością i przebiegiem Konkursu, tj. udzielaniem informacji
                na temat Konkursu oraz rozpatrywaniem reklamacji sprawują pracownicy Organizatora.
              </Text>
            </li>
          </ListOl>
          <Header>§ 2. UCZESTNICY KONKURSU</Header>
          <ListOl>
            <li>
              <Text>
                Uczestnikami Konkursu mogą być wyłącznie osoby fizyczne, konsumenci w rozumieniu
                art. 221 kodeksu cywilnego , posiadające pełną zdolności do czynności prawnych,
                będące użytkownikami i posiadający aktywne konto w serwisie Facebook.com;
                kt&oacute;re zaakceptowały niniejszy Regulamin (dalej: &bdquo;Uczestnik&rdquo;).
              </Text>
            </li>
            <li>
              <Text>Uczestnik oświadcza, że:</Text>
            </li>
            <li>
              <Text>jest osobą fizyczną, posiadającą pełną zdolność do czynności prawnych;</Text>
            </li>
            <li>
              <Text>
                zapoznał się z treścią niniejszego Regulaminu i w spos&oacute;b dobrowolny
                przystępuje do Konkursu;
              </Text>
            </li>
            <li>
              <Text>
                wyraża zgodę i akceptuje warunki Regulaminu, w tym zapoznał się z treścią dotyczącą
                procedury odbioru nagrody i ją w pełni akceptuje;
              </Text>
            </li>
            <li>
              <Text>
                zobowiązuje się do przestrzegania postanowień Regulaminu, w tym r&oacute;wnież
                regulaminu Facebook;
              </Text>
            </li>
            <li>
              <Text>
                wyraził zgodę na przetwarzanie danych osobowych dla cel&oacute;w związanych z
                uczestnictwem w Konkursie;
              </Text>
            </li>
            <li>
              <Text>jest zarejestrowanym Użytkownikiem portalu społecznościowego Facebook;</Text>
            </li>
            <li>
              <Text>
                W Konkursie nie mogą uczestniczyć pracownicy i wsp&oacute;łpracownicy Organizatora.
              </Text>
            </li>
          </ListOl>
          <Header>§ 3. NAGRODA</Header>
          <ListOl>
            <li>
              <Text>
                W Konkursie przewidziano JEDNĄ NAGRODĘ &ndash; dla osoby wyłonionej w spos&oacute;b
                wskazany w &sect;6.
              </Text>
            </li>
            <li>
              <Text>
                Nagrodami (dalej: &bdquo;Nagroda&rdquo;) w Konkursie jest zestaw upomink&oacute;w z
                Portugalii.&nbsp;
              </Text>
            </li>
            <li>
              <Text>
                Informacja o Nagrodzie będzie zawarta w treści ogłoszenia o Konkursie opublikowanego
                na portalu Facebook, na profilu LUCK.
              </Text>
            </li>
            <li>
              <Text>
                Laureatowi nie przysługuje prawo wymiany Nagrody na got&oacute;wkę ani nagrodę
                innego rodzaju.
              </Text>
            </li>
            <li>
              <Text>
                Zwycięzca może zrzec się Nagrody, ale w zamian nie przysługuje mu ekwiwalent
                pieniężny ani jakakolwiek inna nagroda.
              </Text>
            </li>
          </ListOl>
          <Header>§ 4. MIEJSCE, CZAS I ZASADY KONKURSU</Header>
          <ListOl>
            <li>
              <Text>
                Konkurs jest dostępny w formie ogłoszenia konkursowego (dalej: &bdquo;post
                konkursowy&ldquo;) na portalu społecznościowym Facebook na profilu Organizatora pod
                adresem{' '}
                <TextLink modifiers={['darkGray']} href="https://www.facebook.com/app.luck/?__xts__%5B0%5D=68.ARBgZNg7Ajiq2oMFmWzit53wPtjRNpN9ZNyxNC-vtiq-q7o_XjBC4PQzf-cWXkoZ37NxgcYGo5Z7t3pMPXqge5COIbUw_Kqzefx_Ose7BQvm1DsJa7BWIzyqjGCKQOf5HaexKcSgGvhqhNl_0JEEBa8jHcOWvChUKQHEuZdH9D8lSVb6l98HF0gh42jBZltD4JqAkIo6teapBY8FZhPOwk1L-24iSUc-JlegQETa3vpnjJaOyEzyheJuoWXq3BGN4skhRFtbaFQn1l_6foGUcBdP6RLCSW_eys3xW8t5tR5tHhXv9k6CUPiyVGnVMsHrmPkkebt9tZALhLWTJHgYOjXT5g">
                  https://www.facebook.com/app.luck/
                </TextLink>
              </Text>
            </li>
            <li>
              <Text>
                Konkurs trwa od dnia 21 listopada 2019 godz: 18:00 do 24 listopada 2019 godz 12:00
              </Text>
            </li>
          </ListOl>
          <Header>§ 5. ZASADY UCZESTNICTWA W KONKURSIE</Header>
          <ListOl>
            <li>
              <Text>Zadaniem Uczestnika Konkursu jest:</Text>
            </li>
            <li>
              <Text>
                zamieszczenie (w formie komentarza pod Postem konkursowym) poprawnego rozwiązania
                (odpowiedzi) zadania przedstawionego w treści posta konkursowego na Fanpage'u
                Organizatora,
              </Text>
            </li>
            <li>
              <Text>
                Informacje o konkursie będą dostępne na Facebooku pod adresem{' '}
                <TextLink modifiers={['darkGray']} href="https://www.facebook.com/app.luck/?__xts__%5B0%5D=68.ARBgZNg7Ajiq2oMFmWzit53wPtjRNpN9ZNyxNC-vtiq-q7o_XjBC4PQzf-cWXkoZ37NxgcYGo5Z7t3pMPXqge5COIbUw_Kqzefx_Ose7BQvm1DsJa7BWIzyqjGCKQOf5HaexKcSgGvhqhNl_0JEEBa8jHcOWvChUKQHEuZdH9D8lSVb6l98HF0gh42jBZltD4JqAkIo6teapBY8FZhPOwk1L-24iSUc-JlegQETa3vpnjJaOyEzyheJuoWXq3BGN4skhRFtbaFQn1l_6foGUcBdP6RLCSW_eys3xW8t5tR5tHhXv9k6CUPiyVGnVMsHrmPkkebt9tZALhLWTJHgYOjXT5g">
                  https://www.facebook.com/app.luck/
                </TextLink>
              </Text>
            </li>
          </ListOl>
          <Header>§ 6. WARUNKI UCZESTNICTWA W KONKURSIE I ODBIORU NAGR&Oacute;D</Header>
          <ListOl>
            <li>
              <Text>
                Dostęp do Konkursu jest bezpłatny i wymaga rejestracji na portalu społecznościowym
                Facebook.
              </Text>
            </li>
            <li>
              <Text>
                Warunkiem uczestnictwa w Konkursie jest zaakceptowanie Regulaminu oraz poprawne
                wykonanie wszystkich zadań opisanych w &sect; 5. Ust. 1 Regulaminu.
              </Text>
            </li>
            <li>
              <Text>
                O przyznaniu nagrody decyduje Organizator w drodze analizy poprawności wykonania
                zadań opisanych w &sect; 5. Ust. 1 Regulaminu przez Uczestnik&oacute;w Konkursu
              </Text>
            </li>
            <li>
              <Text>Spośr&oacute;d nadesłanych odpowiedzi Organizator wyłoni 1 zwycięzcę.</Text>
            </li>
            <li>
              <Text>
                Zwycięzca Konkursu zostanie powiadomiony o wygranej i warunkach odbioru Nagrody za
                pośrednictwem wiadomości prywatnej, wysłanej na Facebooku w ciągu 3 dni roboczych od
                momentu zakończenia konkursu.
              </Text>
            </li>
            <li>
              <Text>
                Publiczna informacja o wygranej zostanie r&oacute;wnież umieszczona w komentarzu do
                posta konkursowego na stronie{' '}
                <TextLink modifiers={['darkGray']} href="https://www.facebook.com/app.luck/?__xts__%5B0%5D=68.ARBgZNg7Ajiq2oMFmWzit53wPtjRNpN9ZNyxNC-vtiq-q7o_XjBC4PQzf-cWXkoZ37NxgcYGo5Z7t3pMPXqge5COIbUw_Kqzefx_Ose7BQvm1DsJa7BWIzyqjGCKQOf5HaexKcSgGvhqhNl_0JEEBa8jHcOWvChUKQHEuZdH9D8lSVb6l98HF0gh42jBZltD4JqAkIo6teapBY8FZhPOwk1L-24iSUc-JlegQETa3vpnjJaOyEzyheJuoWXq3BGN4skhRFtbaFQn1l_6foGUcBdP6RLCSW_eys3xW8t5tR5tHhXv9k6CUPiyVGnVMsHrmPkkebt9tZALhLWTJHgYOjXT5g">
                  https://www.facebook.com/app.luck/
                </TextLink>
              </Text>
            </li>
            <li>
              <Text>
                Warunkiem odebrania przez wyr&oacute;żnionego Uczestnika nagrody jest przesłanie w
                ciągu 36 godzin od ogłoszenia wynik&oacute;w Konkursu na Fanpage`u -{' '}
                <TextLink modifiers={['darkGray']} href="https://www.facebook.com/app.luck/?__xts__%5B0%5D=68.ARBgZNg7Ajiq2oMFmWzit53wPtjRNpN9ZNyxNC-vtiq-q7o_XjBC4PQzf-cWXkoZ37NxgcYGo5Z7t3pMPXqge5COIbUw_Kqzefx_Ose7BQvm1DsJa7BWIzyqjGCKQOf5HaexKcSgGvhqhNl_0JEEBa8jHcOWvChUKQHEuZdH9D8lSVb6l98HF0gh42jBZltD4JqAkIo6teapBY8FZhPOwk1L-24iSUc-JlegQETa3vpnjJaOyEzyheJuoWXq3BGN4skhRFtbaFQn1l_6foGUcBdP6RLCSW_eys3xW8t5tR5tHhXv9k6CUPiyVGnVMsHrmPkkebt9tZALhLWTJHgYOjXT5g">
                  https://www.facebook.com/app.luck/
                </TextLink>{' '}
                wiadomości prywatnej z następującymi danymi:
              </Text>
            </li>
            <li>
              <Text>imię i nazwisko</Text>
            </li>
            <li>
              <Text>adres korespondencyjny</Text>
            </li>
            <li>
              <Text>numer telefonu</Text>
            </li>
            <li>
              <Text>adres mailowy</Text>
            </li>
            <li>
              <Text>
                Brak wysłania wiadomości, o kt&oacute;rej mowa w pkt. 3 lub przekroczenie
                dopuszczalnego czasu odpowiedzi lub wysłanie nieprawidłowych danych powoduje utratę
                przez uczestnika prawa do nagrody.
              </Text>
            </li>
            <li>
              <Text>
                Przyznane w Konkursie nagrody zostaną wysłane uczestnikom do 40 dni kalendarzowych
                od dnia otrzymania przez Organizatora informacji, o kt&oacute;rej mowa w ust. 6.
              </Text>
            </li>
            <li>
              <Text>
                Nagrody zostaną wysłane na koszt Organizatora pocztą bądź za pomocą firmy
                kurierskiej na adres wskazany przez Uczestnika.
              </Text>
            </li>
            <li>
              <Text>
                Przyznane nagrody nie mogą być wymienione na got&oacute;wkę, ani na inne rzeczy.
                Nagrodzonym Uczestnikom nie przysługuje prawo do zastrzeżenia szczeg&oacute;lnych
                właściwości poszczeg&oacute;lnych nagr&oacute;d.
              </Text>
            </li>
          </ListOl>
          <Header>§ 7. ZAKRES ODPOWIEDZIALNOŚCI ORGANIZATORA</Header>
          <ListOl>
            <li>
              <Text>
                Organizator nie ponosi odpowiedzialności za rzetelność i prawdziwość danych
                Uczestnik&oacute;w Konkursu, w tym za brak możliwości przekazania nagr&oacute;d, z
                przyczyny leżących po stronie Uczestnika, w szczeg&oacute;lności, jeśli ten nie
                podał prawdziwego adresu do korespondencji lub podane dane są niepełne lub
                nieaktualne.
              </Text>
            </li>
            <li>
              <Text>
                Organizator oświadcza, że nie prowadzi kontroli, ani monitoringu treści
                umieszczanych przez Uczestnik&oacute;w w zakresie rzetelności i prawdziwości, z
                zastrzeżeniem działań związanych z usunięciem naruszeń Regulaminu lub przepis&oacute;w powszechnie obowiązujących.
              </Text>
            </li>
            <li>
              <Text>
                Organizator zastrzega sobie prawo do wykluczenia z udziału w Konkursie
                Uczestnik&oacute;w, kt&oacute;rych działania są sprzeczne z prawem lub Regulaminem
                oraz regulaminem Facebooka, w szczeg&oacute;lności uczestnik&oacute;w, kt&oacute;rzy:
              </Text>
            </li>
            <li>
              <Text>
                a) zamieszczają treści niezgodne z obowiązującym prawem lub Regulaminem dostępnym na
                portalu Facebook (w szczeg&oacute;lności zawierające treści obraźliwe,
                zar&oacute;wno w warstwie tekstowej, jak i graficznej);
              </Text>
            </li>
            <li>
              <Text>
                b) podejmują działania z wykorzystaniem konta/profilu utworzonego niezgodnie z zasadami Facebooka;
              </Text>
            </li>
            <li>
              <Text>
                c) podejmują działania z wykorzystaniem niezgodnych z zasadami Facebooka
                kont/profili os&oacute;b trzecich;
              </Text>
            </li>
            <li>
              <Text>d) ingerują w mechanizm działania Konkursu;</Text>
            </li>
            <li>
              <Text>e) tworzą fikcyjne konta/profile w serwisie Facebook</Text>
            </li>
            <li>
              <Text>
                Organizator nie ponosi odpowiedzialności za jakiekolwiek zakł&oacute;cenia w
                działaniu łącz teleinformatycznych, serwer&oacute;w, interfejs&oacute;w,
                przeglądarek oraz platformy Facebook.
              </Text>
            </li>
            <li>
              <Text>
                Organizator nie ponosi odpowiedzialności za czasowe lub stałe zablokowanie strony
                lub aplikacji ze strony Facebooka.
              </Text>
            </li>
          </ListOl>
          <Header>§ 8. PRZETWARZANIE DANYCH OSOBOWYCH</Header>
          <ListOl>
            <li>
              <Text>
                Dane osobowe Uczestnik&oacute;w Konkursu będą przetwarzane przez Organizatora
                wyłącznie w celu dokonania czynności niezbędnych do prawidłowego przeprowadzenia
                Konkursu.
              </Text>
            </li>
            <li>
              <Text>
                Dane osobowe Uczestnik&oacute;w Konkursu będą przechowywane przez Organizatora tylko
                przez okres niezbędny do przeprowadzenia Konkursu i wydania nagr&oacute;d
                wyr&oacute;żnionym Uczestnikom.
              </Text>
            </li>
            <li>
              <Text>
                Uczestnicy mają prawo wglądu do przetwarzanych danych i ich poprawiania oraz
                usuwania. Dane są podawane na zasadach dobrowolności, przy czym w zakresie
                uczestnictwa w Konkursie wymagana jest rejestracja na portalu społecznościowym
                Facebook.
              </Text>
            </li>
            <li>
              <Text>
                W momencie usunięcia danych Użytkownik traci możliwość Uczestnictwa w Konkursie.
              </Text>
            </li>
          </ListOl>
          <Header>§ 9. PRAWA AUTORSKIE</Header>
          <ListOl>
            <li>
              <Text>
                Wszelkie prawa własności intelektualnej do Konkursu przysługują Organizatorowi.
                Uczestnictwo w Konkursie nie skutkuje w żadnym zakresie nabyciem przez
                Uczestnik&oacute;w jakichkolwiek praw własności intelektualnej. Zabronione jest
                naruszanie w jakikolwiek spos&oacute;b praw własności intelektualnej w Konkursie, w
                szczeg&oacute;lności:
              </Text>
            </li>
            <li>
              <Text>
                a) kopiowanie, modyfikowanie oraz transmitowanie elektronicznie lub
                rozpowszechnianie w inny spos&oacute;b mechanizmu Konkursu lub jego części, a także
                poszczeg&oacute;lnych utwor&oacute;w i baz danych, bez wyraźnej pisemnej zgody Administratora;
              </Text>
            </li>
            <li>
              <Text>
                b) korzystanie z Konkursu w spos&oacute;b niezgodny z Regulaminem lub powszechnie
                obowiązującymi przepisami.
              </Text>
            </li>
          </ListOl>
          <Header>§ 10. REKLAMACJE I ZGŁOSZENIA NARUSZEŃ</Header>
          <ListOl>
            <li>
              <Text>
                Wszelkie reklamacje dotyczące sposobu przeprowadzania Konkursu, Uczestnicy winni
                zgłaszać na piśmie w czasie trwania Konkursu, jednak nie p&oacute;źniej niż w
                terminie 14 (czternastu) dni od dnia wydania Nagr&oacute;d.
              </Text>
            </li>
            <li>
              <Text>
                Reklamacja zgłoszona po wyznaczonym terminie nie wywołuje skutk&oacute;w prawnych.
              </Text>
            </li>
            <li>
              <Text>
                Pisemna reklamacja powinna zawierać imię, nazwisko, dokładny adres Uczestnika oraz
                dokładny opis i uzasadnienie reklamacji.
              </Text>
            </li>
            <li>
              <Text>
                Reklamacja powinna być przesłana listem poleconym na adres Organizatora z dopiskiem
                &ldquo;Konkurs na Facebooku z dnia 21.11.2019 r.&rdquo;
              </Text>
            </li>
            <li>
              <Text>Reklamacje rozpatrywane będą pisemnie w terminie 30 dni.</Text>
            </li>
          </ListOl>
          <Header>§ 11. POSTANOWIENIA KOŃCOWE</Header>
          <ListOl>
            <li>
              <Text>
                Regulamin wchodzi w życie z dniem 21 listopada 2019 r. i obowiązuje do 30.12.2019 r.
              </Text>
            </li>
            <li>
              <Text>
                W kwestiach nieuregulowanych niniejszym Regulaminem stosuje się przepisy Kodeksu
                cywilnego i inne przepisy prawa.
              </Text>
            </li>
            <li>
              <Text>
                Spory odnoszące się i wynikające z Konkursu będą rozwiązywane przez sąd powszechny
                właściwy miejscowo dla siedziby Organizatora.
              </Text>
            </li>
            <li>
              <Text>
                Organizator zastrzega sobie prawo do zmiany zasad Konkursu w trakcie jego trwania.
                Informacja o zmianach będzie zamieszczona na Fanpage&rsquo;u oraz na oficjalnej
                stronie Organizatora.
              </Text>
            </li>
            <li>
              <Text>
                Regulamin Konkursu dostępny jest na oficjalnej stronie Organizatora:{' '}
                <TextLink modifiers={['darkGray']} href="https://luck.org.pl/">https://luck.org.pl</TextLink>
              </Text>
            </li>
          </ListOl>
        </Container>
      </BlogLayout>
    </>
  );
};

export default Index;
